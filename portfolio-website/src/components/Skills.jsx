import checkmarkIcon from "../assets/checkmark.png" 
import arrowIcon from "../assets/arrow.png" 

const skillList_1 = [
    {id: 1, name: "HTML", level: "Experienced"},
    {id: 2, name: "CSS", level: "Experienced"},
    {id: 3, name: "Javascipt", level: "Intermediate"},
    {id: 4, name: "React", level: "Intermediate"}
]
const skillList_2 = [
    {id: 1, name: "Java", level: "Experienced"},
    {id: 2, name: "DSA", level: "Intermediate"},
    {id: 3, name: "Git", level: "Intermediate"},
    {id: 4, name: "SQL", level: "Basic"}
]
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
        <section className="skills">
            <p className="section_text_p1">Explore My</p>
            <h1 className="title">Skills</h1>
            <div className="skills-details-container">
                <div className="skills-containers">
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
            <img 
                src={arrowIcon} 
                alt="Arrow icon" 
                className="icon arrow"
                // onclick={()=>()}
            />
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
       <h3>{item.name}</h3>
       <p>{item.level}</p>
    </article>
   )
}


