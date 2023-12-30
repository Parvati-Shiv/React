// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="search-box">
        <input type="text" placeholder="Search" />
        {/* Add your search functionality here */}
      </div>
      <div className="logo">
        <Link to="/">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="FreeCodeCamp Logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/signup">Sign up</Link>


        {/* Add more navigation links as needed */}
      </div>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        {/* Add more navigation links as needed */}
      </div>
      <div className="menu-button">
        {/* Add functionality to toggle menu for mobile */}
        <Link to="/fetchcourse">Course</Link>
      </div>
    </nav>
  );
};

export default Navbar;
