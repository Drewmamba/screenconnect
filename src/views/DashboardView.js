import React from 'react';
import { FiMonitor, FiPhone, FiAlertCircle, FiTrendingUp } from 'react-icons/fi';
import StatCard from '../components/StatCard';
import './DashboardView.css';

function DashboardView() {
  const stats = [
    { title: 'Online Devices', value: '127', subtitle: '+8 this week', icon: FiMonitor, color: '#0066cc' },
    { title: 'Active Sessions', value: '34', subtitle: 'Currently connected', icon: FiPhone, color: '#00b341' },
    { title: 'Unresolved Alerts', value: '12', subtitle: '3 critical', icon: FiAlertCircle, color: '#ff6b6b' },
    { title: 'Uptime', value: '99.9%', subtitle: 'Last 30 days', icon: FiTrendingUp, color: '#ffa500' },
  ];

  const recentActivity = [
    { id: 1, device: 'Office-PC-01', action: 'Connected', time: '2 min ago', status: 'success' },
    { id: 2, device: 'Server-DB-02', action: 'Disconnected', time: '15 min ago', status: 'warning' },
    { id: 3, device: 'Laptop-John', action: 'Session Started', time: '1 hour ago', status: 'success' },
    { id: 4, device: 'Workstation-05', action: 'High CPU Alert', time: '2 hours ago', status: 'error' },
  ];

  return (
    <div className="dashboard-view">
      <h2>Dashboard Overview</h2>
      
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-status" style={{
                  backgroundColor: activity.status === 'success' ? '#00b341' : activity.status === 'warning' ? '#ffa500' : '#ff6b6b'
                }}></div>
                <div className="activity-details">
                  <p className="activity-device">{activity.device}</p>
                  <p className="activity-action">{activity.action}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Quick Stats</h3>
          <div className="quick-stats">
            <div className="quick-stat">
              <span>Total Devices</span>
              <strong>342</strong>
            </div>
            <div className="quick-stat">
              <span>Active Users</span>
              <strong>89</strong>
            </div>
            <div className="quick-stat">
              <span>Total Sessions (Today)</span>
              <strong>256</strong>
            </div>
            <div className="quick-stat">
              <span>Avg Response Time</span>
              <strong>1.2s</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
