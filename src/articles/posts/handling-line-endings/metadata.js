import { BLOG_ROOT } from '../../../constants';

// The article
import Post from './';

// Images
import { ScreamEmojiBanner } from '../../../images/articleThumbs';

export const metadata = {
  'handling-line-endings': {
    color: 'washed-red',
    content: Post,
    date: '20 August 2020',
    description: `
      Dealing with line endings is something that most developers
      will have to do at some point, and can be tricky
    `,
    id: '3',
    imageAlt: 'A scream emoji',
    imageSrc: ScreamEmojiBanner,
    shortTitle: 'Handling line endings',
    subtitle: `
      Let's be honest, line endings are annoying
    `,
    title: 'Handling line endings',
    url: `${BLOG_ROOT}/handling-line-endings`,
  },
};
