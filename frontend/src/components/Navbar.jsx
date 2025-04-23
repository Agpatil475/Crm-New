import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-16 bg-white border-b flex items-center justify-between px-4">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Shopping Cart */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>

        {/* Profile Button */}
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="/profile-placeholder.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;