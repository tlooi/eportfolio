import './TechnologyCard.css';

function TechnologyCard({ name } : { name: string }) {
    return (
        <div className='technology-card'>
            <img src={`/tech_logos/${name}_logo.png`} alt={`${name} logo`} />
            <div className='technology-name'>
                { name }
            </div>
        </div>
    );
}

export default TechnologyCard;