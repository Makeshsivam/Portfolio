import React from 'react';
import './About.css'; // not Hero.css


export default function About() {
  return (
    <section className="about-section text-center">
      <div className="container about-card p-4">
        <h1 className="intro-text mb-3">About Me</h1>
        <p className="about-text">
          I am a motivated final-year B.Tech student specializing in AI & Data Science.
          With a strong foundation in coding, excellent communication skills, and a proactive, adaptable mindset,
          I thrive in fast-paced, innovative environments. Passionate about leveraging AI to solve real-world problems,
          I am eager to contribute and grow within a dynamic team.
        </p>
      </div>
    </section>

  );
}
