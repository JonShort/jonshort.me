import React from 'react';
import { Link } from 'react-router';

/*const Header = () => (
    <header className="tc pt3 pb2 pt4-ns pb3-ns">
        <img src={Avatar} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        <h1 className="f5 f4-ns fw6 mid-gray">Jon Short</h1>
        <h2 className="f6 gray fw2 ttu tracked">Designer</h2>
    </header>
);*/

const Header = () => (
    <nav className="pa3 pa4-ns">
        <Link className="link dim black b f1 f-headline-ns tc db" to="/about" title="About">Jon Short</Link>
        <h2 className="f6 gray fw2 tc ttu tracked mt0 mb3 mb4-ns">Design / Build</h2>
        <div className="tc pb3">
            <Link className="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</Link>
            <Link className="link dim gray f6 f5-ns dib mr3" to="/about" title="About">About</Link>
            <Link className="link dim gray f6 f5-ns dib" to="/contact" title="Contact">Contact</Link>
        </div>
    </nav>
);

export default Header;