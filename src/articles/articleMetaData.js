import { BLOG_ROOT } from '../constants';

// Images
import { ReactLogo, StyledComponents } from '../images/articleThumbs';

// Post components
import Test from './posts/test-post';
import Second from './posts/second-post';

const articleMetaData = {
    'second-post': {
        color: 'gold',
        content: Second,
        date: '24 January 2020',
        description: "This is the second article",
        id: '2',
        imageAlt: 'The Styled Components logo',
        imageSrc: StyledComponents,
        shortTitle: 'Second article',
        subtitle: 'Thoughts on new structure for articles',
        title: 'The second article',
        url: `${BLOG_ROOT}/second-post`,
    },
    'test-post': {
        color: 'hot-pink',
        content: Test,
        date: '23 January 2020',
        description: "This article should prove or disprove this new structure",
        id: '1',
        imageAlt: 'The React logo',
        imageSrc: ReactLogo,
        shortTitle: 'Test article',
        subtitle: 'Thoughts on new structure for articles',
        title: 'A test article',
        url: `${BLOG_ROOT}/test-post`,
    }
};

export const allArticlesMetaData = Object.keys(articleMetaData).map(key => articleMetaData[key]);

export default articleMetaData;
