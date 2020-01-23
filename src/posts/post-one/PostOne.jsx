import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';

import articleMetaData from '../../data/articleMetaData';
import { Article } from '../components';

import defaultComponentMapping from '../defaultComponentMapping';

const Content = lazy(() => importMDX('./content.mdx'));
const metadata = articleMetaData.find(article => article.id === '#1');

const PostOne = () => {
  return (
    <Article metadata={metadata}>
      <Suspense fallback={<div></div>}>
        <Content components={defaultComponentMapping}/>
      </Suspense>
    </Article>
  );
};

export default PostOne;
