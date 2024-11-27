import React, { useEffect, useState } from "react";
import { getUsers, updateUser } from "../api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const toggleStatus = (user) => {
    const updatedUser = { ...user, status: user.status === "Active" ? "Inactive" : "Active" };
    updateUser(updatedUser).then(() => {
      setUsers((prev) =>
        prev.map((u) => (u.id === user.id ? updatedUser : u))
      );
    });
  };

  return (
    <div className="user-management">
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.role}) - {user.status}
            <button onClick={() => toggleStatus(user)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
