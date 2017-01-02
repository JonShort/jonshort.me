import React from 'react';
import articleData from '../data/articleData';

import HeaderLite from '../header/HeaderLite';
import ArticleContent from './ArticleContent';

class ArticleWrapper extends React.Component {
    render() {
        
    var location = this.props.location;
    var articleUrl = location.pathname;

    var articleItem = [];
    articleData.forEach(function(article){
        if (article.url === articleUrl) {
            articleItem.push(<ArticleContent article={article} key={article.url} />);
        }
    });

    return (
        <div>
            <HeaderLite />
            {articleItem}
        </div>
    );
    }
}

export default ArticleWrapper;