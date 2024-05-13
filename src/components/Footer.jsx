import {Link} from 'react-scroll';

export default function Footer(){
    return (
        <footer>
            <nav>
                <div className="nav-links-container">
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
            <p>Copyright &#169; 2024 Kaustav Gurey. All Rights Reserved.</p>
        </footer>
    )
}