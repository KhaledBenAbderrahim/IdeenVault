import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisionQuestion({ 
  question, 
  currentAnswer, 
  onAnswer,
  currentQuestion, 
  totalQuestions 
}) {
  const [localAnswer, setLocalAnswer] = useState(currentAnswer);
  const textareaRef = useRef(null);

  useEffect(() => {
    setLocalAnswer(currentAnswer);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [currentAnswer, question.id]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      onAnswer(localAnswer);
    }
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 w-8 rounded-full ${
                index === currentQuestion
                  ? 'bg-emerald-500'
                  : index < currentQuestion
                  ? 'bg-emerald-200'
                  : 'bg-gray-200'
              }`}
              initial={index === currentQuestion ? { scale: 0.8 } : { scale: 1 }}
              animate={index === currentQuestion ? { scale: 1 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {currentQuestion + 1} von {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {question.question}
        </h3>

        <div className="relative">
          <textarea
            ref={textareaRef}
            className="input-field min-h-[150px] pr-12 resize-none"
            placeholder={question.placeholder}
            value={localAnswer}
            onChange={(e) => setLocalAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            Strg + Enter zum Fortfahren
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(localAnswer)}
          className="mt-4 w-full btn-primary justify-center"
          disabled={!localAnswer.trim()}
        >
          <span className="flex items-center">
            {currentQuestion === totalQuestions - 1 ? 'Abschließen' : 'Weiter'}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      {/* Keyboard Shortcut Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-sm text-gray-500"
      >
        Drücken Sie Strg + Enter oder klicken Sie auf "Weiter" um fortzufahren
      </motion.div>
    </motion.div>
  );
}