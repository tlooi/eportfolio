import SectionHeader from '../SectionHeader';
import TechnologyCard from '../TechnologyCard';

import './Technologies.css';

const technologies = [
    'html',
    'css',
    'javascript',
    'typescript',
    'react',
    'nodejs',
    'git',
    'java',
    'c'
];

function Technologies() {
    return (
        <section className='container' id='technologies'>
            <SectionHeader content='Technologies' id='technologies-text' />
            <p>I've had experience working with some of the following:</p>
            <div className='technologies-holder'>
                {technologies.map((val, index) => {
                    return <TechnologyCard key={index} name={val} />
                })}
            </div>
        </section>
    );
}

export default Technologies;