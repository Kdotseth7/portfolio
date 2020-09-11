import cvent from './cvent.jpg';
import teamComputers from './teamComputers.png';
import threeSC from './3sc.png';

const cardsDataArray = [
    {
        cardImage: cvent,
        imgLink: 'https://www.cvent.com/',
        cardText: 'Currently Working on CVENT Conference Product.' +
            'FrontEnd Development: HTML, CSS, JavaScript and React.' +
            'BackEnd Development: NodeJS and ExpressJS.' +
            'UI Automation Frameworks: Selenium and WDIO.' +
            'API Automation: ReadyAPI, Postman and Karate.' +
            'CI/CD using Jenkins.' +
            'Databases: SQL, MongoDB, PostgreSQL.' +
            'Well versed with Agile and Scrum Methodologies',
        tenure: ' July 2019 - Present',
        position: ' Software Development Engineer in Test(SDET)'
    },
    {
        cardImage: threeSC,
        imgLink: 'http://www.3scsolution.com/',
        cardText: 'Worked on adding a Dashboard feature to their existing application.' +
            'Developed backend using NodeJS and ExpressJS for verification and auditing of freight bills for Vendor and Retailers.' +
            'Created front-end dashboard using HTML, CSS, JS and React.' +
            'Created Master tabs and Report tabs for easy maneuverability within the transport management dashboard',
        tenure: ' June 2018 - July 2018',
        position: ' Software Development Intern'
    },
    {
        cardImage: teamComputers,
        imgLink: 'https://www.teamcomputers.com/',
        cardText: 'Designed the data model using ALTERYX Designer.' +
            'Cleaned, filtered and merged the sample dataset for the past one year.' +
            'Calculated the Turn Around Time (TAT) for each contracted inquiry from the dataset of past one year.' +
            'Calculated the Total Predicted Inquiries.' +
            'Generated a cumulative dataset for predicting the number of vehicles a Honda dealer will sell based on outstanding inquiries',
        tenure: ' June 2017 - July 2017',
        position: ' Data Analyst Intern'
    }
];

export {cardsDataArray};