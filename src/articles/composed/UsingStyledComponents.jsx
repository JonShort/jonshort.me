import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    ArticleContent,
    ArticleWrapper,
    ResolveMarkdown,
} from '../wrappers';
import articleRaw from '../markdown/using-styled-components.md';

class UsingStyledComponents extends Component {
    state = {
        markdown: '',
    }

    componentWillMount() {
        this.props.setColor('hot-pink');
    }

    componentDidMount() {
        fetch(articleRaw)
            .then(response => response.text())
            .then(text => {
                this.setState({ markdown: text });
            })
    }

    render() {
        return (
            <ResolveMarkdown className="t-body" color={this.props.color}>
                {this.state.markdown}
            </ResolveMarkdown>
        );
    }
};

UsingStyledComponents.propTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func,
};

UsingStyledComponents.defaultProps = {
    color: 'gold',
};

export default ArticleWrapper(ArticleContent(UsingStyledComponents));