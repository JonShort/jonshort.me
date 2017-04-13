import * as image from '../images/articleThumbs';

const articleRoot = '/article';

const articleMetaData = [
    {
    imageSrc: image.LowRezDesign,
    imageAlt: 'Low fidelity design',
    url: `${articleRoot}/low-fi-vs-hi-fi`,
    title: 'Low-fi vs. High-fi',
    description: 
        `With component-based design and development becoming more prevalent,
        and less industry focus on 'flashy' software, do we still need high-fi designs?`
    },
    {
    imageSrc: image.ReactLogo,
    imageAlt: 'The React logo',
    url: `${articleRoot}/using-react-tachyons`,
    title: 'Building a portfolio with React and Tachyons',
    description: 
        `There are loads of quick ways to get a static site up and running quickly,
        is it worth using React and Tachyons?`
    }
];

export default articleMetaData;