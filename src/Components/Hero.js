import React from "react";
import profile from "../assets/Radhika.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Home() {
  return (
   <section id="home" className="home">
      <div className="home-left">
        <h1>Hi, I'm Radhika Selvaraj</h1>
        <h2>UI/UX Designer & Developer</h2>
        <p>I design and build modern digital experiences.</p>
         {/* Buttons */}
        <div className="buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="/Radhika Intenship.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            📄 Resume
          </a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="home-right">
        <img src={profile} alt="profile" />
        
      </div>
      
    </section>
  );
}

export default Home;