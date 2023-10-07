import projectList from "../assets/projectList.js";
import arrowIcon from "../assets/icons/arrow.png"
import {Link} from 'react-scroll';


const projectTiles = projectList.map(item =>{
    return <ProjectTile
                key = {item.id}
                image = {item.image}
                title = {item.title}
                githubLink = {item.githubLink}
                liveLink = {item.liveLink}
            />
}) 
export default function Projects(){
    return(
        <section name="projects" className="projects">
            <p className="section_text_p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="skills-details-container">
                <div className="about-containers">
                    {projectTiles}
                </div>
            </div>
            <Link to='contact' smooth={true} duration={500}>
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

function ProjectTile(item){
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return(
        <div className="details-container color container">
            <div className="article-container">
                <img 
                    src={item.image} 
                    alt="Project image"
                    className="project-img"
                />
            </div>
            <h2 className="skills-sub-title project-title">{item.title}</h2>
            <div className="btn-container">
                <button
                    className="btn btn-color-2 project-btn" 
                    role="link"
                    onClick={() => openInNewTab(item.githubLink)}>
                        GitHub
                </button>
                <button
                    className="btn btn-color-2 project-btn" 
                    role="link"
                    onClick={() => openInNewTab(item.liveLink)}>
                        Live Demo
                </button>
            </div>
        </div>
    )
}