import React from 'react';
import { FiBarChart2, FiMonitor, FiPhone, FiFileText, FiLogOut } from 'react-icons/fi';
import './Sidebar.css';

function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiBarChart2 },
    { id: 'devices', label: 'Devices', icon: FiMonitor },
    { id: 'sessions', label: 'Sessions', icon: FiPhone },
    { id: 'reports', label: 'Reports', icon: FiFileText },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>ScreenConnect</h1>
        <p>Admin Console</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
