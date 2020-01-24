import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => (
  <div className="bb b--black-10 pt2 pb4">
      <Link to="/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
          <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentColor'}}>
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
          </svg>
          <span className="pl1">Return to Home</span>
      </Link>
  </div>
);

export default HomeLink;
