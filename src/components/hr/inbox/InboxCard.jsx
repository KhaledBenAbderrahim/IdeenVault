import React from 'react';
import { motion } from 'framer-motion';

export default function InboxCard({ idea, onClick }) {
  const getStatusBadge = () => {
    if (!idea.hrReviewed) {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Ausstehend
        </span>
      );
    }
    return idea.approved ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Genehmigt
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        Abgelehnt
      </span>
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm p-6 cursor-pointer border border-gray-200 hover:border-emerald-200 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{idea.title}</h3>
          <p className="text-sm text-gray-500">{idea.shortTitle}</p>
        </div>
        {getStatusBadge()}
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {idea.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {idea.keywords?.map((keyword) => (
          <span
            key={keyword}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>Von {idea.creator}</span>
          <span>•</span>
          <span>{new Date(idea.createdAt).toLocaleDateString()}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick(idea);
          }}
          className="text-emerald-600 hover:text-emerald-700 font-medium"
        >
          Details ansehen →
        </button>
      </div>
    </motion.div>
  );
}