import React from "react";
import aidvisorImage from "../images/aidvisor-tab.png";

const projects = [
  {
    id: 1,
    title: "Aidvisor",
    description: "Full-stack prototype web application to provide academic advising assistance for students utilising LLM models to answer questions, suggest courses, and plan academic paths.",
    image: aidvisorImage,
    technologies: ["React", "Node.js", "MongoDB", "LLM Models"],
    githubUrl: "https://github.com/Nathan-andersonn/aidvisor-proto-dash",
    featured: false
  },
  {
    id: 2,
    title: "Caffeine Tracker App",
    description: "A caffeine tracking application to help users monitor their caffeine intake and stay within recommended limits.",
    image: "☕",
    technologies: ["React", "Firebase"],
    githubUrl: "https://github.com/Nathan-andersonn/caffeine-tracker",
    liveUrl: "https://blood-caffeine-tracker.netlify.app",
    featured: false
  },
  {
    id: 3,
    title: "Pokedex App",
    description: "A Pokedex application to search and view details about various Pokemon.",
    image: "🎮",
    technologies: ["React", "PokeAPI", "CSS"],
    githubUrl: "https://github.com/Nathan-andersonn/pokedex",
    liveUrl: "https://nathans-pokedex.netlify.app",
    featured: false
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity
          </p>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300"
              >
                <div className="mb-4 text-center">
                  {typeof project.image === 'string' && project.image.startsWith('/') || typeof project.image === 'object' ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-4xl">{project.image}</div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-slate-600/50 text-slate-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubUrl}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      title="View Live Site"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
