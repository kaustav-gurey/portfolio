import checkmarkIcon from "../assets/icons/checkmark.png" 
import arrowIcon from "../assets/icons/arrow.png" 
import skillList_1 from "../assets/skillList_1"
import skillList_2 from "../assets/skillList_2"
import {Link} from 'react-scroll';


const listOfSkills_1 = skillList_1.map(item =>{
    return <ShowSkill
            key={item.id}
            name = {item.name}
            level = {item.level}
            />
})
const listOfSkills_2 = skillList_2.map(item =>{
    return <ShowSkill
            key={item.id}
            name = {item.name}
            level = {item.level}
            />
})
export default function Skills(){
    return(
        <section name="skills" className="skills">
            <p className="section_text_p1">Explore My</p>
            <h1 className="title">Skills</h1>
            <div className="skills-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="skills-sub-title">Frontend Development</h2>
                        <div className="article-container">
                            {listOfSkills_1}
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="skills-sub-title">Tools</h2>
                        <div className="article-container">
                            {listOfSkills_2}
                        </div>
                    </div>
                </div>
            </div>
            <Link to='projects' smooth={true} duration={500}>
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

function ShowSkill(item) {
   return(
    <article key={item.id}>
        <img 
            src={checkmarkIcon}
            alt="Skill icon"
            className="icon"
        />
        <div>
            <h3>{item.name}</h3>
            <p>{item.level}</p>
        </div>
    </article>
   )
}


