import React from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import './TopBar.css';

function TopBar({ searchQuery, setSearchQuery }) {
  return (
    <header className="topbar">
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search devices, sessions, or users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="topbar-actions">
        <button className="icon-btn">
          <FiBell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <button className="icon-btn">
          <FiUser size={20} />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
