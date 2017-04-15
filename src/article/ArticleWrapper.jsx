import React from 'react';
import articleData from '../data/articleData';

import ArticleContent from './ArticleContent';
import Error404 from '../error/Error404';
import Footer from '../footer/Footer';

import ScrollToTop from '../ScrollToTop';

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
            <ScrollToTop />
            {articleItem.length === 0 ? <Error404 /> : articleItem}
            <Footer />
        </div>
    );
};

export default ArticleWrapper;