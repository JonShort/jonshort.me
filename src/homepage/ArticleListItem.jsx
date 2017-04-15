import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom';

const ArticleListItem = ({article}) => (
    <article className="bt bb b--black-10">
        <Link className="db pv4 ph3 ph0-l no-underline black dim" to={article.url}>
            <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
                    <img src={article.imageSrc} className="db" alt={article.imageAlt ? article.imageAlt : 'Article image'} />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                    <h1 className="f3 fw1 baskerville mt0 lh-title">{article.title}</h1>
                    <p className="f6 f5-l lh-copy">
                        {article.description}
                    </p>
                    <p className="f6 lh-copy mv0">By {article.author ? article.author : 'Jon Short'}</p>
                </div>
            </div>
        </Link>
    </article>
);

ArticleListItem.propTypes = {
    article: PropTypes.object
};

export default ArticleListItem;