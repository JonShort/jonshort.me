// Images
import * as image from '../images/articleThumbs';

const articleRoot = '/article';

const articleMetaData = [
    {
        imageSrc: image.ReactLogo,
        imageAlt: 'The React logo',
        url: `${articleRoot}/using-styled-components`,
        title: '4 Months of Styled Components',
        shortTitle: 'A Style Journey',
        subtitle: 'Thoughts on Styled Components 4 months after adoption',
        date: '23 June, 2017',
        description: 
            `In a world where css-in-js is becoming more common, how well does
            Styled Components stand up to a real-world use-case?`,
    },
    {
        imageSrc: image.ReactLogo,
        imageAlt: 'The React logo',
        url: `${articleRoot}/using-react-tachyons`,
        title: 'Building a portfolio with React and Tachyons',
        shortTitle: 'A React Portfolio',
        subtitle: 'Building a portfolio with React and Tachyons',
        date: '3 January, 2017',
        description: 
            `There are loads of quick ways to get a static site up and running quickly,
            is it worth using React and Tachyons?`,
    }
];

export default articleMetaData;