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
        <section className='container'  id='projects'>
            <SectionHeader content='Projects' id='projects-text' />
            <div className='projects-holder'>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Trivia</h2>
                        <p>Work in progress</p>
                        <a href="https://github.com/tlooi/trivia" target="_blank">View Source</a>
                    </div>
                    <p>Developed to improve my general knowledge skills. Using Framer Motion, ReactJS and Open Trivia API to grab questions dynamically. This project was more of an excuse for me to learn Framer Motion to animate some of transitions. It was also practice using Typescript in combination with the react's useContext hook + API calls.</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Quick Draw!</h2>
                        <p>Released</p>
                    </div>
                    <p>This was made in a team of three. Using Google's Quick Draw machine learning model, we gamified drawing into a small Java application. Was made over the period of about 3 months. Using a KanBan, we maintained equal workload and to maintain a consistent workflow we applied Github Workflows.</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Personal Portfolio</h2>
                        <p>Released</p>
                        <a href="https://github.com/tlooi/eportfolio" target="_blank">View Source</a>
                    </div>
                    <p>This was made to develop both my design and frontend skills. I designed, built and experimented with many different types reusable components in ReactJS using Typescript for type safety. Learned to use Figma in order to aid the design of this website for both mobile and laptop - try load it on mobile!</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Food Deals</h2>
                        <p>Work in progress</p>
                    </div>
                    <p>This is being developed to tackle the high food prices found across NZ. In order to help New Zealander's reduce their grocery costs, this site will be able to compare the cart between the three major food stores in New Zealand and provide the best location and supermarket to go to for the cheapest deals.</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Musical Trainer</h2>
                        <p>Work in progress</p>
                    </div>
                    <p>As a beginner musical student, it is hard to get immediate feedback that is required to make musical sight reading second-nature. In order to overcome this problem, this shows a note and requires the student to accurately press the corresponding note on either their digital keyboard or on a keyboard whose note is recognized by their device's microphone.</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>KAG Clone</h2>
                        <p>Released (around 2021)</p>
                        <a href="https://github.com/tlooi/KAGClone" target='_blank'>View Source / Release</a>
                    </div>
                    <p>Building off my first platformer, this project was a lot more ambitious. I applied techniques to heavily reduce bandwidth which was mainly done by sending specific bytes and stepping away from socket.io. I was also able to learn a whole lot about WebGL and ways I could improve performance outside of the trivial google-search or stack overflow optimizations.</p>
                </div>
                <div className='project'>
                    <div className='description-head'>
                        <h2>Platformer</h2>
                        <p>Released (around 2019)</p>
                        <a href="https://frozen-dusk-18527.herokuapp.com/" target='_blank'>View Release</a>
                    </div>
                    <p>This was my first experience deploying a site. It tested my abilities to use WebSockets to send real-time updates from other users. It was also my first time using Express which maintains communication between each of the users allowing real-time updates to be sent back and forwards.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;