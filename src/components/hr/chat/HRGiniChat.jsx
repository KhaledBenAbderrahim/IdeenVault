import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GiniChatIcon from '../../chat/GiniChatIcon';
import HRGiniChatWindow from './HRGiniChatWindow';
import { useHRGiniChat } from '../hooks/useHRGiniChat';

export default function HRGiniChat() {
  const {
    isOpen,
    setIsOpen,
    position,
    handleDragEnd,
    getPositionStyle
  } = useHRGiniChat();

  return (
    <>
      {/* Draggable Chat Icon */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{ 
          left: 0, 
          right: window.innerWidth - 64, 
          top: 0, 
          bottom: window.innerHeight - 64 
        }}
        onDragEnd={handleDragEnd}
        animate={getPositionStyle()}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed z-[100] touch-none"
        style={{
          // Ensure proper positioning on mobile
          bottom: position.corner.includes('bottom') ? '5rem' : 'auto',
          top: position.corner.includes('top') ? '1rem' : 'auto',
          left: position.corner.includes('left') ? '1rem' : 'auto',
          right: position.corner.includes('right') ? '1rem' : 'auto'
        }}
      >
        <GiniChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <HRGiniChatWindow position={position} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}