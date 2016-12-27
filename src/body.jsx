import React from 'react';

import ARTICLES from './data/ARTICLES';
import ArticleList from './homepage/ArticleList';

const Body = () => {
    
    return(
        <ArticleList articles={ARTICLES} />
    );
}

export default Body;