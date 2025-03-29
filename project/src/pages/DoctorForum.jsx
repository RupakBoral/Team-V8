import React, { useState } from 'react';
import { FaSearch, FaFilter, FaUserMd, FaComments, FaClock } from 'react-icons/fa';

function DoctorForum() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: 'New Treatment Approach for Type 2 Diabetes',
      content: 'I\'ve been implementing a new protocol for T2D patients combining lifestyle interventions with...',
      author: 'Dr. Sarah Chen',
      category: 'Endocrinology',
      timestamp: '2024-03-15T10:30:00',
      replies: 12,
      views: 145
    },
    {
      id: 2,
      title: 'COVID-19 Long-term Effects Study Results',
      content: 'Our recent study of 500 post-COVID patients has revealed interesting patterns in...',
      author: 'Dr. Michael Roberts',
      category: 'Infectious Disease',
      timestamp: '2024-03-14T15:45:00',
      replies: 28,
      views: 302
    }
  ]);

  const [categories] = useState([
    'All Categories',
    'Cardiology',
    'Neurology',
    'Oncology',
    'Pediatrics',
    'Endocrinology',
    'Infectious Disease',
    'Surgery',
    'Emergency Medicine'
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Doctor Forum</h1>
        <button className="btn-primary flex items-center space-x-2">
          <FaComments />
          <span>New Discussion</span>
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search discussions..."
            className="input-field pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <select
          className="input-field"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          className="input-field"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="most_active">Most Active</option>
          <option value="most_viewed">Most Viewed</option>
        </select>
      </div>

      {/* Discussion List */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{discussion.title}</h3>
                <p className="text-gray-600 line-clamp-2">{discussion.content}</p>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                {discussion.category}
              </span>
            </div>
            
            <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <FaUserMd />
                <span>{discussion.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>{new Date(discussion.timestamp).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaComments />
                <span>{discussion.replies} replies</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFilter />
                <span>{discussion.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Discussion Modal - To be implemented */}
      {/* Pagination - To be implemented */}
    </div>
  );
}

export default DoctorForum;