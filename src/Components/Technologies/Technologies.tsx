import SectionHeader from '../SectionHeader';

import './Technologies.css';

function Technologies() {
    return (
        <section className='container' id='technologies'>
            <SectionHeader content='Technologies' id='technologies-text' />
            <p>I've had experience working with some of the following:</p>
            <div className='technologies-holder'>
                <div className='technology'>Javascript</div>
                <div className='technology'>Typescript</div>
                <div className='technology'>Git / Github VCS</div>
                <div className='technology'>HTML + CSS</div>
                <div className='technology'>React</div>
                <div className='technology'>Express</div>
                <div className='technology'>Java</div>
                <div className='technology'>MatLAB</div>
                <div className='technology'>C</div>
            </div>
        </section>
    );
}

export default Technologies;