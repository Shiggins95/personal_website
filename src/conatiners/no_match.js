import React from 'react';
import '../styles/no_match.css';
import logo from '../assets/images/personal_website/sh_logo.png';

export const NoMatch = ({ location }) => {
  return (
    <div className="no_match_container">
      <h1>Ouch!</h1>
      <h1>"{location.pathname.substring(1, location.pathname.length)}" not found</h1>
      <p>Please use the navigation options to avoid this page.</p>
      <p>
        If this problem occurs, please submit a contact me by clicking <a href="/contact">here</a>
      </p>
    </div>
  );
};
