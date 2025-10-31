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
          className={activeTab === 'swiping_mechanism_for_matches' ? 'active' : ''}
          onClick={() => setActiveTab('swiping_mechanism_for_matches')}
        >
          Swiping Mechanism For Matches
        </button>
        <button 
          className={activeTab === 'in_app_chat_for_communication' ? 'active' : ''}
          onClick={() => setActiveTab('in_app_chat_for_communication')}
        >
          In App Chat For Communication
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

        {activeTab === 'swiping_mechanism_for_matches' && (
          <div className="tab-content">
            <h2>Swiping Mechanism for Matches</h2>
            <p>Manage your swiping mechanism for matches here.</p>
          </div>
        )}

        {activeTab === 'in_app_chat_for_communication' && (
          <div className="tab-content">
            <h2>In-App Chat for Communication</h2>
            <p>Manage your in app chat for communication here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard