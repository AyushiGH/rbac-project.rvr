import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';



const Navbar = ({ logout, user }) => {
  return (
    <nav>
      <h1>RBAC Dashboard</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {user ? (
          <>
            <li>
              <a href="/admin">{user.role === 'admin' ? 'Admin Panel' : 'Dashboard'}</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <button>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
