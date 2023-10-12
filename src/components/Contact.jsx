import emailIcon from "../assets/icons/email.png"
import linkedinIcon from "../assets/icons/linkedin.png"

export default function Contact(){
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    return(
        <section name="contact" className="contact">
            <p className="section_text_p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src={emailIcon}
                        alt="Email icon"
                        className="icon contact-icon"
                    />
                    <p
                        role="link"
                        onClick={() => window.location = ("mailto:kaustav.gurey0607@gmail.com")}    
                    >
                        kaustav.gurey0607@gmail.com
                    </p>
                </div>
                <div className="contact-info-container">
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p
                        role="link"
                        onClick={() => openInNewTab("https://www.linkedin.com/in/kaustav-gurey-1733361b5/")}    
                    >
                        Linkedin
                    </p>
                </div>
            </div>
        </section>
    )
}