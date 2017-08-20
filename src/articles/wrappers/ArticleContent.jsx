import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleContent = (InitialComponent) => {
    class ArticleContent extends Component {
        render() {
            let calcColor = this.props.color;
            if (this.props.article.color) {
                calcColor = this.props.article.color;
            }

            return (
                <article>
                    <header className={"sans-serif bg-" + calcColor}>
                        <div className="mw9 center pa4 pt5-ns ph7-l">
                            <time className="f6 mb2 dib ttu tracked"><small>{this.props.article.date}</small></time>
                            <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                                <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                                {this.props.article.shortTitle ? this.props.article.shortTitle : this.props.article.title}
                                </span>
                            </h3>
                            <h4 className="f3 fw1 georgia i">{this.props.article.subtitle}</h4>
                            <h5 className="f6 ttu tracked black-80">By {this.props.article.author ? this.props.article.author : 'Jon Short'}</h5>
                        </div>
                    </header>
                    <div className="pa4 pb0 ph7-l georgia mw9-l center">
                        <InitialComponent color={calcColor} setColor={this.props.setColor} />
                        <div className="bb b--black-10 pt2 pb4">
                            <Link to="/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                                <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill: 'currentColor'}}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Return to Home</span>
                            </Link>
                        </div>
                    </div>
                </article>
            );
        }
    };

    ArticleContent.propTypes = {
        article: PropTypes.object,
        color: PropTypes.string
    };

    ArticleContent.defaultProps = {
        color: "gold"
    };

    ArticleContent.displayName = `ArticleContent(${InitialComponent.displayName || InitialComponent.name || 'Component'})`;
    return ArticleContent;
};

export default ArticleContent;