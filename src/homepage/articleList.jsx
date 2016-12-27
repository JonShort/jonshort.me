import React from 'react';

import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {

    var articleItem = [];
    articles.forEach(function(article){
        articleItem.push(<ArticleListItem article={article} key={article.title} />);
    });

    return (
        <section className="mw7 center avenir">
            <h2 className="baskerville fw1 ph3 ph0-l">Blog</h2>
            {articleItem}
        </section>
    );
}

export default ArticleList;