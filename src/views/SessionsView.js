import React, { useState } from 'react';
import './SessionsView.css';

function SessionsView({ searchQuery }) {
  const [sessions] = useState([
    { id: 1, device: 'Office-PC-01', user: 'john.doe', startTime: '09:45 AM', duration: '45 min', status: 'active' },
    { id: 2, device: 'Laptop-John', user: 'jane.smith', startTime: '10:15 AM', duration: '20 min', status: 'active' },
    { id: 3, device: 'Workstation-05', user: 'admin', startTime: '08:30 AM', duration: '2h 15 min', status: 'active' },
    { id: 4, device: 'Server-DB-02', user: 'support@company.com', startTime: 'Yesterday', duration: 'Disconnected', status: 'disconnected' },
  ]);

  const filteredSessions = sessions.filter(s =>
    s.device.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sessions-view">
      <div className="view-header">
        <h2>Remote Sessions</h2>
        <button className="btn-primary">+ Start New Session</button>
      </div>

      <div className="sessions-table">
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Connected User</th>
              <th>Start Time</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSessions.map((session) => (
              <tr key={session.id}>
                <td className="session-device">{session.device}</td>
                <td>{session.user}</td>
                <td>{session.startTime}</td>
                <td>{session.duration}</td>
                <td>
                  <span className={`status-badge ${session.status}`}>
                    {session.status}
                  </span>
                </td>
                <td className="actions">
                  <button className="action-btn">View</button>
                  <button className="action-btn">End</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SessionsView;
