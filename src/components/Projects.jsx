// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';  // data folder is outside components
import './Projects.css';  // CSS inside components folder

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
