import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import PostDetail from './components/PostDetail';
import AllPosts from './pages/AllPosts';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Blog />
                <Contact />
                <Footer />
              </>
            } 
          />
          <Route 
            path="/posts" 
            element={
              <>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <AllPosts />
              </>
            } 
          />
          <Route 
            path="/post/:slug" 
            element={
              <>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <PostDetail />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;