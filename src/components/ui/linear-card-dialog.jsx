import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const transition = {
  type: 'spring',
  bounce: 0.05,
  duration: 0.3,
};

export default function LinearCardDialog({ items, renderTags }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (carousel.current) {
      setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [items]);

  const current = items[index];

  return (
    <MotionConfig transition={transition}>
      {/* Draggable card row */}
      <motion.div
        ref={carousel}
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -carouselWidth }}
        dragTransition={{ bounceDamping: 30 }}
        className="flex w-full gap-5 py-2 cursor-grab active:cursor-grabbing justify-center"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            className="shrink-0 flex relative flex-col overflow-hidden bg-white cursor-pointer"
            layoutId={`lc-dialog-${item.id}`}
            style={{
              width: 280,
              borderRadius: 18,
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 4px 16px rgba(0,0,0,.06), 0 8px 28px rgba(0,0,0,.04)',
              transition: 'box-shadow .3s, border-color .3s',
            }}
            whileHover={{
              boxShadow: '0 16px 44px rgba(37,99,235,.14), 0 4px 12px rgba(0,0,0,.06)',
              borderColor: '#93c5fd',
            }}
            tabIndex={i}
            onClick={() => { setIndex(i); setIsOpen(true); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIndex(i); setIsOpen(true); } }}
            role="button"
            aria-label={`Open ${item.title} details`}
          >
            <motion.div layoutId={`lc-img-${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
                style={{ height: 180 }}
                loading="lazy"
              />
            </motion.div>
            <div className="flex grow flex-row items-end justify-between p-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {item.iconNode && (
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: item.iconBg || '#dbeafe',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {item.iconNode}
                  </div>
                )}
                <motion.h3
                  layoutId={`lc-title-${item.id}`}
                  className="font-bold text-gray-900 text-sm truncate"
                >
                  {item.title}
                </motion.h3>
              </div>
              <button
                className="absolute bottom-3 right-3 p-2 rounded-xl"
                style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}
                tabIndex={-1}
                aria-label={`Open ${item.title}`}
              >
                <Plus size={16} style={{ color: '#64748b' }} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Portal modal */}
      {isOpen && current && createPortal(
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`backdrop-${current.id}`}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
          />
          <motion.div
            key="lc-dialog-wrapper"
            className="pointer-events-none fixed inset-0 flex items-center justify-center z-[9999] p-4"
          >
            <motion.div
              className="pointer-events-auto relative flex w-full max-w-[520px] flex-col overflow-hidden bg-white max-h-[90vh] overflow-y-auto"
              layoutId={`lc-dialog-${current.id}`}
              style={{ borderRadius: 24, boxShadow: '0 24px 64px rgba(0,0,0,.22), 0 4px 16px rgba(0,0,0,.10)' }}
              tabIndex={-1}
              role="dialog"
            >
              <motion.div layoutId={`lc-img-${current.id}`}>
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full object-cover"
                  style={{ height: 280 }}
                />
              </motion.div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  {current.iconNode && (
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: current.iconBg || '#dbeafe',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {current.iconNode}
                    </div>
                  )}
                  <motion.h2
                    layoutId={`lc-title-${current.id}`}
                    className="text-2xl font-bold text-gray-900"
                  >
                    {current.title}
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: 0.08 }}
                >
                  <p className="text-gray-500 text-[15px] leading-[1.9] mb-5">{current.description}</p>

                  {current.tags && current.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {current.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full"
                          style={{ background: current.iconBg || '#dbeafe', color: current.iconColor || '#1d4ed8' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {current.footerNode}
                </motion.div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-xl cursor-pointer"
                style={{
                  background: 'rgba(0,0,0,.5)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,.15)',
                  color: '#fff',
                }}
                type="button"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </MotionConfig>
  );
}
