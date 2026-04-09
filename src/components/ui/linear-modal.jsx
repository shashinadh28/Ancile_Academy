import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DialogContext = createContext();

export function Dialog({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = React.useId();

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, id, transition }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, className, style }) {
  const { setIsOpen, id } = useContext(DialogContext);
  return (
    <motion.div
      layoutId={`dialog-${id}`}
      className={className}
      style={style}
      onClick={() => setIsOpen(true)}
      role="button"
      tabIndex={0}
    >
      {children}
    </motion.div>
  );
}

export function DialogContainer({ children, className }) {
  const { isOpen, setIsOpen } = useContext(DialogContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className={`relative w-full max-w-5xl ${className}`} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DialogContent({ children, className, style }) {
  const { id, transition } = useContext(DialogContext);
  return (
    <motion.div
      layoutId={`dialog-${id}`}
      transition={transition}
      className={`overflow-hidden bg-white dark:bg-zinc-900 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function DialogImage({ src, alt, className }) {
  const { id } = useContext(DialogContext);
  return (
    <motion.img
      layoutId={`dialog-img-${id}`}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export function DialogTitle({ children, className }) {
  const { id } = useContext(DialogContext);
  return (
    <motion.div layoutId={`dialog-title-${id}`} className={className}>
      {children}
    </motion.div>
  );
}

export function DialogDescription({ children, variants, disableLayoutAnimation }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout={!disableLayoutAnimation}
    >
      {children}
    </motion.div>
  );
}

export function DialogClose({ className }) {
  const { setIsOpen } = useContext(DialogContext);
  return (
    <button
      onClick={() => setIsOpen(false)}
      className={`absolute top-4 right-4 ${className}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
}
