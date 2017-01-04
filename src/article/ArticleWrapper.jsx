import React from 'react';
import articleData from '../data/articleData';

import ArticleContent from './ArticleContent';

class ArticleWrapper extends React.Component {
    render() {
        
    var location = this.props.location;
    var articleUrl = location.pathname;

    var articleItem = [];
    articleData.forEach(function(article){
        if (article.url === articleUrl) {
            articleItem.push(<ArticleContent article={article} content={article.content} key={article.url} />);
        }
    });

    return (
        <div>
            {articleItem}
        </div>
    );
    }
}

export default ArticleWrapper;