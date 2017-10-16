import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArticleWrapper from '../wrappers/ArticleWrapper';
import ArticleContent from '../wrappers/ArticleContent';

import {
    A,
    P,
    Quote,
    Standout,
} from '../ui';

class UsingStyledComponents extends Component {
    componentWillMount() {
        this.props.setColor('hot-pink');
    }

    render() {
        return (
            <div className="t-body">
                <P>
                    At time of writing, it's been five months since myself and <A color={this.props.color} href="https://twitter.com/paulwallas">Paul Wallas</A> incorporated Styled Components
                    into the main React web-app at <A color={this.props.color} href="https://rightindem.com">Rightindem</A>. Since then we've seen the app grow from a simple MVP into a fleshed out
                    project with a large number of contributors.
                </P>
                <P>
                    Initially we styled the app with <A href="http://sass-lang.com/" color={this.props.color}>SASS</A>, with some complex 'SASS maps' and variables structures to handle white-labelling.
                    From the beginning it was tough to work with this structure, and the global nature of the compiled stylesheets was completely at odds with the component-based approach we were taking elsewhere.
                </P>
                <P>
                    In an effort to move away from this SASS approach I had a brief stint of writing styles as JS variables and plugging them into the style prop of components. This was messy, and
                    we missed out on a lot of the css functionality we needed.
                </P>
                <P>
                    This is where <A color={this.props.color} href="https://www.styled-components.com/">Styled Components</A> came in, initially as part of a time-boxed investigation into new solutions.
                    A simple and familiar syntax mixed with simple scoped styling made styling individual components within the app much easier to deal with, and sparked the creation of the RI-UI library,
                    a package of UI components that can be placed anywhere within the app while maintaining all the white-labelled goodness we need.
                </P>
                <Quote color={this.props.color}>
                    A simple and familiar syntax mixed with simple scoped styling made styling individual components within the app much easier to deal with.
                </Quote>
                <P>
                    One feature of styled components which has proven invaluable to us is the 'ThemeProvider' method. This allows us to reference a global set of per-theme variables (colour, font, etc.)
                    which are automatically updated when the theme is changed. After some tweaks to incorporate this method on a per-environment basis, we had a relatively robust white-labelling method.
                </P>
                <P>
                    After five months i'm still happy with styled components, and our method of dealing with it has improved a lot since the beginning.
                </P>
                <Standout color={this.props.color}>
                    After five months i'm still happy with styled components.
                </Standout>
                <P>
                    The question of whether i'd recommend styled components to others is a tough one, I feel that UI component libraries and larger applications
                    are perfectly suited to use it, although for smaller projects with no dynamic styling to worry about something like css modules would work well enough.
                </P>
                <P>
                    Looking to other front-end libraries like <A href="https://vuejs.org/" color={this.props.color}>Vue.js</A> (notably <A href="https://vue-loader.vuejs.org/" color={this.props.color}>Vue-loader</A>)
                    which has excellent built-in support for styling components in a clean and scoped manner, I do question if libraries like styled components will need to exist in the future.
                    Regardless, it's nice to see solutions to styling taken seriously without falling by the wayside as something designers will manage and developers won't touch.
                </P>
                <Quote color={this.props.color}>
                    It's nice to see solutions to styling taken seriously without falling by the wayside as something designers will manage and developers won't touch.
                </Quote>
                <P>
                    It's definitely worth trying out styled components if you're undecided on a method of styling your React app. There are also some alternatives, such
                    as <A href="https://github.com/paypal/glamorous" color={this.props.color}>glamorous</A> which aims to be lighter, with better performance than styled components.
                </P>
                <P>
                    The barrier to using styled components has been reduced greatly since the 2.0 release, where the documentation was overhauled making it much easier to access relevent information quickly.
                </P>
            </div>
        )
    }
}

UsingStyledComponents.propTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func,
};

UsingStyledComponents.defaultProps = {
    color: 'hot-pink',
};

export default ArticleWrapper(ArticleContent(UsingStyledComponents));