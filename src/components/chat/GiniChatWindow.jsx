import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { GiniAvatar, TypingIndicator } from './GiniChatElements';

export default function GiniChatWindow({ position, onClose }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('giniChat.messages');
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        text: "Hi! 👋 Ich bin Gini, deine KI-Assistentin für innovative Ideen. Ich bin noch in der Entwicklung, aber ich bin bald für dich da! Gemeinsam werden wir deine Ideen zum Leben erwecken! ✨",
        sender: 'gini',
      },
    ];
  });
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Get position class based on corner
  const getPositionClass = () => {
    switch (position.corner) {
      case 'top-left':
        return 'top-20 left-4';
      case 'top-right':
        return 'top-20 right-4';
      case 'bottom-left':
        return 'bottom-20 left-4';
      case 'bottom-right':
        return 'bottom-20 right-4';
      default:
        return 'bottom-20 right-4';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const giniResponse = {
        id: messages.length + 2,
        text: "Entschuldigung, ich bin noch in der Entwicklung und kann noch nicht richtig antworten. Bald werde ich dir aber bei deinen Ideen helfen können!",
        sender: 'gini',
      };
      setMessages(prev => [...prev, giniResponse]);
      setIsTyping(false);
      localStorage.setItem('giniChat.messages', JSON.stringify([...messages, userMessage, giniResponse]));
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`fixed ${getPositionClass()} w-[calc(100%-2rem)] md:w-[28rem] lg:w-[32rem] 
                 bg-white rounded-xl md:rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100`}
    >
      {/* Chat Content */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 md:p-4 flex items-center justify-between text-white">
        <div className="flex items-center space-x-2 md:space-x-3">
          <GiniAvatar />
          <div>
            <h3 className="font-semibold text-sm md:text-base">Gini</h3>
            <p className="text-[10px] md:text-xs text-emerald-100">KI-Assistent</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <XMarkIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[50vh] md:h-[70vh] max-h-[600px] overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'gini' && (
              <div className="mr-1.5 md:mr-2 flex-shrink-0">
                <GiniAvatar />
              </div>
            )}
            <div className={`max-w-[85%] rounded-xl md:rounded-2xl px-3 md:px-4 py-1.5 md:py-2 ${
              message.sender === 'user'
                ? 'bg-emerald-500 text-white'
                : 'bg-white shadow-md border border-gray-100'
            }`}>
              <p className="text-xs md:text-sm">{message.text}</p>
            </div>
          </motion.div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-2 md:p-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Schreibe eine Nachricht..."
            className="flex-1 min-w-0 rounded-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent 
                     text-xs md:text-sm"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-emerald-500 text-white flex items-center 
                     justify-center hover:bg-emerald-600 focus:outline-none focus:ring-2 
                     focus:ring-emerald-500 focus:ring-offset-2"
          >
            <PaperAirplaneIcon className="w-4 h-4 md:w-6 md:h-6 transform rotate-90" />
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}