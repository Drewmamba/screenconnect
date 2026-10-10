# ScreenConnect Admin Console

A modern, lightweight admin console prototype for ScreenConnect-like remote support and device management.

## Features

- **Dashboard**: Overview of online devices, active sessions, alerts, and system uptime
- **Devices**: Browse and manage connected devices with real-time status
- **Sessions**: Monitor and manage active remote support sessions
- **Reports**: Generate and download various reports
- **Search**: Global search across devices, sessions, and users
- **Responsive Design**: Built for desktop usage with a professional UI

## Technology Stack

- **React 18** - UI framework
- **CSS3** - Styling with custom design system
- **React Icons** - Icon library

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Drewmamba/screenconnect.git
cd screenconnect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The console will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.js      # Navigation sidebar
│   ├── TopBar.js       # Top navigation bar
│   └── StatCard.js     # Statistics card component
├── views/              # Page views
│   ├── DashboardView.js
│   ├── DevicesView.js
│   ├── SessionsView.js
│   └── ReportsView.js
├── App.js              # Main app component
└── index.js            # Entry point
```

## Features in Detail

### Dashboard
Displays key metrics:
- Online Devices count
- Active Sessions
- Unresolved Alerts
- System Uptime
- Recent activity feed
- Quick statistics

### Devices
Manage connected devices:
- View all devices with status indicators
- Filter by device name
- See device type, last seen, and active users
- Control and view device details

### Sessions
Monitor remote sessions:
- List all active and recent sessions
- Track session duration and start time
- Quick access to session controls
- End sessions from the dashboard

### Reports
Generate insights:
- Session Activity Report (Daily)
- Device Uptime Report (Weekly)
- User Access Report (Monthly)
- Security & Compliance (Monthly)
- Custom report generation

## Future Enhancements

- [ ] Backend API integration
- [ ] Real-time WebSocket updates
- [ ] User authentication & authorization
- [ ] Email notifications
- [ ] Advanced filtering and sorting
- [ ] Export functionality
- [ ] Dark mode
- [ ] Mobile responsive design
- [ ] Keyboard shortcuts
- [ ] Audit logging

## License

MIT

## Author

Drawn by [@Drewmamba](https://github.com/Drewmamba)
