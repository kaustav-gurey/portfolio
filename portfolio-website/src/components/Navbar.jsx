import  { useState } from 'react';

export default function Navbar(){
    const [showMenu,setShowMenu] = useState(false);
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