import { BLOG_ROOT } from '../../../constants';

// The article
import Post from './';

// Images
import { CodeBlock } from '../../../images/articleThumbs';

export const metadata = {
  'smart-code-performance': {
    color: 'red',
    content: Post,
    date: '18 May 2020',
    description: `
        Sometimes performance can suffer
    `,
    id: '2',
    imageAlt: 'Generic code block',
    imageSrc: CodeBlock,
    shortTitle: "'Smart' code and performance",
    subtitle: `
      Smart, clean code is better right?
    `,
    title: 'Smart, clean code is better right?',
    url: `${BLOG_ROOT}/smart-code-performance`,
  },
};
