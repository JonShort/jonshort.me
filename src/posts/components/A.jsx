import React from 'react';

const A = ({ children, ...rest }) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
    >
        {children}
    </a>
);

export default A;
