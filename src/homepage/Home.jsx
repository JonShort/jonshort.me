import React from 'react';

import Header from '../Header';
import { allArticlesMetaData } from '../articles/articleMetaData';
import ArticleList from './ArticleList';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

const Home = () => {
    return(
        <div>
            <ScrollToTop />
            <Header />
            <ArticleList articles={allArticlesMetaData} />
            <Footer />
        </div>
    );
};

export default Home;
