import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { mockIdeas } from '../../data/mockIdeas';
import AllUserIdeasCard from './ideas/AllUserIdeasCard';
import IdeaDetails from './IdeaDetails';
import IdeaFilters from './ideas/IdeaFilters';
import IdeaHeader from './ideas/IdeaHeader';
import IdeaPagination from './ideas/IdeaPagination';

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
  const itemsPerPage = 9;

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

  const totalPages = Math.ceil(filteredAndSortedIdeas.length / itemsPerPage);
  const paginatedIdeas = filteredAndSortedIdeas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

        <div className="divide-y divide-gray-200">
          {paginatedIdeas.map((idea) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AllUserIdeasCard
                idea={idea}
                onClick={() => setSelectedIdea(idea)}
              />
            </motion.div>
          ))}

          {paginatedIdeas.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm sm:text-base">
                Keine Ideen gefunden. Passen Sie Ihre Filter an oder erstellen Sie eine neue Idee.
              </p>
            </motion.div>
          )}
        </div>

        <IdeaPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={filteredAndSortedIdeas.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {selectedIdea && (
        <IdeaDetails
          idea={selectedIdea}
          onClose={() => setSelectedIdea(null)}
        />
      )}
    </motion.div>
  );
}