import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { A } from '../ui';

const resolveMarkdownOptions = (color) => ({
    overrides: {
        a: {
            component: A,
            className: `hover-${color} color-inherit`
        },
        p: {
            className: 'f5 f3-ns mt0 lh-copy measure georgia',
        },
        blockquote: {
            className: `f5 pa1 b tc bb bt bw1 f3-ns mh0 lh-copy measure georgia b--${color}`,
        },
    },
});

const ResolveMarkdown = ({ color, children }) => {
    const resolvedOptions = resolveMarkdownOptions(color);

    console.log(resolvedOptions);

    return (
        <Markdown options={resolvedOptions}>
            {children}
        </Markdown>
    );
};

ResolveMarkdown.propTypes = {
    color: PropTypes.string,
    children: PropTypes.string,
};

ResolveMarkdown.defaultProps = {
    color: 'gold',
};

export default ResolveMarkdown;