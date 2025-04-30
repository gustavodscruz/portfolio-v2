import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  githubLink?: string;
  liveLink?: string;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects: Project[] = [
    {
      title: "Ecoletric – Smart Energy Management Platform",
      description:
        "Plataforma full-stack para gestão de energia solar. Utiliza previsão via machine learning com Python, API REST Java e frontend com Next.js.",
      image:
        "https://genlight.vercel.app/_next/image?url=%2Fdashboard.png&w=828&q=75",
      technologies: [
        "Java",
        "Jersey",
        "Spring Boot",
        "React",
        "Next.js",
        "Oracle DB",
        "Python",
        "Keras",
      ],
      category: ["fullstack", "ml", "energy"],
      githubLink: "https://github.com/ecoletric/front-GenLight",
    },
    {
      title: "Arpin – Embedded Learning Tool",
      description:
        "Aplicativo educacional com realidade aumentada para ensino de sistemas embarcados, integrado ao Flutter e Firebase.",
      image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg",
      technologies: ["Unity", "C#", "Flutter", "Firebase Firestore", "Blender"],
      category: ["education", "mobile", "ar"],
      githubLink: "https://github.com/gustavodscruz/TCC_ARPIN",
    },
    {
      title: "PortfolioAI – Automated Portfolio Builder",
      description:
        "Gera portfólios personalizados a partir de dados do LinkedIn, GitHub e Notion usando Spring Boot e Next.js.",
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      technologies: [
        "Java",
        "Spring Boot",
        "Next.js",
        "TypeScript",
        "OAuth2",
        "Docker",
      ],
      category: ["saas", "ai", "portfolio"],
      githubLink: "https://github.com/gustavodscruz/portfolioai-backend",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "enterprise", name: "Enterprise" },
    { id: "java", name: "Java" },
    { id: "web", name: "Web Applications" },
    { id: "data", name: "Data Processing" },
    { id: "tools", name: "Tools & Libraries" },
    { id: "devops", name: "DevOps" },
    { id: "education", name: "Educational" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-white">
          Alguns <span className="text-orange-500">Projetos</span>
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Uma seleção dos meus trabalhos recentes apresentando soluções baseadas
          em Java e outras tecnologias para vários domínios de negócios e
          desafios técnicos.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? "bg-blue-800 dark:bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs text-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      aria-label={`View ${project.title} code on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/gustavodscruz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-800 dark:border-blue-600 text-blue-800 dark:text-blue-400 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white font-medium rounded-lg transition-colors inline-flex items-center"
          >
            <Github size={20} className="mr-2" />
            Veja mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
