import React from "react";

type Skill = {
  name: string;
  level: number;
  category: "core" | "framework" | "database" | "tools";
  icon: string;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "Java", level: 95, category: "core", icon: "☕" },
    { name: "Spring Boot", level: 90, category: "framework", icon: "🍃" },
    { name: "Hibernate", level: 85, category: "framework", icon: "🔄" },
    { name: "Oracle DB", level: 80, category: "database", icon: "💾" },
    { name: "MySQL", level: 80, category: "database", icon: "🐬" },
    { name: "PostgreSQL", level: 60, category: "database", icon: "🐘" },
    { name: "Docker", level: 80, category: "tools", icon: "🐳" },
    { name: "Git", level: 90, category: "tools", icon: "📊" },
    { name: "RESTful APIs", level: 90, category: "core", icon: "🌐" },
    { name: "Maven", level: 85, category: "tools", icon: "🔨" },
    { name: "AWS", level: 15, category: "tools", icon: "☁️" },
    { name: "Azure", level: 35, category: "tools", icon: "☁️" },
    { name: "React", level: 95, category: "core", icon: "⚛️" },
    { name: "Python", level: 80, category: "core", icon: "🐍" },
    { name: "Php", level: 75, category: "core", icon: "🐘" },
  ];

  const categories = [
    { id: "core", name: "Core Skills" },
    { id: "framework", name: "Frameworks & Libraries" },
    { id: "database", name: "Databases" },
    { id: "tools", name: "Tools & Infrastructure" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
          <span className="text-orange-500">Habilidades</span> técnicas
        </h2>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-blue-800 dark:text-blue-400 px-4">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-orange-500 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-400">
            Por que escolhi Java, React e Python com ML:
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">▹</span>
              <span>
                O Java oferece estabilidade, performance e um ecossistema maduro
                com o Spring Boot — ideal para construir APIs de backend
                sólidas.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">▹</span>
              <span>
                O React oferece velocidade e flexibilidade para construir
                interfaces de usuário dinâmicas e responsivas.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">▹</span>
              <span>
                O Python, combinado com bibliotecas como Keras e scikit-learn,
                me permite implementar modelos de machine learning com
                facilidade.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">▹</span>
              <span>
                Esse stack me permite entregar soluções completas — da UI ao
                processamento de dados e previsões inteligentes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">▹</span>
              <span>
                Apliquei isso em projetos reais e acadêmicos como o Ecoletric,
                integrando APIs em nuvem, ML e entrega full-stack.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
