import React from 'react';

class ArticleContent extends React.Component {
    render() {
        return (
            <article>
                <header className="bg-gold sans-serif">
                    <div className="mw9 center pa4 pt5-ns ph7-l">
                    <time className="f6 mb2 dib ttu tracked"><small>{this.props.article.date}</small></time>
                    <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                        <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                        {this.props.article.title}
                        </span>
                    </h3>
                    <h4 className="f3 fw1 georgia i">{this.props.article.subtitle}</h4>
                    <h5 className="f6 ttu tracked black-80">By {this.props.article.author ? this.props.article.author : 'Jon Short'}</h5>
                    </div>
                </header>
                <div className="pa4 ph7-l georgia mw9-l center">
                    {this.props.paragraphs.map((value, key) => (
                        <p className="f5 f3-ns lh-copy measure georgia" key={key}>{value}</p>
                    ))}
                </div>
            </article>
        );
    }
}

export default ArticleContent;