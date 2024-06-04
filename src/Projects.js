import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './Projects.css';
import reseImage from './imgs/rese.png';
import wsImage from './imgs/watersort.png';
import osImage from './imgs/opensearch.png';
import pdrpImage from './imgs/berk_logo.png';

const projects = [
  {
    title: 'Amazon Opensearch',
    description: 'An open-source project for analyzing and visualizing data in real time.',
    link: '/projects/opensearch',
    githubLink: 'https://github.com/opensearch-project/ml-commons',
    demoContent: <img src={osImage} alt="osImage" /> // Demo content
  },
  {
    title: 'Physics Directed Reading Program',
    description: 'A Markov Chain Monte Carlo simulation of an Ising model with SVR-driven parameter estimation.',
    link: '/projects/pdrp',
    githubLink: 'https://github.com/divitr/ising_mcmc',
    demoContent: <img src={pdrpImage} alt="pdrpImage" /> // Demo content
  },
  {
    title: 'Research-Engine',
    description: 'A website that provides topic summaries and related research papers.',
    link: '/projects/research-engine',
    githubLink: 'https://github.com/divitr/research-engine',
    demoContent: <img src={reseImage} alt="reseImage" /> // Demo content
  },
  {
    title: 'Watersort Solver',
    description: 'An app that can solve any valid watersort brainteaser.',
    link: '/projects/watersort-solver',
    githubLink: 'https://github.com/divitr/watersort_solver_app',
    demoContent: <img src={wsImage} alt="wsImage" /> // Demo content
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
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
