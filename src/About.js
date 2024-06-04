import React from 'react';
import './About.css';
import AboutImage from './imgs/about_img.png';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="ab-content">
        <div className="about-image">
          <img src={AboutImage} alt="About me" />
        </div>
        <div className="about-text">
          <p>I'm a sophomore at UC Berkeley, studying Physics, Mathematics, and Electrical Engineering and Computer Science (minor).</p>
          <p>I especially enjoy working at the intersection of machine learning and physics, using statistical mechanics to better understand model architectures and machine learning to model quantiative systems.</p>
          <div className="button-container">
            <a href="https://github.com/divitr/resume_auto_update/blob/main/physics/Divit_Rawal.pdf" target="_blank" className="project-button">
              <span>My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
