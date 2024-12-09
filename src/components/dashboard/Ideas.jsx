import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { mockIdeas } from '../../data/mockIdeas';
import IdeaDetails from './IdeaDetails';
import IdeaFilters from './ideas/IdeaFilters';
import IdeaList from './ideas/IdeaList';
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
  const itemsPerPage = 10;

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

        <IdeaList
          ideas={paginatedIdeas}
          onSelectIdea={setSelectedIdea}
        />

        <IdeaPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={filteredAndSortedIdeas.length}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {selectedIdea && (
        <IdeaDetails idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
      )}
    </motion.div>
  );
}