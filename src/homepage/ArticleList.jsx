import React, { useMemo } from 'react';
import PropTypes from 'prop-types'

import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles }) => {
    const articleItems = useMemo(() => articles.map(article => (
        <ArticleListItem article={article} key={article.url} />
    )), [articles])

    return (
        <section className="mw7 center avenir">
            {articleItems}
        </section>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array
};

export default ArticleList;
