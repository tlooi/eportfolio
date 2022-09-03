import SectionHeader from '../SectionHeader';
import './Header.css';

function Header() {
    return (
        <header>
            <SectionHeader content='Technologies' id='header' />
            <div className='container'>
                <div className='header-text-wrapper'>
                    <p className='header-welcome-text'>👋Hey I'm Timothy!</p>
                    <p className='header-self-description'>A motivated Software Engineer currently studying at the University of Auckland. I am currently interested in frontend development with hopes to become a fullstack. I also like to play around with the huge ecosystem surrounding software include Neural Networks and Games. Asides from coding, I am an avid piano player, and love challeneges like solving multiple variations of Rubik's cubes, skiing, photography, and playing within the University of Auckland's UNIM8S Futsal Social League.</p>
                </div>
                <a href="#" className='contact-me-button'>Contact Me</a>
            </div>
        </header>
    );
}

export default Header;