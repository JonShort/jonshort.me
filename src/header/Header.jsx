import React from 'react';

import Avatar from '../images/avatar.jpg';

const Header = () => {
    return (
        <header className="tc pt3 pb2 pt4-ns pb3-ns">
            <img src={Avatar} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
            <h1 className="f5 f4-ns fw6 mid-gray">Jon Short</h1>
            <h2 className="f6 gray fw2 ttu tracked">Designer</h2>
        </header>
    );
};

export default Header;