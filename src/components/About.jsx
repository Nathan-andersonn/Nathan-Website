import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-1000 hover:scale-105">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto transform transition-all duration-500 hover:w-32 animate-fade-in-up" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-1000 hover:translate-x-2 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6 transition-colors duration-300 hover:text-blue-400">
              Passionate about Technology & Innovation
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed transform transition-all duration-500 hover:text-white">
              I'm a dedicated Computer Science student with a passion for creating 
              meaningful digital experiences. My journey in tech started with curiosity 
              about how things work, and has evolved into a deep appreciation for 
              clean code, user-centered design, and innovative problem-solving.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed transform transition-all duration-500 hover:text-white">
              When I'm not coding, you can find me in the gym, collecting sneakers, 
              or exploring the latest developments in software and hardware technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm transform transition-all duration-300 hover:bg-blue-500/40 hover:scale-110 hover:-translate-y-1 cursor-pointer">
                Problem Solver
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm transform transition-all duration-300 hover:bg-purple-500/40 hover:scale-110 hover:-translate-y-1 cursor-pointer" style={{ transitionDelay: '0.1s' }}>
                Quick Learner
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm transform transition-all duration-300 hover:bg-green-500/40 hover:scale-110 hover:-translate-y-1 cursor-pointer" style={{ transitionDelay: '0.2s' }}>
                Team Player
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            <div className="bg-slate-700/50 p-6 rounded-lg text-center transform transition-all duration-500 hover:bg-slate-600/50 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 group cursor-pointer">
              <div className="text-3xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-300">3.5</div>
              <div className="text-slate-300 transition-colors duration-300 group-hover:text-white">GPA</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center transform transition-all duration-500 hover:bg-slate-600/50 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer" style={{ transitionDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-purple-400 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:text-purple-300">10+</div>
              <div className="text-slate-300 transition-colors duration-300 group-hover:text-white">Projects</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center transform transition-all duration-500 hover:bg-slate-600/50 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 group cursor-pointer" style={{ transitionDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-green-400 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:text-green-300">3+</div>
              <div className="text-slate-300 transition-colors duration-300 group-hover:text-white">Years Experience</div>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center transform transition-all duration-500 hover:bg-slate-600/50 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 group cursor-pointer" style={{ transitionDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-yellow-400 mb-2 transition-all duration-300 group-hover:scale-125 group-hover:text-yellow-300">6+</div>
              <div className="text-slate-300 transition-colors duration-300 group-hover:text-white">Programming Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
