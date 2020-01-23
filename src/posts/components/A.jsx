import React from 'react';

const A = ({ children, ...rest }) => (
    <a
        className="hover-gold color-inherit"
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
    >
        {children}
    </a>
);

export default A;
