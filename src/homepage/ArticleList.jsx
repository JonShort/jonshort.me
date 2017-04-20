import React from 'react';
import PropTypes from 'prop-types'

import ArticleListItem from './ArticleListItem';
import ScrollToTop from '../ScrollToTop';

const ArticleList = ({articles}) => {

    let articleItem = [];
    articles.forEach(function(article){
        articleItem.push(<ArticleListItem article={article} key={article.url} />);
    });

    return (
        <section className="mw7 center avenir">
            <ScrollToTop />
            {articleItem}
        </section>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array
};

export default ArticleList;