import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { GiniAvatar, TypingIndicator } from '../../chat/GiniChatElements';
import { useHRGiniMessages } from '../hooks/useHRGiniMessages';

export default function HRGiniChatWindow({ position, onClose }) {
  const {
    messages,
    inputText,
    setInputText,
    isTyping,
    handleSubmit
  } = useHRGiniMessages();

  // Get position class based on corner
  const getPositionClass = () => {
    const isMobile = window.innerWidth < 768;
    const baseClasses = 'fixed z-[100]';
    const sizeClasses = isMobile ? 'w-[calc(100%-2rem)] h-[80vh] md:h-auto' : 'w-[28rem]';
    
    switch (position.corner) {
      case 'top-left':
        return `${baseClasses} ${sizeClasses} top-20 left-4`;
      case 'top-right':
        return `${baseClasses} ${sizeClasses} top-20 right-4`;
      case 'bottom-left':
        return `${baseClasses} ${sizeClasses} bottom-20 left-4`;
      case 'bottom-right':
        return `${baseClasses} ${sizeClasses} bottom-20 right-4`;
      default:
        return `${baseClasses} ${sizeClasses} bottom-20 right-4`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`${getPositionClass()} bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100`}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          <GiniAvatar />
          <div>
            <h3 className="font-semibold text-sm">Gini</h3>
            <p className="text-[10px] text-emerald-100">HR-Assistentin</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[calc(100%-8rem)] overflow-y-auto p-3 space-y-3">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'gini' && (
              <div className="mr-1.5 flex-shrink-0">
                <GiniAvatar />
              </div>
            )}
            <div className={`max-w-[85%] rounded-xl px-3 py-1.5 ${
              message.sender === 'user'
                ? 'bg-emerald-500 text-white'
                : 'bg-white shadow-md border border-gray-100'
            }`}>
              <p className="text-xs">{message.text}</p>
            </div>
          </motion.div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Schreibe eine Nachricht..."
            className="flex-1 min-w-0 rounded-full px-3 py-2 border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                     text-xs"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center 
                     justify-center hover:bg-emerald-600 focus:outline-none focus:ring-2 
                     focus:ring-emerald-500 focus:ring-offset-2"
          >
            <PaperAirplaneIcon className="w-4 h-4 transform rotate-90" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}