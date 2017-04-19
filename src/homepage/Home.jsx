import React from 'react';

import Header from '../header/Header';
import articleMetaData from '../data/articleMetaData';
import ArticleList from './ArticleList';
import Footer from '../footer/Footer';

const Home = () => {
    return(
        <div>
            <Header />
            <ArticleList articles={articleMetaData} />
            <Footer />
        </div>
    );
};

export default Home;