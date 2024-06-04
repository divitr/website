import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';
import { FaGithub } from 'react-icons/fa';

const ProjectPage = ({ title, description, githubLink, demoContent }) => {
  return (
    <div className="project-page-container">
      <h2 className="projects-heading">{title}</h2>
        <div className="project-details">
        <div className="project-description">
          <p>{description}</p>
          <div className="button-container">
        <Link to="/projects" className="project-button">
          <span>← Back to Projects</span>
        </Link>
        {githubLink && (
              <button className="project-button github-button" onClick={() => window.open(githubLink, "_blank")}>
                <span><FaGithub /> GitHub</span>
              </button>
            )}
          </div>
        </div>
        <div className="project-media">
          {demoContent}
        </div>
      </div>
      </div>
  );
};

export default ProjectPage;
