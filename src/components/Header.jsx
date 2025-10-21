import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text ">
            Nathan Anderson
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Home</a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">About</a>
            <a href="#skills" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Skills</a>
            <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Experience</a>
            <a href="#education" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Education</a>
            <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-all duration-200 hover:text-2xl">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Home</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">About</a>
              <a href="#skills" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Skills</a>
              <a href="#experience" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Experience</a>
              <a href="#education" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Education</a>
              <a href="#projects" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 py-2 transition-all duration-200 hover:text-2xl">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
