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
          className={activeTab === 'user_profile_creation' ? 'active' : ''}
          onClick={() => setActiveTab('user_profile_creation')}
        >
          User Profile Creation
        </button>
        <button 
          className={activeTab === 'sports_interests_matching' ? 'active' : ''}
          onClick={() => setActiveTab('sports_interests_matching')}
        >
          Sports Interests Matching
        </button>
        <button 
          className={activeTab === 'in_app_messaging' ? 'active' : ''}
          onClick={() => setActiveTab('in_app_messaging')}
        >
          In App Messaging
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

        {activeTab === 'user_profile_creation' && (
          <div className="tab-content">
            <h2>User Profile Creation</h2>
            <p>Manage your user profile creation here.</p>
          </div>
        )}

        {activeTab === 'sports_interests_matching' && (
          <div className="tab-content">
            <h2>Sports Interests Matching</h2>
            <p>Manage your sports interests matching here.</p>
          </div>
        )}

        {activeTab === 'in_app_messaging' && (
          <div className="tab-content">
            <h2>In-App Messaging</h2>
            <p>Manage your in app messaging here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard