import React from 'react';
import PropTypes from 'prop-types';

const Anchor = props => (
  <a
    className="f5 fw6 black no-underline underline-hover"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
      {props.children}
  </a>
);

Anchor.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

export default Anchor;
