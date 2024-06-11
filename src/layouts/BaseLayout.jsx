import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Rooms">Rooms</Link></li>
        <li><Link to="/Activities">Activities</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Facilities">Facilities</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default BaseLayout;
