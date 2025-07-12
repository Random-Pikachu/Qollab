import React from 'react';

const tags = ['React', 'JavaScript', 'Node.js', 'Python', 'JWT', 'API'];

const TrendingTags = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold mb-3">Trending Tags</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-gray-200">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default TrendingTags;
