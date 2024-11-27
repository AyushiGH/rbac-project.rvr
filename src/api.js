// src/api.js

// Mock data or API call logic for fetchUsers
export const fetchUsers = () => {
  return Promise.resolve(mockData.users);  // Or your API logic here
};

// Mock data or API call logic for deleteUser
export const deleteUser = (id) => {
  return Promise.resolve(mockData.users.filter(user => user.id !== id));  // Your delete logic
};

// src/api.js

// Add a role (mock implementation)
export const addRole = (role) => {
  return Promise.resolve({ success: true, role: role }); // Mock response
};
// src/api.js

const mockData = {
  users: [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
  ],
  roles: [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'User' },
  ],
};

export const getUsers = () => Promise.resolve(mockData.users);
export const getRoles = () => Promise.resolve(mockData.roles);


