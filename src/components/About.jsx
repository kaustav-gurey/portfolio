import aboutPhoto from "../assets/images/about.png" 
import educationIcon from "../assets/icons/education.png" 
import experienceIcon from "../assets/icons/experience.png" 
import arrowIcon from "../assets/icons/arrow.png" 
import {Link} from 'react-scroll';

export default function About() {
    return(
        <section name="about" className="about">
            <p className="section_text_p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section_pic-container">
                    <img 
                    src={aboutPhoto} 
                    alt="Profile picture" 
                    className="about-pic"/>
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img 
                                src={experienceIcon} 
                                alt="Experience icon" 
                                className="icon"/>
                            <h3>Experience</h3>
                            <p>0 years <br/> Frontend Development</p>
                        </div>
                        <div className="details-container">
                            <img 
                                src={educationIcon} 
                                alt="Education icon" 
                                className="icon"/>
                            <h3>Education</h3>
                            <p>B.Tech. Bachelors Degree<br/> Computer Science Engineering</p>
                        </div>
                    </div>
                    <div className="text-conatiner">
                        <p>Hey there! I&apos;m Kaustav, a budding software developer from Kolkata, India. I 
                            am an aspiring web developer and I&apos;m determined to enhance my skills even 
                            further and gain practical experience. If you know about any internships or jobs 
                            that could help me, please let me know.
                        </p>
                        <p>
                            Explore my world of coding and creativity! On this website, you&apos;ll 
                            find a showcase of my projects and skills, crafted with passion and dedication
                            . Dive in, and witness the culmination of my journey as an aspiring web developer
                            . Enjoy the experience, and feel free to explore all the exciting projects and 
                            skills I have to offer. Happy coding!
                        </p>
                    </div>
                </div>
            </div>
            <Link to='skills' smooth={true} duration={500}>
                <img 
                    src={arrowIcon} 
                    alt="Arrow icon" 
                    className="icon arrow"
                    // onclick={()=>()}
                />                    
            </Link>
            
        </section>
    )
}