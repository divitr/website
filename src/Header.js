import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const location = useLocation();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleItemClick = () => {
    setExpanded(false); // Collapse the menu after clicking on a menu item
  };

  useEffect(() => {
    // Function to determine if the background is dark
    const determineBackground = () => {
      const bodyBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
      const rgb = bodyBackgroundColor.match(/\d+/g);
      const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
      setIsDarkBackground(brightness < 128);
    };

    determineBackground();

    window.addEventListener('resize', determineBackground);
    return () => window.removeEventListener('resize', determineBackground);
  }, []);

  return (
    <div className={`header ${expanded ? 'expanded' : ''}`}>
      <div className="menu-toggle" onClick={toggleExpand}>
        <span className={`triple-bar ${isDarkBackground ? 'white' : 'black'}`}>&#9776;</span>
      </div>
      {expanded && (
        <ul className="menu" onClick={handleItemClick}>
          <li className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className={`menu-link ${isDarkBackground ? 'white' : 'black'} ${location.pathname === '/' ? 'current' : ''}`}>Home</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className={`menu-link ${isDarkBackground ? 'white' : 'black'} ${location.pathname === '/about' ? 'current' : ''}`}>About</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/education' ? 'active' : ''}`}>
            <Link to="/education" className={`menu-link ${isDarkBackground ? 'white' : 'black'} ${location.pathname === '/education' ? 'current' : ''}`}>Education</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>
            <Link to="/projects" className={`menu-link ${isDarkBackground ? 'white' : 'black'} ${location.pathname === '/projects' ? 'current' : ''}`}>Projects</Link>
          </li>
          <li className={`menu-item ${location.pathname === '/research' ? 'active' : ''}`}>
            <Link to="/research" className={`menu-link ${isDarkBackground ? 'white' : 'black'} ${location.pathname === '/research' ? 'current' : ''}`}>Research</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;

