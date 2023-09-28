// import React from 'react';

export default function Navbar(){
    function toggleMenu() {
        
    }
    return(
        <div>
            <nav className="desktop-nav">
                <div className='logo'>Kaustav Gurey</div>
                <div>
                    <ul className='nav-links'>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
            <nav className="hamburger-nav">
                <div className='logo'>Kaustav Gurey</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li onClick={toggleMenu}>About</li>
                        <li onClick={toggleMenu}>Skills</li>
                        <li onClick={toggleMenu}>Projects</li>
                        <li onClick={toggleMenu}>Contact</li>
                    </div>
                </div>

            </nav>
        </div>
    )
}