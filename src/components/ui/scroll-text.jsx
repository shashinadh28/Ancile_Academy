import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * TextAnimation provides a scroll-triggered text reveal effect using framer-motion.
 * It can animate words or characters sequentially (letterAnime) or appear as a block.
 */
export default function TextAnimation({
  text,
  variants,
  classname = '', // allowing 'classname' for compatibility with user snippet
  className = '', // standard react prop
  as: Component = 'div',
  letterAnime = false,
  lineAnime = false, // We'll treat lineAnime as word-by-word or standard block stagger depending on need
  direction = 'up',
  delay = 0,
  highlightWords = [], // words to apply a specific class to
  highlightClass = 'text-primary-600',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const MotionComponent = motion[Component] || motion.div;
  const combinedClassName = `${classname} ${className}`.trim();

  // default custom variants if not supplied
  const defaultVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'down' ? -20 : direction === 'up' ? 20 : 0,
      x: direction === 'right' ? -20 : direction === 'left' ? 20 : 0,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    },
  };

  const finalVariants = variants || defaultVariants;

  // Helper to check if a word is in the highlight list
  const isHighlighted = (word) => {
    // simple string match without punctuation
    const cleanWord = word.replace(/[.,!?]/g, '');
    return highlightWords.includes(cleanWord);
  };

  if (letterAnime) {
    const words = text.split(' ');
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: delay * i },
      }),
    };
    const child = variants || {
      hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
      <MotionComponent
        ref={ref}
        className={combinedClassName}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, wordIndex) => {
          const isHighlight = isHighlighted(word);
          return (
            <span key={wordIndex} className={`inline-block mr-[0.25em] ${isHighlight ? highlightClass : ''}`}>
              {word.split('').map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={child}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          );
        })}
      </MotionComponent>
    );
  }

  if (lineAnime) {
    const words = text.split(' ');
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: delay * i },
      }),
    };
    const child = variants || {
      hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: 'easeOut' } },
    };

    return (
      <MotionComponent
        ref={ref}
        className={combinedClassName}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, index) => {
          const isHighlight = isHighlighted(word);
          return (
            <motion.span 
              key={index} 
              variants={child} 
              className={`inline-block mr-[0.25em] ${isHighlight ? highlightClass : ''}`}
            >
              {word}
            </motion.span>
          );
        })}
      </MotionComponent>
    );
  }

  // Block text animation
  return (
    <MotionComponent
      ref={ref}
      variants={finalVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={combinedClassName}
    >
      {text}
    </MotionComponent>
  );
}
