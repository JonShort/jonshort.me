import React from 'react';

import ArticleListItem from './articleListItem';

import ArticleImage from '../images/articles/react-logo.png';

const ArticleList = () => {
    
    return (
        <section className="mw7 center avenir">
            <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
            <ArticleListItem
            src={ArticleImage}
            alt="Image of the React Logo"
            title="Creating a quick portfolio using React and Tachyons"
            description="React makes building a static portfolio quick, easy, and more exciting than using static HTML.">
            </ArticleListItem>
        </section>
    )
}

export default ArticleList;