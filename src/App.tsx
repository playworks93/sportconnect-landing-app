import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import ProfileComponent from './components/ProfileComponent'
import MatchSwipeComponent from './components/MatchSwipeComponent'
import EventComponent from './components/EventComponent'
import ChatComponent from './components/ChatComponent'
import FeedComponent from './components/FeedComponent'

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
          <li>User Profiles with Sports Interests</li>
          <li>Swipe to Match Functionality</li>
          <li>Event Creation and Participation</li>
          <li>Chat and Messaging System</li>
          <li>Activity Feed and Community Posts</li>
          <li>Personalized Sport Recommendations</li>
          </ul>
        </div>
        <p>&copy; 2025 SportConnect. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App