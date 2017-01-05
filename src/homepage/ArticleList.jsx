import React from 'react';

import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {
    
    var articleItem = [];
    articles.forEach(function(article){
        articleItem.push(<ArticleListItem article={article} key={article.url} />);
    });

    return (
        <section className="mw7 center avenir">
            {articleItem}
        </section>
    );
};

export default ArticleList;