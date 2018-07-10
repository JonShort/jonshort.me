import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    ArticleContent,
    ArticleWrapper,
    ResolveMarkdown,
} from '../wrappers';
import articleRaw from '../markdown/using-react-tachyons.md';

class UsingReactTachyons extends Component {
    state = {
        markdown: '',
    }

    componentWillMount() {
        this.props.setColor('gold');
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

UsingReactTachyons.propTypes = {
    color: PropTypes.string,
    setColor: PropTypes.func,
};

UsingReactTachyons.defaultProps = {
    color: 'gold',
};

export default ArticleWrapper(ArticleContent(UsingReactTachyons));