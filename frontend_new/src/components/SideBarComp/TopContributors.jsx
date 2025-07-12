import React from 'react';

const contributors = [
  { name: 'Sarah Chen', points: 1247 },
  { name: 'Alex Rodriguez', points: 1089 },
  { name: 'Michael Kim', points: 956 },
];

const TopContributors = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold mb-3">Top Contributors</h3>
    <ul className="space-y-3">
      {contributors.map((user) => (
        <li key={user.name} className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-medium text-gray-800 text-sm">{user.name}</div>
            <div className="text-xs text-gray-500">{user.points} points</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TopContributors;
