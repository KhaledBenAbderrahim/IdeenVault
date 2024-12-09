import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function IdeaPagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  totalItems,
  itemsPerPage 
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // For mobile, show limited page numbers
  const getVisiblePages = () => {
    if (window.innerWidth < 640) {
      if (totalPages <= 3) return pages;
      if (currentPage <= 2) return [1, 2, 3, '...', totalPages];
      if (currentPage >= totalPages - 1) return [1, '...', totalPages - 2, totalPages - 1, totalPages];
      return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-4 py-3 sm:px-6">
      <div className="text-sm text-gray-700">
        <span className="font-medium">{startItem}</span>
        {' - '}
        <span className="font-medium">{endItem}</span>
        {' von '}
        <span className="font-medium">{totalItems}</span>
        {' Einträgen'}
      </div>

      <div className="flex items-center space-x-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium ${
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="sr-only">Vorherige</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </motion.button>

        <nav className="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
          {getVisiblePages().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white">
                  ...
                </span>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                    currentPage === page
                      ? 'z-10 bg-emerald-50 border-emerald-500 text-emerald-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } rounded-md mx-1`}
                >
                  {page}
                </motion.button>
              )}
            </React.Fragment>
          ))}
        </nav>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="sr-only">Nächste</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      </div>
    </div>
  );
}