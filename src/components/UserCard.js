// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser  } from '../api';

import User from './User'; // Update path if needed.

import { someFunction } from '../api'; // Update if needed
import UserForm from './UserForm'; // Corrected path


import { getUsers } from '../api'; // Adjust relative path to the mock folder

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser , setEditingUser ] = useState(null);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelete = (id) => {
    deleteUser (id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  const handleEdit = (user) => {
    setEditingUser (user);
  };

  const handleFormSubmit = (user) => {
    if (editingUser ) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }
    setEditingUser (null);
  };

  return (
    <div>
      <h2>User Management</h2>
      <User Form user={editingUser } onSubmit={handleFormSubmit} /> {/* Corrected component usage */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;