import React, { useState, useEffect } from "react";

import { getRoles, addRole } from "../api";


const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handleAddRole = () => {
    if (newRole) {
      addRole(newRole).then(() => setRoles([...roles, newRole]));
      setNewRole("");
    }
  };

  return (
    <div className="role-management">
      <h2>Manage Roles</h2>
      <ul>{roles.map((role) => <li key={role}>{role}</li>)}</ul>
      <input
        type="text"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        placeholder="Add new role"
      />
      <button onClick={handleAddRole}>Add Role</button>
    </div>
  );
};

export default RoleManagement;
