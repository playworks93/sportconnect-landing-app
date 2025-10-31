import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import Messaging from './components/Messaging'
import EventCalendar from './components/EventCalendar'
import NotificationBell from './components/NotificationBell'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SportConnect</h1>
          <p className="tagline">Meet Your Match, Share Your Game</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Profile Creation</li>
          <li>Sports Interests Matching</li>
          <li>In-App Messaging</li>
          <li>Event Creation and RSVP</li>
          <li>User Activity Feed</li>
          <li>Match Recommendations</li>
          </ul>
        </div>
        <p>&copy; 2025 SportConnect. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App