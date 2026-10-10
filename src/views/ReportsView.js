import React from 'react';
import './ReportsView.css';

function ReportsView() {
  const reports = [
    { id: 1, name: 'Session Activity Report', date: 'Daily', lastRun: '2 hours ago', status: 'ready' },
    { id: 2, name: 'Device Uptime Report', date: 'Weekly', lastRun: 'Yesterday', status: 'ready' },
    { id: 3, name: 'User Access Report', date: 'Monthly', lastRun: '3 days ago', status: 'ready' },
    { id: 4, name: 'Security & Compliance', date: 'Monthly', lastRun: 'Last month', status: 'pending' },
  ];

  return (
    <div className="reports-view">
      <div className="view-header">
        <h2>Reports</h2>
        <button className="btn-primary">+ Generate Custom Report</button>
      </div>

      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h3>{report.name}</h3>
            <div className="report-meta">
              <span>Frequency: {report.date}</span>
              <span>Last Run: {report.lastRun}</span>
            </div>
            <div className="report-status">
              <span className={`status-indicator ${report.status}`}></span>
              <span>{report.status === 'ready' ? 'Ready to Download' : 'Pending'}</span>
            </div>
            <div className="report-actions">
              <button className="action-btn">View</button>
              <button className="action-btn">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportsView;
