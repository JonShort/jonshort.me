import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({children, color}) => (
    <p className={"f6 f5-ns lh-copy measure i pl4 bl bw1 mb4 b--" + color}>{children}</p>
);

Quote.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
};

Quote.defaultProps = {
    color: 'gold',
};

export default Quote;