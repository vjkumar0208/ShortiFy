import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Default avatar as a data URL (a simple gray avatar)
const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999999'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">ShortiFy</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className={`text-gray-600 hover:text-gray-900 flex items-center space-x-2 px-4 py-2 rounded-full ${
                isActive('/') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Home</span>
            </Link>
            <Link
              to="/dashboard"
              className={`text-gray-600 hover:text-gray-900 flex items-center space-x-2 px-4 py-2 rounded-full ${
                isActive('/dashboard') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              to="/profile"
              className={`flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-full ${
                isActive('/profile') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
              }`}
            >
              <img
                src={user?.profilePhoto || DEFAULT_AVATAR}
                alt="Profile"
                className="w-8 h-8 rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DEFAULT_AVATAR;
                }}
              />
              <span>{user?.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 