import profilePic from "../assets/images/profile-pic.png" 
import linkedIn from "../assets/icons/linkedin.png" 
import gitHub from "../assets/icons/github.png" 
export default function Hero() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return(
        <section name="profile" className="profile">
            <div className="section_pic-container">
                <img src={profilePic} alt="Kaustav Gurey profile picture"/>
            </div>
            <div className="section_text">
                <p className="section_text_p1">Hello, I&apos;m</p>
                <h1 className="title">Kaustav Gurey</h1>
                <p className="section_text_p2">Frontend Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2" 
                        role="link"
                        onClick={() => openInNewTab("https://drive.google.com/file/d/1nH-zMNQaxhxz4fXXHkMQvErmJIs-b3Dr/view?usp=sharing")}>
                            Resume
                    </button>
                    <button className="btn btn-color-1" /*onClick="location.href='./#contact'"*/>
                        Contact Info
                    </button>
                </div>
                <div className="socials-container">
                    <img 
                        className="icon"
                        src={linkedIn} 
                        alt="My linkedin profile"
                        onClick={() => openInNewTab("https://www.linkedin.com/in/kaustav-gurey-1733361b5/")}
                    />
                    <img 
                        className="icon"
                        src={gitHub} 
                        alt="My github profile"
                        onClick={() => openInNewTab("https://github.com/kaustav-gurey")}
                    />
                </div>
            </div>
        </section>
    )
}