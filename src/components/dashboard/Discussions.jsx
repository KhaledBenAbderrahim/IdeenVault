import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import DiscussionDetails from './DiscussionDetails';

// Mock discussions data
const mockDiscussions = [
  {
    id: 1,
    title: "KI in der Personalentwicklung",
    preview: "Wie können wir KI effektiv für die Personalentwicklung nutzen? Ich sehe großes Potenzial in der automatisierten Skill-Analyse und personalisierten Lernpfaden.",
    author: "Neo Anderson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neo",
    date: "vor 2 Stunden",
    likes: 24,
    replies: 8,
    tags: ["KI", "HR", "Innovation"],
    topic: "Technologie"
  },
  {
    id: 2,
    title: "Nachhaltigkeit im Innovationsprozess",
    preview: "Lasst uns diskutieren, wie wir Nachhaltigkeit von Anfang an in unsere Innovationsprozesse integrieren können. Welche Erfahrungen habt ihr bereits gemacht?",
    author: "Trinity Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=trinity",
    date: "vor 5 Stunden",
    likes: 15,
    replies: 6,
    tags: ["Nachhaltigkeit", "Prozesse", "CSR"],
    topic: "Nachhaltigkeit"
  },
  {
    id: 3,
    title: "Remote Workshops - Best Practices",
    preview: "Nach zwei Jahren Remote-Arbeit haben wir viel gelernt. Hier sind meine Top 5 Tools für virtuelle Innovationsworkshops. Was sind eure Favoriten?",
    author: "Morpheus Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=morpheus",
    date: "vor 1 Tag",
    likes: 32,
    replies: 12,
    tags: ["Remote Work", "Workshops", "Tools"],
    topic: "Methoden"
  }
];

export default function Discussions() {
  const { user } = useAuth();
  const [discussions, setDiscussions] = useState(mockDiscussions);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    preview: '',
    tags: ''
  });

  // Filter and sort discussions
  const filteredDiscussions = discussions
    .filter(discussion => {
      const matchesSearch = (
        discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const matchesTopic = !topicFilter || discussion.topic === topicFilter;
      return matchesSearch && matchesTopic;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'popular') return b.likes - a.likes;
      if (sortBy === 'active') return b.replies - a.replies;
      return 0;
    });

  const handleCreateDiscussion = (e) => {
    e.preventDefault();
    const newDiscussionData = {
      id: discussions.length + 1,
      ...newDiscussion,
      author: user.name,
      avatar: user.avatar,
      date: "gerade eben",
      likes: 0,
      replies: 0,
      tags: newDiscussion.tags.split(',').map(tag => tag.trim()),
      topic: "Neu"
    };
    setDiscussions([newDiscussionData, ...discussions]);
    setNewDiscussion({ title: '', preview: '', tags: '' });
    setShowNewDiscussionForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header Section */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(120deg, 
                  rgba(16, 185, 129, 0.1) 0%,
                  rgba(16, 185, 129, 0.05) 50%,
                  rgba(255, 255, 255, 0.1) 100%
                )
              `
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 150%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% -50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
              `
            }}
          />
        </div>

        {/* Content */}
        <div className="relative px-8 py-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center space-x-2 bg-emerald-50 rounded-full px-4 py-1"
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-emerald-700 font-medium">IdeenTalk</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600 bg-clip-text text-transparent"
                >
                  Tauschen Sie Gedanken aus, teilen Sie Erfahrungen
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-600"
                >
                  und gestalten Sie gemeinsam die Zukunft der Innovation
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Diskussionen durchsuchen..."
              className="input-field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="input-field"
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
            >
              <option value="">Alle Themen</option>
              <option value="Technologie">Technologie</option>
              <option value="Nachhaltigkeit">Nachhaltigkeit</option>
              <option value="Methoden">Methoden</option>
            </select>
            <select
              className="input-field"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Neueste</option>
              <option value="popular">Beliebteste</option>
              <option value="active">Aktivste</option>
            </select>
          </div>
          <button
            onClick={() => setShowNewDiscussionForm(true)}
            className="btn-primary whitespace-nowrap"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Diskussion starten
            </span>
          </button>
        </div>
      </div>

      {/* Discussions List */}
      <div className="grid gap-6">
        {filteredDiscussions.map((discussion) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <img
                  src={discussion.avatar}
                  alt={discussion.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    von {discussion.author} • {discussion.date}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                {discussion.topic}
              </span>
            </div>
            <p className="mt-4 text-gray-600 line-clamp-2">
              {discussion.preview}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {discussion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {discussion.likes}
                </span>
                <span className="flex items-center text-gray-500">
                  <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {discussion.replies}
                </span>
              </div>
              <button
                onClick={() => setSelectedDiscussion(discussion)}
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
              >
                Diskussion ansehen →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Discussion Modal */}
      <AnimatePresence>
        {showNewDiscussionForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
            onClick={() => setShowNewDiscussionForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative top-20 mx-auto p-8 border w-full max-w-2xl shadow-lg rounded-lg bg-white"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Neue Diskussion starten</h2>
                <button
                  onClick={() => setShowNewDiscussionForm(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleCreateDiscussion} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Titel
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={newDiscussion.title}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Beschreibung
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="input-field"
                    value={newDiscussion.preview}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, preview: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags (durch Komma getrennt)
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    value={newDiscussion.tags}
                    onChange={(e) => setNewDiscussion({ ...newDiscussion, tags: e.target.value })}
                    placeholder="z.B. Innovation, KI, Prozesse"
                  />
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewDiscussionForm(false)}
                    className="btn-secondary"
                  >
                    <span>Abbrechen</span>
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    <span>Diskussion erstellen</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discussion Details Modal */}
      {selectedDiscussion && (
        <DiscussionDetails
          discussion={selectedDiscussion}
          onClose={() => setSelectedDiscussion(null)}
        />
      )}
    </motion.div>
  );
}