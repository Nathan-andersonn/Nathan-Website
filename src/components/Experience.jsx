import React from "react";

const experiences = [
  {
    id: 1,
    title: "Information Technology Support Assistant II",
    company: "Iowa State University",
    period: "August 2024 - Present",
    description: "Manage and monitor checkout machines for students and staff of the Computer Science department while maintaining system reliability. Improved ticket response time by 60% through process optimization and implemented standardized documentation for student worker procedures, enhancing team efficiency and consistency.",
    technologies: ["MECM", "Active Directory", "Device Management", "Documentation"]
  },
  {
    id: 2,
    title: "Food and Beverage Expert",
    company: "Target",
    period: "June 2022 - Present",
    description: "Enhanced consumer experience and streamlined service by optimizing inventory processes. Trained and mentored 10+ new team members on inventory management systems, resulting in more accurate live item counts and faster restocking, improving overall store efficiency and customer satisfaction.",
    technologies: ["Customer Service", "Inventory Management", "Teamwork", "Problem Solving", "Communication"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="text-sm text-blue-400 font-semibold mb-1">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-purple-400 font-medium">
                    {exp.company}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-slate-600/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
