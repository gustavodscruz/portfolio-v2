import React from "react";
import { Calendar, BriefcaseIcon } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "AlugaMais – Estágio em Desenvolvimento Full-Stack TypeScript",
      company: "AlugaMais",
      period: "Out/2025 – Dez/2025",
      location: "São Paulo, Brasil",
      description: [
        "Desenvolvimento de aplicações web com React, Next.js e NestJS.",
        "Integração e otimização de banco de dados MariaDB.",
        "Participação em dailies, code reviews e entregas contínuas.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "NestJS",
        "MariaDB",
        "Git",
        "GitHub",
        "Scrum",
      ],
    },
    {
      title: "Desenvolvedor Web Júnior",
      company: "Platty",
      period: "Jan 2024 – Set 2024",
      location: "São Paulo, Brasil",
      description: [
        "Desenvolvimento de landing pages e aplicações web auxiliares para melhorar a performance e a experiência do usuário.",
        "Gerenciamento de bancos de dados MySQL e criação de fluxos automatizados para otimização de processos em sites.",
        "Integração do Zoho CRM com rotinas automatizadas para aprimorar o relacionamento com o cliente.",
        "Colaboração com equipe utilizando Git, GitHub e Scrum; participação em code reviews e cerimônias de equipe.",
        "Atendimento ao cliente e suporte técnico para garantir operações contínuas.",
      ],
      technologies: [
        "PHP",
        "WordPress",
        "MySQL",
        "JavaScript",
        "CSS",
        "Figma",
        "Zoho CRM",
        "Git",
        "Scrum",
      ],
    },
    {
      title: "Arpin – Ferramenta de Aprendizado de Sistemas Embarcados (TCC)",
      company: "Etec Zona Leste",
      period: "Fev 2023 – Dez 2023",
      location: "São Paulo, Brasil",
      description: [
        "Desenvolvimento de aplicativo com realidade aumentada utilizando Unity e C#, integrado a uma interface mobile Flutter.",
        "Conexão com Firebase Firestore como banco de dados não relacional em tempo real para dados de usuários e conteúdo.",
        "Criação de funcionalidades educacionais como quizzes e visualizações 3D para suporte ao aprendizado.",
        "Uso de Git e GitHub para controle de versão e colaboração em equipe.",
        "Projeto apresentado na IBM e Fatec Zona Leste; aprovado com nota final 10.",
      ],
      technologies: [
        "Unity",
        "C#",
        "Flutter",
        "Firebase Firestore",
        "Git",
        "GitHub",
        "Blender",
      ],
    },
    {
      title: "Ecoletric – Plataforma de Gestão de Energia Inteligente",
      company: "FIAP",
      period: "Dez 2024 – Dez 2024",
      location: "São Paulo, Brasil",
      description: [
        "Desenvolvimento do backend com Java e API REST Jersey, seguindo princípios de Domain-Driven Design.",
        "Criação de frontend responsivo com React, TypeScript e Next.js.",
        "Integração com banco de dados Oracle para persistência de dados e uso de Python para previsões de energia solar com ML.",
        "Trabalho com dados em tempo real de APIs e implementação de arquitetura full-stack completa.",
        "Projeto avaliado com nota 92/100 e nota máxima nos módulos de Design de Banco de Dados e DDD.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Jersey",
        "React",
        "Next.js",
        "TypeScript",
        "Oracle DB",
        "Python",
        "Keras",
        "Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
          <span className="text-orange-500">Experiências</span>
        </h2>

        <div className="relative border-l-4 border-blue-800 dark:border-blue-600 ml-6 md:ml-12 pl-6 space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center">
                <BriefcaseIcon size={15} className="text-white" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 dark:text-white">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap justify-between items-center mt-2 mb-4">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {experience.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-orange-500 mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors inline-flex items-center"
          >
            Vamos trabalhar juntos!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
