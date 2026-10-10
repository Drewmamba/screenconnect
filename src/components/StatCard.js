import React from 'react';
import './StatCard.css';

function StatCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-header">
        <h3>{title}</h3>
        <div className="stat-icon" style={{ color }}>
          {Icon && <Icon size={24} />}
        </div>
      </div>
      <div className="stat-value">{value}</div>
      {subtitle && <div className="stat-subtitle">{subtitle}</div>}
    </div>
  );
}

export default StatCard;
