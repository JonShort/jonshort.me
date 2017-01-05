import React from 'react';

import Header from '../header/Header';
import articleMetaData from '../data/articleMetaData';
import ArticleList from './ArticleList';

const Home = () => {
    return(
        <div>
            <Header />
            <ArticleList articles={articleMetaData} />
        </div>
    );
};

export default Home;