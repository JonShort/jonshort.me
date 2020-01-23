import React from 'react';
import PropTypes from 'prop-types';

const Standout = ({ children }) => (
    <p className="f5 pv4 b tc bb bt bw1 f3-ns mt0 lh-copy measure georgia b--gold">{children}</p>
);

Standout.propTypes = {
    children: PropTypes.node,
};

export default Standout;
