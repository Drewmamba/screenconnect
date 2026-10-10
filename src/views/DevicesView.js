import React, { useState } from 'react';
import './DevicesView.css';

function DevicesView({ searchQuery }) {
  const [devices] = useState([
    { id: 1, name: 'Office-PC-01', type: 'Windows', status: 'online', lastSeen: '2 min ago', users: 1 },
    { id: 2, name: 'Laptop-John', type: 'Windows', status: 'online', lastSeen: 'now', users: 1 },
    { id: 3, name: 'Server-DB-02', type: 'Linux', status: 'offline', lastSeen: '15 min ago', users: 0 },
    { id: 4, name: 'Workstation-05', type: 'Windows', status: 'online', lastSeen: 'now', users: 2 },
    { id: 5, name: 'Mac-Studio', type: 'macOS', status: 'online', lastSeen: '5 min ago', users: 1 },
  ]);

  const filteredDevices = devices.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColor = (status) => {
    return status === 'online' ? '#00b341' : '#999';
  };

  return (
    <div className="devices-view">
      <div className="view-header">
        <h2>Devices</h2>
        <button className="btn-primary">+ Add Device</button>
      </div>

      <div className="devices-table">
        <table>
          <thead>
            <tr>
              <th>Device Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Last Seen</th>
              <th>Active Users</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <tr key={device.id}>
                <td className="device-name">{device.name}</td>
                <td>{device.type}</td>
                <td>
                  <span className="status-badge" style={{ backgroundColor: statusColor(device.status) }}>
                    {device.status}
                  </span>
                </td>
                <td>{device.lastSeen}</td>
                <td>{device.users}</td>
                <td className="actions">
                  <button className="action-btn">View</button>
                  <button className="action-btn">Control</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DevicesView;
