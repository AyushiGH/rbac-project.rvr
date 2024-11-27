// src/pages/Users.js
import React from 'react';
import UserList from '../components/UserCard'; // Corrected import
import User from '../components/User'; // Correct path to User.js

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <User List /> {/* Corrected component usage */}
    </div>
  );
};

export default Users;