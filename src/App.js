import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './views/DashboardView';
import DevicesView from './views/DevicesView';
import SessionsView from './views/SessionsView';
import ReportsView from './views/ReportsView';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'devices':
        return <DevicesView searchQuery={searchQuery} />;
      case 'sessions':
        return <SessionsView searchQuery={searchQuery} />;
      case 'reports':
        return <ReportsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="main-content">
        <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="view-container">
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default App;
