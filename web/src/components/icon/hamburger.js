import React from 'react';
import './hamburger.css';

const HamburgerIcon = ({isActive}) => {
  return (
    <button className={`hamburger hamburger--collapse ${isActive ? 'is-active' : 'is-closed'}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}

export default HamburgerIcon
