import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const GiniAvatar = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold shadow-lg">
    G
  </div>
);

const TypingIndicator = () => (
  <div className="flex space-x-1 px-2 py-1">
    {[1, 2, 3].map((dot) => (
      <motion.div
        key={dot}
        className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: dot * 0.1,
        }}
      />
    ))}
  </div>
);

export default function GiniChat() {
  // Initialize state from localStorage if available
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('giniChat.isOpen');
    return saved ? JSON.parse(saved) : false;
  });
  
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

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('giniChat.isOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('giniChat.messages', JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
    };
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate Gini's response
    setTimeout(() => {
      const giniResponse = {
        id: messages.length + 2,
        text: "Entschuldigung, ich bin noch in der Entwicklung und kann noch nicht richtig antworten. Bald werde ich dir aber bei deinen Ideen helfen können!",
        sender: 'gini',
      };
      setMessages(prev => [...prev, giniResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <GiniAvatar />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 w-full max-w-sm bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <GiniAvatar />
                <div>
                  <h3 className="font-semibold">Gini</h3>
                  <p className="text-xs text-emerald-100">KI-Assistent</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-emerald-50/50 to-white">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'gini' && (
                    <div className="mr-2 flex-shrink-0">
                      <GiniAvatar />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white shadow-md border border-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center"
                >
                  <div className="mr-2">
                    <GiniAvatar />
                  </div>
                  <div className="bg-white rounded-2xl shadow-md border border-gray-100">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Schreibe eine Nachricht..."
                  className="flex-1 min-w-0 rounded-full px-4 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <PaperAirplaneIcon className="w-5 h-5 transform rotate-90" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}