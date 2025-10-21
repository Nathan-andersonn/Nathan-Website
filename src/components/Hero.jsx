import React from "react";
import NathanProfile from "../images/Nathan-profile.png";

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Nathan
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Computer Science student passionate about building innovative web applications 
              and solving complex problems through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-slate-400 text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-300 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-100 h-100 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center animate-none">
              <img src={NathanProfile} alt="Nathan Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
