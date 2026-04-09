import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabsContext = createContext();

export function TabsProvider({ children, defaultValue, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const hasMounted = useRef(false);
  useEffect(() => { hasMounted.current = true; }, []);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, hasMounted }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ children, className }) {
  return <div className={`flex flex-col gap-2 ${className || ''}`}>{children}</div>;
}

export function TabItem({ children, value }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <div
      onClick={() => setActiveTab(value)}
      className="cursor-pointer relative"
      role="tab"
      aria-selected={isActive}
    >
      {isActive && (
        <motion.div
          layoutId="tab-indicator"
          className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
          style={{ background: 'linear-gradient(180deg, #2563eb, #6366f1)' }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
        />
      )}
      <div
        className={`pl-5 py-3 rounded-r-xl transition-colors duration-200 ${
          isActive ? 'bg-blue-50/80' : 'hover:bg-gray-50'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function TabHeader({ children, value }) {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  return (
    <h3
      className={`text-[15px] font-bold transition-colors duration-200 ${
        isActive ? 'text-gray-900' : 'text-gray-500'
      }`}
    >
      {children}
    </h3>
  );
}

export function TabDes({ children, value }) {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <motion.div
      key={value}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="pt-2">{children}</div>
    </motion.div>
  );
}

export function TabImageContainer({ children, className }) {
  return (
    <div className={`relative hidden md:block ${className || ''}`}>
      <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
        {children}
      </div>
    </div>
  );
}

export function TabImage({ children, value }) {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <motion.div
      key={value}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}
