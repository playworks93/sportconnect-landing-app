import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_profiles_with_interests' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles_with_interests')}
        >
          User Profiles With Interests
        </button>
        <button 
          className={activeTab === 'match_algorithm_based_on_sports_preferences' ? 'active' : ''}
          onClick={() => setActiveTab('match_algorithm_based_on_sports_preferences')}
        >
          Match Algorithm Based On Sports Preferences
        </button>
        <button 
          className={activeTab === 'chat_and_messaging_functionality' ? 'active' : ''}
          onClick={() => setActiveTab('chat_and_messaging_functionality')}
        >
          Chat And Messaging Functionality
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_profiles_with_interests' && (
          <div className="tab-content">
            <h2>User Profiles with Interests</h2>
            <p>Manage your user profiles with interests here.</p>
          </div>
        )}

        {activeTab === 'match_algorithm_based_on_sports_preferences' && (
          <div className="tab-content">
            <h2>Match Algorithm Based on Sports Preferences</h2>
            <p>Manage your match algorithm based on sports preferences here.</p>
          </div>
        )}

        {activeTab === 'chat_and_messaging_functionality' && (
          <div className="tab-content">
            <h2>Chat and Messaging Functionality</h2>
            <p>Manage your chat and messaging functionality here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard