import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ children }) => (
    <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 mb4 b--gold">{children}</p>
);

Quote.propTypes = {
    children: PropTypes.node,
};

export default Quote;
