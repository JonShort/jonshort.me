import React from 'react';
import { Link } from 'react-router';

const HeaderLite = () => {
    return (
        <header className="w-100 ph2 bb b--black-50">
            <Link className="no-underline" to="/">
                <h1 className="f5 f4-ns mid-gray pr2">Home</h1>
            </Link>
        </header>
    );
}

export default HeaderLite;