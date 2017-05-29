import React from 'react';
import PropTypes from 'prop-types';

const Standout = ({children, color}) => (
    <p className={"f5 pv4 b tc bb bt bw1 f3-ns mt0 lh-copy measure georgia b--" + color}>{children}</p>
);

Standout.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
};

Standout.defaultProps = {
    color: 'gold',
};

export default Standout;