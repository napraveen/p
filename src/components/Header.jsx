import React from 'react';

import logo from '../images/logo.png';
const Header = ({ onNavigateToCertificates }) => {
  return (
    <div>
      <header>
        <div className="header-left">
          {' '}
          <img src={logo} alt="Logo" className="my-logo" />
          &nbsp;
          <h4>GenAI</h4>
        </div>
        <div className="header-middle">
          <p>Home</p>
          <p>About</p>
          <p >Experience</p>
          <p>Projects</p>
          <p onClick={onNavigateToCertificates}>Certifications</p>
          <p>Contact</p>
        </div>
        <div className="header-right">
          <button className="get-started">Dive In</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
