import React from 'react';

const ArticleListItem = ({title, description, src, alt}) => {

    return (
        <article className="bt bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={src} className="db" alt={alt ? alt : 'Article image'} />
                </div>
                <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f3 fw1 baskerville mt0 lh-title">{title}</h1>
                <p className="f6 f5-l lh-copy">
                    {description}
                </p>
                <p className="f6 lh-copy mv0">By Jon Short</p>
                </div>
            </div>
            </a>
        </article>
    )
}

export default ArticleListItem;