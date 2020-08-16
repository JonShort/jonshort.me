import React from 'react';
import PropTypes from 'prop-types';

const InlineCode = ({ children }) => (
  <code className="hot-pink">{children}</code>
);

InlineCode.propTypes = {
  children: PropTypes.node,
};

export default InlineCode;
