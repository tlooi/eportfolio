import SectionHeader from '../SectionHeader';

import './Projects.css';

const projects = [
    {
        name: 'Personal Portfolio',
        status: 'Released',
        whyDescription: `This was develop both my design and frontend skills. I designed reusable components in ReactJS using Typescript for type safety and learned to use Figma in order to aid the design of this website.`,
        technologies: ['React', 'Typescript', 'Figma', 'Git / Github VCS']
    },
    {
        name: 'Food Deals',
        status: 'Work in progress',
        whyDescription: `This is being developed to tackle the high food prices found across NZ. In order to help New Zealander's reduce their grocery costs, this site will be able to compare the cart between the three major food stores in New Zealand and provide the best location and supermarket to go to for the cheapest deals.`,
        technologies: ['React', 'Git / Github VCS', 'Express', 'Playwright']
    },
    {
        name: 'Musical Trainer',
        status: 'Work in progress',
        whyDescription: `As a beginner musical student, it is hard to get immediate feedback that is required to make musical sight reading second-nature. In order to overcome this problem, this shows a note and requires the student to accurately press the corresponding note on either their digital keyboard or on a keyboard whose note is recognized by their device's microphone.`,
        technologies: ['Typescript']
    }
];

function Projects() {
    return (
        <section className='container'>
            <SectionHeader content='Projects' id='projects' />
            <div className='projects-holder'>
                <div className='project'>
                    <h2>Personal Portfolio</h2>
                    <p>Released</p>
                    <br />
                    <p>This was develop both my design and frontend skills. I designed reusable components in ReactJS using Typescript for type safety and learned to use Figma in order to aid the design of this website.</p>
                </div>
                <div className='project'>
                    <h2>Food Deals</h2>
                    <p>Work in progress</p>
                    <br />
                    <p>This is being developed to tackle the high food prices found across NZ. In order to help New Zealander's reduce their grocery costs, this site will be able to compare the cart between the three major food stores in New Zealand and provide the best location and supermarket to go to for the cheapest deals.</p>
                </div>
                <div className='project'>
                    <h2>Musical Trainer</h2>
                    <p>Work in progress</p>
                    <br />
                    <p>As a beginner musical student, it is hard to get immediate feedback that is required to make musical sight reading second-nature. In order to overcome this problem, this shows a note and requires the student to accurately press the corresponding note on either their digital keyboard or on a keyboard whose note is recognized by their device's microphone.</p>
                </div>
                <div className='project'>
                    <h2>Project X</h2>
                </div>
            </div>
        </section>
    );
}

export default Projects;