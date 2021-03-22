import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
    <>
      <ScrollToTop />
      <Helmet>
        <title key="title">JonShort.me - {metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
          key="description"
        />
        <meta
          content={`Jonshort.me - ${metadata.title}`}
          key="og:title"
          property="og:title"
        />
        <meta
          property="og:description"
          content={metadata.description}
          key="og:description"
        />
        <meta
          content={`https://jonshort.me${metadata.url}`}
          key="og:url"
          property="og:url"
        />
        <meta property="og:image" content={metadata.imageSrc} key="og:image" />
        <meta
          property="og:image:secure_url"
          content={metadata.imageSrc}
          key="og:image:secure_url"
        />
      </Helmet>
      <article>
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
    </>
  );
};

export default Articles;
