import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

// Components
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer';
import Hero from './components/Hero';
import HomeLink from './components/HomeLink';

// Article data
import articleMetaData from './articleMetaData';

const Articles = () => {
  const { slug } = useParams();

  const metadata = articleMetaData[slug];

  if (!metadata) {
    return <Redirect to="/404" />;
  }

  return (
    <article>
      <ScrollToTop />
      <Hero
        author={metadata.author}
        color={metadata.color}
        date={metadata.date}
        shortTitle={metadata.shortTitle}
        subtitle={metadata.subtitle}
        title={metadata.title}
      />
      <section className="pa4 pb0 ph7-l georgia mw9-l center">
        <metadata.content />
        <HomeLink />
      </section>
      <Footer />
    </article>
  );
};

export default Articles;
