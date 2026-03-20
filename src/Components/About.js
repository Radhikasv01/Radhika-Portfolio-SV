import React from "react";

function About() {
  return (
   <section id="about" className="about">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I am a passionate UI/UX designer and developer who enjoys creating
          modern, user-friendly websites and applications.
        </p>
      </div>

      <div className="skills-card">
        <h3>Skills</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>ReactJS</li>
          <li>HTML / CSS</li>
          <li>ASP.NET Core</li>
          <li>API Development</li>
        </ul>
      </div>
    </section>
  );
}

export default About;