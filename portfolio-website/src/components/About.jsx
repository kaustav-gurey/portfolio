import aboutPhoto from "../assets/about.png" 
import educationIcon from "../assets/education.png" 
import experienceIcon from "../assets/experience.png" 
import arrowIcon from "../assets/arrow.png" 

export default function About() {
    return(
        <section className="about">
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
                            <h3>Experinece</h3>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatibus neque quis voluptatem eligendi quos libero ipsum pariatur 
                            enim dicta aspernatur quibusdam excepturi rerum, quas adipisci 
                            reprehenderit natus omnis. Repellat accusamus alias libero. Adipisci 
                            nisi officia nobis deleniti labore, repudiandae, obcaecati nulla quidem 
                            voluptates non possimus, suscipit quo laudantium accusamus assumenda.
                        </p>
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