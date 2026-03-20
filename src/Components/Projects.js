import React from "react";
import project1 from "../assets/Task.png";
import project2 from "../assets/Student.png";
import project3 from "../assets/Portfolio.png";


function Projects() {
  return (
   <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        <div className="card">
         <img src={project1} alt="Task App" />
          <h3>Task Management App</h3>
          <p>A task tracking application built using React and ASP.NET Core.</p>
          <button>View Project</button>
        </div>

        <div className="card">
           <img src={project2} alt="Student Portal" />
          <h3>Student Portal</h3>
          <p>A web application for managing student records.</p>
          <button>View Project</button>
        </div>

        <div className="card">
          <img src={project3} alt="Portfolio" />
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built to showcase projects.</p>
          <button>View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;