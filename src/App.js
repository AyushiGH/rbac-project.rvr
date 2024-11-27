import React, { useState } from 'react';
import Navbar from './components/Navbar';

import AdminDashboard from './components/AdminDashboard';

import User from './components/User';


const App = () => {
  const [user, setUser] = useState(null);

  // Example users
  const users = [
    { id: 1, username: 'admin', role: 'admin', password: 'admin123' },
    { id: 2, username: 'user1', role: 'user', password: 'user123' },
  ];

  // Simulate login
  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => setUser(null);

  return (
    <div>
      <Navbar logout={logout} user={user} />
      <div className="content">
        {!user ? (
          <div>
            <h2>Login</h2>
            <button onClick={() => login('admin', 'admin123')}>Login as Admin</button>
            <button onClick={() => login('user1', 'user123')}>Login as User</button>
          </div>
        ) : (
          <div>
            <h2>Welcome, {user.username}</h2>
            {user.role === 'admin' ? (
              <User />  // Ensure the component is defined and imported

            ) : (
              <AdminDashboard />  // Ensure the component is defined and imported

            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
