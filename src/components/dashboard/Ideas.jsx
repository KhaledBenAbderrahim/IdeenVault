import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mockIdeas } from '../../data/mockIdeas';
import IdeaDetails from './IdeaDetails';
import IdeaFilters from './ideas/IdeaFilters';
import IdeaList from './ideas/IdeaList';
import IdeaHeader from './ideas/IdeaHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Ideas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [creatorFilter, setCreatorFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [phaseFilter, setPhaseFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ideasPerPage = 8;

  const filteredAndSortedIdeas = useMemo(() => {
    let filtered = mockIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.shortTitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || idea.status === statusFilter;
      const matchesCreator = !creatorFilter || idea.creator.toLowerCase().includes(creatorFilter.toLowerCase());
      const matchesPriority = !priorityFilter || idea.priority === priorityFilter;
      const matchesPhase = !phaseFilter || idea.phase === phaseFilter;

      const now = new Date();
      const createdDate = new Date(idea.createdAt);
      const daysDiff = (now - createdDate) / (1000 * 60 * 60 * 24);

      switch (dateFilter) {
        case 'today': return matchesSearch && matchesStatus && matchesCreator && matchesPriority && matchesPhase && daysDiff < 1;
        case 'week': return matchesSearch && matchesStatus && matchesCreator && matchesPriority && matchesPhase && daysDiff <= 7;
        case 'month': return matchesSearch && matchesStatus && matchesCreator && matchesPriority && matchesPhase && daysDiff <= 30;
        default: return matchesSearch && matchesStatus && matchesCreator && matchesPriority && matchesPhase;
      }
    });

    return filtered.sort((a, b) => {
      const dateA = new Date(sortOrder === 'newest' ? a.createdAt : a.updatedAt);
      const dateB = new Date(sortOrder === 'newest' ? b.createdAt : b.updatedAt);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [searchTerm, statusFilter, creatorFilter, priorityFilter, phaseFilter, dateFilter, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, creatorFilter, priorityFilter, phaseFilter, dateFilter, sortOrder]);

  const totalPages = Math.ceil(filteredAndSortedIdeas.length / ideasPerPage);
  const displayedIdeas = filteredAndSortedIdeas.slice(
    (currentPage - 1) * ideasPerPage,
    currentPage * ideasPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PaginationControls = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center space-x-2 py-4 bg-white border-t border-gray-200">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        
        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 rounded-md border hover:bg-gray-50`}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 rounded-md border ${
              currentPage === number
                ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                : 'hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`px-4 py-2 rounded-md border hover:bg-gray-50`}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <IdeaHeader
        totalIdeas={filteredAndSortedIdeas.length}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <IdeaFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          creatorFilter={creatorFilter}
          setCreatorFilter={setCreatorFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          phaseFilter={phaseFilter}
          setPhaseFilter={setPhaseFilter}
          showFilters={showFilters}
        />

        <IdeaList
          ideas={displayedIdeas}
          onSelectIdea={setSelectedIdea}
        />

        <PaginationControls />
      </div>

      {selectedIdea && (
        <IdeaDetails idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}
    </motion.div>
  );
}