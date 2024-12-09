import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';

export default function QRCodeOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 hidden md:block">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors duration-300 group"
      >
        <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 max-w-sm w-full mx-4"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile Ansicht
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Scannen Sie den QR-Code, um die mobile Version anzuzeigen
                </p>
                <div className="bg-emerald-50 p-6 rounded-xl mb-6 inline-block">
                  <QRCodeSVG
                    value="https://ideen-vault.vercel.app/"
                    size={200}
                    level="H"
                    includeMargin={true}
                    bgColor="#f0fdf4"
                    fgColor="#064e3b"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  https://ideen-vault.vercel.app/
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}