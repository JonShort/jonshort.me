import React, {PropTypes} from 'react';

import ArticleListItem from './ArticleListItem';

const ArticleList = ({articles}) => {

    let articleItem = [];
    articles.forEach(function(article){
        articleItem.push(<ArticleListItem article={article} key={article.url} />);
    });

    return (
        <section className="mw7 center avenir">
            {articleItem}
        </section>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array
};

export default ArticleList;