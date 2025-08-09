
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../components/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/contact';
import Footer from '../components/Footer';
import Resume from '../sections/Resume';



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume/>
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
