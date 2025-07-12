import React from 'react';

const Header = () => (
  <header className="w-full bg-white shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
      {/* Logo */}
      <div className="text-2xl font-bold">Qollab</div>
      {/* Search */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="bg-black text-white px-4 py-2 rounded font-semibold hover:bg-gray-900 transition-colors">
          + Ask Question
        </button>
        <button className="relative p-2 rounded hover:bg-gray-100">
          <span className="sr-only">Notifications</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
          U
        </div>
      </div>
    </div>
  </header>
);

export default Header;