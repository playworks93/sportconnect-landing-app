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
          className={activeTab === 'user_profiles_with_sports_interests' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles_with_sports_interests')}
        >
          User Profiles With Sports Interests
        </button>
        <button 
          className={activeTab === 'swipe_to_match_functionality' ? 'active' : ''}
          onClick={() => setActiveTab('swipe_to_match_functionality')}
        >
          Swipe To Match Functionality
        </button>
        <button 
          className={activeTab === 'event_creation_and_participation' ? 'active' : ''}
          onClick={() => setActiveTab('event_creation_and_participation')}
        >
          Event Creation And Participation
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

        {activeTab === 'user_profiles_with_sports_interests' && (
          <div className="tab-content">
            <h2>User Profiles with Sports Interests</h2>
            <p>Manage your user profiles with sports interests here.</p>
          </div>
        )}

        {activeTab === 'swipe_to_match_functionality' && (
          <div className="tab-content">
            <h2>Swipe to Match Functionality</h2>
            <p>Manage your swipe to match functionality here.</p>
          </div>
        )}

        {activeTab === 'event_creation_and_participation' && (
          <div className="tab-content">
            <h2>Event Creation and Participation</h2>
            <p>Manage your event creation and participation here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard