"use client";
import { Code, Database, Terminal, Cpu, Globe } from "lucide-react";

export default function Skills() {
  return (
    <>
      <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-6">
          {/* Heading Section */}
          <h1 className="text-5xl font-bold text-center mb-4">My Skills</h1>
          <p className="text-lg text-gray-300 text-center mb-12">
            Technologies I work with to build amazing projects.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill 1 - HTML & CSS */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Code size={50} className="text-blue-400" />
              <h3 className="text-2xl font-semibold mt-4">HTML & CSS</h3>
              <p className="text-gray-300 mt-2 text-center">
                Expertise in creating responsive and structured web pages.
              </p>
            </div>

            {/* Skill 2 - JavaScript */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Terminal size={50} className="text-yellow-400" />
              <h3 className="text-2xl font-semibold mt-4">JavaScript</h3>
              <p className="text-gray-300 mt-2 text-center">
                Proficient in ES6+ for building interactive applications.
              </p>
            </div>

            {/* Skill 3 - C++ */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Cpu size={50} className="text-purple-400" />
              <h3 className="text-2xl font-semibold mt-4">C++</h3>
              <p className="text-gray-300 mt-2 text-center">
                Strong grasp of OOP, DSA, and competitive programming.
              </p>
            </div>

            {/* Skill 4 - Python & Data Analysis */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Database size={50} className="text-green-400" />
              <h3 className="text-2xl font-semibold mt-4">Python & Data Analysis</h3>
              <p className="text-gray-300 mt-2 text-center">
                Experienced in data visualization, ML, and automation.
              </p>
            </div>

            {/* Skill 5 - Next.js */}
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Globe size={50} className="text-gray-400" />
              <h3 className="text-2xl font-semibold mt-4">Next.js</h3>
              <p className="text-gray-300 mt-2 text-center">
                Skilled in building high-performance web applications.
              </p>

            </div>
            <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Database size={50} className="text-red-400" />
              <h3 className="text-2xl font-semibold mt-4">SQL & Databases</h3>
              <p className="text-gray-300 mt-2 text-center">
                Knowledge in relational databases & efficient queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
