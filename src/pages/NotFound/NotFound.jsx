import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
      <button className="not-found-button"><Link to="/">Go Back Home</Link></button>
    </div>
  );
};

export default NotFound;