import profilePic from "../assets/profile-pic.png" 
import linkedIn from "../assets/linkedin.png" 
import gitHub from "../assets/github.png" 
export default function Hero() {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return(
        <section className="profile">
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
                        onClick={() => openInNewTab("https://drive.google.com/file/d/1ZeaaO2xu8yY7_Kk1pUIemkKyxadtVQhW/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3Dae5570c3a3f11f48:TM%3D1695956050:C%3Dr:IP%3D2405:201:8001:6122:533c:885f:5180:e49c-:S%3DYrBV6pNxE-F4CVqajMrdDVc%3B+path%3D/%3B+domain%3Dgoogle.com%3B+expires%3DFri,+29-Sep-2023+05:54:10+GMT")}>
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