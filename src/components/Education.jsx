import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="bg-slate-800/50 rounded-lg p-8">
            <div className="text-blue-400 text-sm font-semibold mb-2">
              2023 - 2027 (Expected)
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <div className="text-purple-400 font-semibold mb-4">
              Iowa State University - College of Liberal Arts and Sciences
            </div>
            <div className="text-slate-300 mb-4">
              <strong>GPA:</strong> 3.5/4.0
            </div>
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-slate-300 text-sm">• Data Structures</span>
                <span className="text-slate-300 text-sm">• Algorithm Design</span>
                <span className="text-slate-300 text-sm">• Software Development</span>
                <span className="text-slate-300 text-sm">• Database Systems</span>
                <span className="text-slate-300 text-sm">• Computer Architecture</span>
                <span className="text-slate-300 text-sm">• Theory of Computation</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Minor in Apparel, Merchandising, and Design
            </h3>
            <div className="text-purple-400 font-semibold mb-4">
              Iowa State University - College of Design
            </div>
            <div >
              <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-slate-300 text-sm">• Fashion in U.S. Society</span>
                <span className="text-slate-300 text-sm">• Fashion Products and Markets</span>
              </div>
            </div>
          </div>

          {/* Certifications & Learning */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Certifications & Online Learning
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-400 font-semibold">
                    Hackerrank - SQL Basics Certification
                  </div>
                  <div className="text-slate-400 text-sm">2025</div>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold">
                    AWS - Cloud Practitioner Certification
                  </div>
                  <div className="text-slate-400 text-sm">2025</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Dean's List - Fall 2023, Spring 2024</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Computer Science Academic Scholarship</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-slate-300">Eagle Scout Award - Summer 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
