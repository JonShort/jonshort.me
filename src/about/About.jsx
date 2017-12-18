import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <article className="cf ph3 ph5-ns pt5 pb3">
                <header className="fn fl-ns w-50-ns pr4-ns">
                    <h1 className="f2 lh-title fw8 mb3 mt0 pt3 bt bw2">
                    About
                    </h1>
                    <div className="pv2">
                        <a className="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/JonShort" title="GitHub" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                        </a>
                        <a className="link hover-silver near-black dib h2 w2 mr3" href="https://twitter.com/altshort" title="Twitter" target="_blank" rel="noopener noreferrer">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
                        </a>
                    </div>
                </header>
                <div className="fn fl-ns w-50-ns">
                    <p className="f5 lh-copy measure mt0-ns">
                    I am a developer at <a className="f5 fw6 bg-dark-green white no-underline underline-hover" href="https://rightindem.com/" target="_blank" rel="noopener noreferrer">RightIndem</a>, 
                    focusing on best practice, maintainability, and bridging the gap between
                    design and development.
                    </p>
                    <p className="f5 lh-copy measure">
                    I am the maintainer of RightIndem's re-usable UI component library, supporting the company's <a className="f5 fw6 bg-blue white no-underline underline-hover" href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React</a> applications.
                    The UI library is a private npm package, with components ranging from a standard button, to a extensible dropdown.
                    The components are documented using <a className="f5 fw6 bg-red white no-underline underline-hover" href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">React Storybook</a> and
                    every component has unit tests written using <a className="f5 fw6 bg-yellow black no-underline underline-hover" href="https://github.com/airbnb/enzyme" target="_blank" rel="noopener noreferrer">Jest with Enzyme</a>.
                    </p>
                    <p className="f5 lh-copy measure">
                    I have a few personal projects, which I use mainly as a way to keep up to date with new tech
                    (this site started as a way to try <a className="f5 fw6 bg-gray white no-underline underline-hover" href="http://tachyons.io/" target="_blank" rel="noopener noreferrer">Tachyons</a>).
                    I've been using the awesome <a className="f5 fw6 bg-green white no-underline underline-hover" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> to
                    make a webapp collating the best rhyming terms for the members of the RightIndem design team.
                    Check it out <a className="f5 fw6 bg-green white no-underline underline-hover" href="https://github.com/JonShort/DesignerRhymer" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                    <p className="f5 lh-copy measure">
                    Most recently I have been checking out <a className="f5 fw6 bg-yellow black no-underline underline-hover" href="https://flow.org/" target="_blank" rel="noopener noreferrer">Flow</a> making a
                    more visual experience, find the repo <a className="f5 fw6 bg-hot-pink white no-underline underline-hover" href="https://github.com/JonShort/aesthetic" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
            </article>
            <div className="bb b--black-10 ph3 ph5-ns pt1 pb4">
                <Link to="/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                    <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentColor'}}>
                        <title>chevronLeft icon</title>
                        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                    </svg>
                    <span className="pl1">Return to Home</span>
                </Link>
            </div>
        </section>
    )
};

export default About;