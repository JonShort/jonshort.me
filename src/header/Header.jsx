import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="pa3 pa4-ns">
        <h1 className="black b f1 f-headline-ns tc ma0 db">Jon Short</h1>
        <h2 className="f6 gray fw2 tc ttu tracked mt0 mb3 mb4-ns">Design / Front-End</h2>
        <div className="tc pb3">
            <a className="link dim gray f6 f5-ns dib mr3" href="https://www.github.com/jonshort" target="_blank" title="Github">Github</a>
            <a className="link dim gray f6 f5-ns dib mr3" href="https://www.twitter.com/altshort" target="_blank" title="Twitter">Twitter</a>
            <Link className="link dim gray f6 f5-ns dib mr3" to="/about" title="About">About</Link>
        </div>
    </nav>
);

export default Header;