import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { A } from '../ui';

const resolveMarkdownOptions = (color) => ({
    overrides: {
        a: {
            component: A,
            props: {
                className: `hover-${color} color-inherit`
            },
        },
        p: {
            props: {
                className: 'f5 f3-ns lh-copy measure georgia',
            },
        },
        blockquote: {
            props: {
                className: `f5 pa1 b tc bb bt bw1 f3-ns mh0 lh-copy measure georgia b--${color}`,
            },
        },
    },
});

const ResolveMarkdown = ({ className, color, children }) => {
    const resolvedOptions = resolveMarkdownOptions(color);

    return (
        <Markdown className={className} options={resolvedOptions}>
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