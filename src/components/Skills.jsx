import React from "react";
import CPlusPlusIcon from "../images/CPlusPlus.svg";
import CSharpIcon from "../images/CSharp.png";
import CIcon from "../images/C_Logo.png";
import JavaScriptIcon from "../images/JavaScript.svg";
import MongoDBIcon from "../images/MongoDB.svg";
import NodeIcon from "../images/Node.svg";
import PythonIcon from "../images/Python.png";
import GitIcon from "../images/git.svg";
import JavaIcon from "../images/java.png";
import MySQLIcon from "../images/mySQL.png";
import TailwindIcon from "../images/tailwind.png";
import ReactIcon from "../images/react_logo_dark.svg";

const skills = [
  { name: "C++", icon: CPlusPlusIcon },
  { name: "C#", icon: CSharpIcon },
  { name: "C", icon: CIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Java", icon: JavaIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "React.js", icon: ReactIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Git", icon: GitIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "MongoDB", icon: MongoDBIcon },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here are the technologies I've been working with and learning throughout my journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-slate-300 font-medium text-center group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
