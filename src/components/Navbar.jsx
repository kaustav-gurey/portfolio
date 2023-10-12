import  { useState } from 'react';
import {Link} from 'react-scroll';

export default function Navbar(){
    const [showMenu,setShowMenu] = useState(false);
    return(
        <div>
            <nav className="desktop-nav">
                <div className='logo'>Kaustav Gurey</div>
                <div>
                    <ul className='nav-links'>
                        <li>
                            <Link to='about' smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='skills' smooth={true} duration={500}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to='projects' smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='contact' smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="hamburger-nav">
                <div className='logo'>Kaustav Gurey</div>
                <div className="hamburger-menu">
                    <div className={showMenu ? "hamburger-icon open" : "hamburger-icon"} onClick={()=> setShowMenu(x => !x)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {showMenu?
                        (<div className="menu-links">
                            <li onClick={()=> setShowMenu(x => !x)}>About</li>
                            <li onClick={()=> setShowMenu(x => !x)}>Skills</li>
                            <li onClick={()=> setShowMenu(x => !x)}>Projects</li>
                            <li onClick={()=> setShowMenu(x => !x)}>Contact</li>
                        </div>):
                        null
                    }
                </div>

            </nav>
        </div>
    )
}