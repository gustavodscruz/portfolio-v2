import React from "react";
import { Github, Linkedin, Mail, Coffee } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-400">&lt;</span>
              Gustavo Dias
              <span className="text-orange-400">/&gt;</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Desenvolvedor Java apaixonado por criar aplicativos eficientes,
              escaláveis ​​e sustentáveis ​​que resolvam problemas do mundo
              real.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/gustavodiasdsc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                aria-label="Send email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Technologies
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Java</li>
              <li className="text-gray-300">Spring Boot</li>
              <li className="text-gray-300">Python</li>
              <li className="text-gray-300">TypeScript</li>
              <li className="text-gray-300">SQL & NoSQL</li>
              <li className="text-gray-300">DevOps</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Gustavo Dias. Direitos Reservados.
          </p>
          <div className="flex items-center mt-4 sm:mt-0 text-gray-400 text-sm">
            <span className="flex items-center">
              Construído com{" "}
              <Coffee size={16} className="mx-1 text-orange-400" /> e Java
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
