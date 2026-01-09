import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-32 px-4 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-900"
    >
      {/* Code pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10">
        <div className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 font-mono whitespace-pre leading-relaxed">
          {Array(50)
            .fill(
              'public class JavaDeveloper extends Engineer {\n  private final String name = "Gustavo Dias";\n  private final String role = "Java Developer";\n  \n  @Override\n  public Solution solveComplex(Problem problem) {\n    return analyze(problem)\n      .map(this::design)\n      .map(this::implement)\n      .map(this::test)\n      .orElse(seekHelp());\n  }\n}\n',
            )
            .join("")}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-blue-900 dark:text-white leading-tight">
            <span className="text-orange-500">Full-Stack Developer</span>, com
            Java, React & Machine Learning
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Eu crio aplicações modernas combinando Java e Spring Boot no
            backend, React no frontend e Python para soluções de aprendizado de
            máquina.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors transform hover:scale-105 duration-200 inline-flex items-center"
            >
              Entre em contato
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border-2 border-blue-800 dark:border-blue-400 text-blue-800 dark:text-blue-400 hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 font-medium rounded-lg transition-colors transform hover:scale-105 duration-200 inline-flex items-center"
            >
              Veja meus Projetos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={30} className="text-orange-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
