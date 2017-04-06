import React from 'react';
import { Link } from 'react-router';

const Header = () => (
    <nav className="pa3 pa4-ns">
        <a className="link dim black b f1 f-headline-ns tc db" href="https://twitter.com/altshort" target="_blank" title="Twitter">Jon Short</a>
        <h2 className="f6 gray fw2 tc ttu tracked mt0 mb3 mb4-ns">Design / Front-End</h2>
        <div className="tc pb3">
            <Link className="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</Link>
            <Link className="link dim gray f6 f5-ns dib mr3" to="/about" title="About">About</Link>
            <Link className="link dim gray f6 f5-ns dib" to="/contact" title="Contact">Contact</Link>
        </div>
    </nav>
);

export default Header;