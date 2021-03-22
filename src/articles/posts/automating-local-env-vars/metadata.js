import { BLOG_ROOT } from '../../../constants';

// The article
import Post from './';

// Images
import { Pattern } from '../../../images/articleThumbs';

export const metadata = {
  'automating-local-env-vars': {
    color: 'yellow',
    content: Post,
    date: '22 March 2021',
    description: `
      Can we improve the experience of using environment variables locally?
    `,
    id: '4',
    imageAlt: 'Tiles in a pattern',
    imageSrc: Pattern,
    shortTitle: 'Automating local environment variables',
    subtitle: `
      Changing env vars manually can be repetitive
    `,
    title: 'Automating local environment variables',
    url: `${BLOG_ROOT}/automating-local-env-vars`,
  },
};
