import React from 'react';
import PropTypes from 'prop-types';

const P = ({ children }) => (
    <p className="f5 f3-ns mt0 lh-copy measure georgia">{children}</p>
);

P.propTypes = {
    children: PropTypes.node,
};

export default P;
