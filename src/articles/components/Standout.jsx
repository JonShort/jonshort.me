import React from 'react';
import PropTypes from 'prop-types';

const Standout = (props) => (
    <blockquote className="f5 pv4 b tc bb bt bw1 f3-ns ml0 mv5 lh-copy measure georgia b--black">{props.children}</blockquote>
);

Standout.propTypes = {
    children: PropTypes.node,
};

export default Standout;
