import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaChartBar } from 'react-icons/fa';
import { SiR, SiMongodb, SiMysql, SiTensorflow } from 'react-icons/si';
import './Skills.css';  // rename your CSS file for clarity

export default function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'R Programming', icon: <SiR color="#276DC3" /> },
    { name: 'Data Science', icon: <SiTensorflow color="#FF6F00" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'GitHub', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Power BI', icon: <FaChartBar color="#F2C811" /> },
    { name: 'Modern AI', icon: <SiTensorflow color="#FF6F00" /> },
  ];

  const midIndex = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, midIndex);
  const secondHalf = skills.slice(midIndex);

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        <div className="container">
          <ul className="skills-list">
            {firstHalf.map(({ name, icon }) => (
              <li key={name} className="skill-item">
                {icon} {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <ul className="skills-list">
            {secondHalf.map(({ name, icon }) => (
              <li key={name} className="skill-item">
                {icon} {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
