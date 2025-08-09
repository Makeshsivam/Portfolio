// src/data/projects.js
import project1Img from '../assets/images/project1.jpg';
import project2Img from '../assets/images/Project2.png';
import project3Img from '../assets/images/project3.jpg';
// import other images similarly

const projects = [
  {
    title: 'Time Tracker',
    description: 'A web use char.js to visualize the time spent on various tasks.',
    image: project1Img,
    link: 'https://piojohnson6-ai.github.io/Time_tracker/',
  },
  {
    title: 'Notes App',
    description: 'A web app to save the notes that saves the data in the firebase',
    image: project2Img,
    link: 'https://makeshsivam.github.io/Notes_App/',
  },
  {
    title: 'Delay Button',
    description: 'A simple app to delay the message you typed in the input field',
    image: project3Img,
    link: 'https://piojohnson6-ai.github.io/Delay/',
  },
  // add more projects here
];

export default projects;
