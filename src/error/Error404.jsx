import React from 'react';
import { Link } from 'react-router';

const Error404 = 
    <section className="bg-washed-blue baskerville">
    <header className="tc ph5 lh-copy">
        <h1 className="f1 f-headline-l code mb0 pv3 pb0-l fw9 dib tracked-tight light-red">404</h1>
        <h2 className="tc f1-l fw1">I've become lost in the matrix</h2>
    </header>
    <div className="bb b--black-10 pt2 pb4 flex justify-center">
        <Link to="/jonshort.me" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
            <span className="pl1">Return to Home</span>
        </Link>
    </div>
    </section>; 

export default Error404;