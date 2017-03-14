import React from 'react';
import articleData from '../data/articleData';

import ArticleContent from './ArticleContent';
import Error404 from '../error/Error404';

const ArticleWrapper = () => {
    const articleUrl = location.pathname;

    let articleItem = [];
    articleData.forEach(function(article){
        if (article.url === articleUrl) {
            articleItem.push(<ArticleContent article={article} key={article.url} />);
        }
    });

    return (
        <div>
            {articleItem.length === 0 ? <Error404 /> : articleItem}
        </div>
    );
};

export default ArticleWrapper;