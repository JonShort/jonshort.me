import React, {Component} from 'react';
import articleMetaData from '../../data/articleMetaData';

import Error404 from '../../error/Error404';
import Footer from '../../footer/Footer';

import ScrollToTop from '../../ScrollToTop';

const ArticleWrapper = (InitialComponent) => {
    class ArticleWrapper extends Component {
        constructor(props) {
            super(props);

            this.state = {
                color: 'gold',
            };

            this.setColor = this.setColor.bind(this);
        };

        setColor(col) {
            this.setState({
                color: col,
            });
        }

        render() {
            const colorData = {
                color: this.state.color,
                setColor: this.setColor,
            }

            const articleUrl = window.location.pathname;

            let articleItem = [];
            articleMetaData.forEach(function(article){
                if (article.url === articleUrl) {
                    articleItem.push(<InitialComponent article={article} key={article.url} {...colorData} />);
                }
            });

            return (
                <div>
                    <ScrollToTop />
                    {articleItem.length === 0 ? <Error404 /> : articleItem}
                    <Footer />
                </div>
            );
        }
    }

    ArticleWrapper.displayName = `ArticleWrapper(${InitialComponent.displayName || InitialComponent.name || 'Component'})`;
    return ArticleWrapper;
};

export default ArticleWrapper;