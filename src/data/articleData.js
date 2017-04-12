const articleRoot = '/article';

const articleData = [
    {
        url: `${articleRoot}/low-fi-vs-hi-fi`,
        date: '5 January, 2017',
        title: 'Low-fi vs. High-fi',
        color: 'light-green',
        subtitle: 'In a component age, do developers still need high-fi designs?',
        content: [
            {type: "standout", value: `This article currently under construction`}
        ]
    },
    {
        url: `${articleRoot}/why-react-tachyons`,
        date: '3 January, 2017',
        title: 'A React Portfolio',
        subtitle: 'Why I decided to make my Portfolio using React and Tachyons',
        content: [
            {type: "p", value: `Over the past year I've had a few attempts at creating a decent portfolio
            using different front-end frameworks, but React has been the first that
            has provided enough challenge, with a reasonable learning curve.`},
            {type: "p", value: `To start the project i used create-react-app, which makes the initial setup
            extremely easy. I didn't have any immediate issues with the way the webpack environment was set
            up, so I could start coding straight away.`},
            {type: "p", value: `The re-usability of component-based code makes styling in React more relaxing
            than traditional static HTML, no longer do you have to mess around with a web of SASS or 
            LESS stylesheets, spending ages thinking of classnames that you'll have to remember 
            in sequence every time you want to repeat the same UI.`},
            {type: "standout", value: `Once the component is written, that's it.`},
            {type: "p", value: `This is where the CSS framework Tachyons comes into play. 
            The latest evolution of atomic-based CSS, the framework comes in at around 14kb and 
            consists of small classes that handle low-level styling. It's got really strong documentation, 
            and a clear purpose:`},
            {type: "quote", value: `Tachyons isn't just a monolithic framework. It's a collection of 
            small modules that can be mixed and matched or used independently. Use what you need. 
            Leave the rest.`},
            {type: "p", value: `I'm still quite far from feeling like this portfolio project is complete,
            and I've made a few decisions that i'll need to see pan out in long-term use. 
            Overall it's been a great learning exercise, and I'd reccomend using React with Tachyons 
            to anyone looking to look at a fresh approach to web design / development.`},
            {type: "p", value:`The code for this site is available on my GitHub, feel free to have a look.`}
        ]
    }
];

export default articleData;