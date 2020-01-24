import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';

import defaultComponentMapping from '../../defaultComponentMapping';

const Content = lazy(() => importMDX('./content.mdx'));

const Post = () => (
  <Suspense fallback={<div></div>}>
    <Content components={defaultComponentMapping} layoutProps={{color: 'red'}} />
  </Suspense>
);

export default Post;
