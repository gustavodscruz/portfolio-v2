import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

interface HomePageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function HomePage({ darkMode, toggleDarkMode }: HomePageProps) {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
