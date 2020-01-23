import { BLOG_ROOT } from '../constants';

// Images
import { ReactLogo } from '../images/articleThumbs';

const articleMetaData = [
    {
        color: 'hot-pink',
        date: '23 January 2020',
        description: "This article should prove or disprove this new structure",
        id: '#1',
        imageAlt: 'The React logo',
        imageSrc: ReactLogo,
        shortTitle: 'Test article',
        subtitle: 'Thoughts on new structure for articles',
        title: 'A test article',
        url: `${BLOG_ROOT}/test-post-one`,
    }
];

export default articleMetaData;
