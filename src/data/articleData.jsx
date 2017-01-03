import ArticleImage from '../images/articles/react-logo.png';

var articleData = [
    {
        imageSrc: ArticleImage,
        imageAlt: 'Image of the React logo',
        url: '/why-react-tachyons',
        date: '3 January, 2017',
        title: 'A React Portfolio',
        subtitle: 'Why I decided to make my Portfolio using React and Tachyons',
        paragraphs: [
            `Over the past year I've had a few attempts at creating a decent portfolio
            using different front-end frameworks, but React has been the first that
            has provided enough challenge, with a reasonable learning curve.`,
            `When starting the project I used the reasonably new create-react-app
            method, which made the initial setup extremely smooth. Luckily I didn't 
            have any issues with the way the environment was set up, so coding could
            begin straight away.`,
            `The re-usability of component-based code makes styling in React more relaxing
            than traditional static HTML, no longer do you have to mess around with a 
            monolithic stylesheet, spending ages thinking of classnames that you'll have 
            to remember in sequence. Once the component is written, that's it.`,
            `This is where Tachyons comes into play. The latest evolution of atomic-based 
            CSS, the framework comes in at around 14kb and consists of small classes that 
            handle low-level styling. When using the classes it feels similar to in-line 
            styles (no longer a dirty word thanks to components!).`,
            `I'm still quite far from feeling like this portfolio project is complete,
            and I've made a few decisions that i'll need to see how they pan out during 
            use. Overall it's been a great learning exercise, and I'd reccomend it 
            to anyone looking for a fun project.`,
            `The code for this site is available on my GitHub, feel free to have a look.`
        ]
    },
];

export default articleData;