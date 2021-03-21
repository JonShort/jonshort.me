import { BLOG_ROOT } from '../../../constants';

// The article
import Post from './';

// Images
import { Pattern } from '../../../images/articleThumbs';

export const metadata = {
  'manipulating-problems': {
    color: 'yellow',
    content: Post,
    date: '18 March 2021',
    description: `
      Sometimes reframing a problem produces a better solution
    `,
    id: '4',
    imageAlt: 'Tiles in a pattern',
    imageSrc: Pattern,
    shortTitle: 'Manipulating problems',
    subtitle: `
      Sometimes reframing a problem produces a better solution
    `,
    title: 'Manipulating problems',
    url: `${BLOG_ROOT}/manipulating-problems`,
  },
};
