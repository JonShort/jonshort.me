import React from 'react';
import PropTypes from 'prop-types';

const A = ({children, className, color, href}) => {
    return (
        <a
            className={`${className} hover-${color} color-inherit`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            >
            {children}
        </a>
    )
};

A.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string.isRequired,
};

A.defaultProps = {
    color: "gold",
};

export default A;