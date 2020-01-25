import { BLOG_ROOT } from '../../../constants';

// The article
import Post from './';

// Images
import { ReactLogo } from '../../../images/articleThumbs';

export const metadata = {
  'refactoring-this-site': {
    color: 'hot-pink',
    content: Post,
    date: '25 January 2020',
    description: `
        I created this site in 2017, as a learning exercise for React.
        Would I approach it differently in 2020?
    `,
    id: '1',
    imageAlt: 'The React logo',
    imageSrc: ReactLogo,
    shortTitle: 'Refactoring this site',
    subtitle: `
        Looking back at a repo started three years ago
    `,
    title: 'Refactoring this site 3 years on',
    url: `${BLOG_ROOT}/refactoring-this-site`,
  }
};
