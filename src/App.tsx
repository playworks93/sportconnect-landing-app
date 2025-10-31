import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import ChatWindow from './components/ChatWindow'
import EventDetails from './components/EventDetails'
import SearchFilter from './components/SearchFilter'

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
          <p className="tagline">Find Your Match Through Sports</p>
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
          <li>User Profiles with Interests</li>
          <li>Match Algorithm Based on Sports Preferences</li>
          <li>Chat and Messaging Functionality</li>
          <li>Event Creation and RSVP for Local Sports Events</li>
          <li>Search and Filter by Sport Type</li>
          <li>User Activity Feed and Notifications</li>
          </ul>
        </div>
        <p>&copy; 2025 SportConnect. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App