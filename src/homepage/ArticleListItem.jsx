import React from 'react';
import { Link } from 'react-router';

class ArticleListItem extends React.Component {
    render () {
        return (
            <article className="bt bb b--black-10">
                <Link className="db pv4 ph3 ph0-l no-underline black dim" to={this.props.article.url}>
                    <div className="flex flex-column flex-row-ns">
                        <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
                            <img src={this.props.article.imageSrc} className="db" alt={this.props.article.imageAlt ? this.props.article.imageAlt : 'Article image'} />
                        </div>
                        <div className="w-100 w-60-ns pl3-ns">
                            <h1 className="f3 fw1 baskerville mt0 lh-title">{this.props.article.title}</h1>
                            <p className="f6 f5-l lh-copy">
                                {this.props.article.description}
                            </p>
                            <p className="f6 lh-copy mv0">By {this.props.article.author ? this.props.article.author : 'Jon Short'}</p>
                        </div>
                    </div>
                </Link>
            </article>
        );
    };
};

export default ArticleListItem;