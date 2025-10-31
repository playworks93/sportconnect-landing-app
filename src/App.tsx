import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import ChatInterface from './components/ChatInterface'
import EventFeed from './components/EventFeed'
import Forum from './components/Forum'

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
          <p className="tagline">Meet Like-minded Sports Lovers</p>
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
          <li>User Profiles with Sports Interests</li>
          <li>Swiping Mechanism for Matches</li>
          <li>In-App Chat for Communication</li>
          <li>Event Integration for Local Sports Outings</li>
          <li>Sports-Related Forums and Discussions</li>
          <li>Personalized Match Recommendations</li>
          </ul>
        </div>
        <p>&copy; 2025 SportConnect. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App