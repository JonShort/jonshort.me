import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArticleWrapper from '../wrappers/ArticleWrapper';
import ArticleContent from '../wrappers/ArticleContent';

import {
    A,
    P,
    // Quote,
    Standout,
} from '../ui';

class UsingStyledComponents extends Component {
    
    componentWillMount() {
        this.props.setColor('hot-pink');
    }

    render() {
        return (
            <div>
                <P>
                    At time of writing, it's been four months since myself and <A color={this.props.color} href="https://twitter.com/paulwallas">Paul Wallas</A> incorporated Styled Components
                    into the main react app at <A color={this.props.color} href="https://rightindem.com">Rightindem</A>.
                </P>
                <P>
                    Originally the app was styled using sass, with some complex sass maps and variables to handle white-labelling. From the start it was tough to work with, and the global
                    nature of the compiled stylesheets was at odds with the component based react.
                </P>
                <P>
                    Following this I tried simply writing styles as JS objects and providing them to the style prop of components, but this was messy, and we missed out on a lot of the
                    css functionality we needed.
                </P>
                <P>
                    This is where <A color={this.props.color} href="https://www.styled-components.com/">Styled Components</A> came in, initally as a spike of potential new solutions.
                    An extremely simple syntax mixed with clean, scoped styling made styling individual components within the app much easier to deal with, and sparked the creation of more
                    packaged UI components that could be placed anywhere within the app.
                </P>
                <Standout color={this.props.color}>
                    We had our new white-labelling method.
                </Standout>
                <P>
                    One feature of styled components that proved invaluable to us was the 'ThemeProvider' method. This allows props to be passed to the styled components which are then
                    changed en-masse when the theme is changed. After some tweaks to incorporate this method on a per-environment basis, we had our new white-labelling method.
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