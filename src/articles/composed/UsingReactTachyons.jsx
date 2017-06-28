import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArticleWrapper from '../wrappers/ArticleWrapper';
import ArticleContent from '../wrappers/ArticleContent';

import {
    P,
    Quote,
    Standout,
} from '../ui';

class UsingReactTachyons extends Component {

    componentWillMount() {
        this.props.setColor('gold');
    }

    render() {
        return (
            <div>
                <P>
                    Over the past year I've had a few attempts at creating a decent portfolio
                    using different front-end frameworks, but React has been the first that
                    has provided enough challenge, with a reasonable learning curve.
                </P>
                <P>
                    To bootstrap the project i used the excellent create-react-app, which takes
                    care of the development environment. I didn't have any immediate issues with the way the
                    project was set up, so I could start coding straight away.
                </P>
                <P>
                    I realised that as a designer by trade, i'd need to style the site (at least a little bit).
                    Luckily the component-based structure of React makes styling much more relaxing
                    than a classic HTML/CSS combo, and no longer do you have to mess around with a web of SASS or 
                    LESS, where most of your time is spent thinking of classnames that you'll have to remember 
                    in sequence every time you want to repeat the same UI.
                </P>
                <Standout color={this.props.color}>
                    A component should contain everything it neeeds to be used anywhere in
                    the app.
                </Standout>
                <P>
                    This is where the CSS framework Tachyons comes into play. 
                    I'll admit that the primary reason for starting this project was to test out the Tachyons library,
                    which seems well suited to a component-based approach. Tachyons describes itself as 'The latest
                    evolution of atomic-based CSS' and comes in at around 14kb. It consists of hundreds of small classes
                    that handle low-level styling, designed to be combined to create what would have in the past been a single
                    class.
                </P>
                <Quote color={this.props.color}>
                    "Tachyons isn't just a monolithic framework. It's a collection of 
                    small modules that can be mixed and matched or used independently. Use what you need. 
                    Leave the rest."
                </Quote>
                <P>
                    I'm still quite far from feeling like this portfolio project is complete,
                    and I've made a few decisions that i'll need to see pan out with long-term use. 
                    It's been nice to build something from the ground-up, and I'd reccomend using React with Tachyons 
                    to anyone who's familiar with modern JS frameworks and wants a quick way to get things styled up
                    (I've written very little CSS throughout this project).
                </P>
                <P>
                    The code for this site is available on my GitHub, feel free to have a look using
                    the link below.
                </P>
            </div>
        );
    }
};

UsingReactTachyons.propTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func,
};

UsingReactTachyons.defaultProps = {
    color: 'gold',
};

export default ArticleWrapper(ArticleContent(UsingReactTachyons));