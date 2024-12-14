import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import GiniChatIcon from './GiniChatIcon';
import GiniChatWindow from './GiniChatWindow';

export default function GiniChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('giniChat.position');
    return saved ? JSON.parse(saved) : { corner: 'bottom-right' };
  });

  // Save position to localStorage
  useEffect(() => {
    localStorage.setItem('giniChat.position', JSON.stringify(position));
  }, [position]);

  // Get coordinates based on corner position
  const getPositionStyle = () => {
    switch (position.corner) {
      case 'top-left':
        return { top: '1rem', left: '1rem' };
      case 'top-right':
        return { top: '1rem', right: '1rem' };
      case 'bottom-left':
        return { bottom: '5rem', left: '1rem' };
      case 'bottom-right':
        return { bottom: '5rem', right: '1rem' };
      default:
        return { bottom: '5rem', right: '1rem' };
    }
  };

  // Handle corner snapping on drag end
  const handleDragEnd = (event, info) => {
    const { x, y } = info.point;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Determine closest corner
    const isTop = y < viewportHeight / 2;
    const isLeft = x < viewportWidth / 2;
    
    const newCorner = `${isTop ? 'top' : 'bottom'}-${isLeft ? 'left' : 'right'}`;
    setPosition({ corner: newCorner });
  };

  return (
    <>
      {/* Draggable Chat Icon */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{ left: 0, right: window.innerWidth - 64, top: 0, bottom: window.innerHeight - 64 }}
        onDragEnd={handleDragEnd}
        animate={getPositionStyle()}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed z-50 touch-none"
      >
        <GiniChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <GiniChatWindow position={position} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}