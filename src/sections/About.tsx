import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden mx-auto border-4 border-orange-500">
                <img
                  src="https://github.com/gustavodscruz.png"
                  alt="Professional headshot of a Java developer"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-blue-800 dark:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-bold">Experiência profissional</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-white">
              Sobre <span className="text-orange-500">Mim</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sou um Desenvolvedor Full-Stack apaixonado, com experiência
              prática em construção de aplicações web e integração de sistemas
              backend usando Java e tecnologias web modernas. Minha jornada
              começou em cursos técnicos e evoluiu para projetos profissionais e
              acadêmicos.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Sou especialista em Java e no ecossistema Spring Boot, tendo
              trabalhado em soluções escaláveis ​​envolvendo APIs RESTful,
              bancos de dados relacionais e ferramentas modernas como Docker e
              TypeScript. Estou comprometido em escrever código limpo e
              sustentável e usar o Git de forma colaborativa.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Contribuí para projetos acadêmicos e práticos, como sistemas de
              gerenciamento de energia e aplicativos educacionais com RA. Estou
              sempre ansioso para aprender, explorar novas tecnologias e crescer
              como desenvolvedor por meio do trabalho em equipe, colaboração de
              código aberto e aprendizado contínuo.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                ☕ Java
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                🍃 Spring Boot
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                🔄 DevOps
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                💾 SQL/NoSQL
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                ⚛️ React/Next.js
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                📝 Php/Wordpress
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                🤖 Python / Machine Learning
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300">
                🇹 TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
