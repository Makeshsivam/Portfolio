import { useState, useEffect } from 'react';

import profileImg from '../assets/images/e2d73f21-c020-4f66-9840-13532a3a18a4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';

const roles = ['AI Developer', 'ML Developer', 'Data Scientist','Software Engineer'];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timeout;

    const currentRole = roles[roleIndex];
    
    if (!isDeleting && text === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        const updatedText = isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1);
        setText(updatedText);
        setSpeed(isDeleting ? 50 : 100);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <img src={profileImg} alt="Portrait of Pio Jhonson" className="hero-image mb-4" />
        <h2 className="intro-text">Hi, I’m</h2>
        <h1 className="hero-name">Pio Johnson.P</h1>

        <h3 className="typed-role">{text}<span className="cursor">|</span></h3>
      </div>
    </section>
  );
}
