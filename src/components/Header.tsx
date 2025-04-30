import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3 dark:bg-gray-900'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-900 dark:text-white">
          <span className="text-orange-500">&lt;</span>
          Gustavo Dias
          <span className="text-orange-500">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a
              href="#home"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;