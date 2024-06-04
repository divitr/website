import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './Research.css';

import ROCHeader from './imgs/roc_src_src.png';
import ZMasses from './imgs/Z_masses.png';

const projects = [
  {
    title: 'Heavy Particle Reconstruction',
    description: 'Algorithmic particle reconstruction for many jet collisions.',
    link: '/research/particle_reconstruction',
    githubLink: 'https://github.com/divitr/top_recon_chisq',
    demoContent: <img src={ZMasses} alt="Z Boson Masses" /> // Demo content
  },
  {
    title: 'High Momentum Collision Analysis',
    description: 'Deep learning to improve signal-background classification for high momentum collisions.',
    link: '/research/soft_extrapolation',
    githubLink: 'https://github.com/divitr/soft_extrap_toy',
    demoContent: <img src={ROCHeader} alt="ROC src src" /> // Demo content
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Research</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            demoContent={project.demoContent}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
