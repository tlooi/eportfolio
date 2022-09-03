import { useState, useRef } from 'react';

import './Header.css';

function Header() {
    const [ mobNavState, setMobNavState ] = useState(false);
    const menuNav = useRef(null);
    
    const navClasses = 'mob-nav-access ' + (mobNavState ? 'opened' : 'closed');
    document.body.style.overflowY = mobNavState ? 'hidden' : 'visible';
    
    return (
        <header>
            <nav className='container'>
                <div ref={menuNav} onClick={() => {setMobNavState(!mobNavState);}} className={navClasses}>
                    <div style={{'position': 'relative', 'display': 'block', 'width': '1px', 'height': '1px'}}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul onClick={() => {setMobNavState(false);}} className='nav-items'>
                    <li className='nav-item'><a href="#">About Me</a></li>
                    <li className='nav-item'><a href="#">Projects</a></li>
                    <li className='nav-item'><a href="#">Technologies</a></li>
                    <li className='nav-item'><a href="#">Contact Me</a></li>
                </ul>
                <svg className='animated-logo' width="69" height="35" viewBox="0 0 69 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11.6412L43.9588 1C36.9961 2.57647 22.8341 6.91176 21.8882 11.6412C20.7059 17.5529 -4.12353 51.0529 30.9529 22.6765C59.0141 -0.0247053 37.6529 15.0569 30.9529 19.1294C19.1294 26.3163 29.7706 32.1353 35.6824 27.4059C36.9961 27.0118 40.3329 25.9082 47.9 15.1882C55.4671 4.46824 57.4902 13.0863 55.7824 19.1294C60.249 12.9549 68.6306 6.36 63.2706 15.1882C56.5706 26.2235 61.6941 32.1353 68 27.4059" stroke="black" strokeWidth="2"/>
                    <path d="M49.0824 4.75545C49.0824 3.57311 50.4144 2.74512 50.6588 3.96722C51.0529 5.93781 49.0823 5.93779 49.0824 4.75545Z" stroke="black"/>
                </svg>
            </nav>
        </header>
    );
}

export default Header;