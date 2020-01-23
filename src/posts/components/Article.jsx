import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_COLOR } from '../../constants';
import ScrollToTop from '../../ScrollToTop';
import Footer from '../../footer/Footer';
import Hero from './Hero';
import HomeLink from './HomeLink';

const Article = props => (
  <article>
    <ScrollToTop />
    <Hero {...props.metadata} />
    <section className="pa4 pb0 ph7-l georgia mw9-l center">
      {props.children}
      <HomeLink />
    </section>
    <Footer />
  </article>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
  metadata: PropTypes.shape({
    author: PropTypes.string,
    color: PropTypes.string,
    date: PropTypes.string,
    shortTitle: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
};

Article.defaultProps = {
  metadata: {
    author: 'Jon Short',
    color: DEFAULT_COLOR,
    date: null,
    shortTitle: null,
    subtitle: null,
    title: null,
  },
};

export default Article;
