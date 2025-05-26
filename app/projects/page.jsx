"use client";
import { useState } from "react";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-300 mb-12">
          A showcase of my recent work.
        </p>

        {/* Centering Projects */}
        <div className="flex flex-wrap justify-center gap-8">
          <ProjectCard
            title="Simple Calculator"
            description="A basic mathematical tool that allows users to perform fundamental arithmetic operations."
            image="/calculator.png"
            link="https://github.com/sujalchand155/CALCULATOR.git"
          />

          <ProjectCard
            title="AQI Prediction"
            description="A machine learning project using supervised learning to analyze Air Quality Index."
            image="/aqi.png"
            link="https://github.com/sujalchand155/AQI-Prediction.git"
          />

            <ProjectCard
            title="Attendance Using Face Recognition"
            description="Attendance Management System that utilizes facial recognition to automate attendance tracking."
            image="attendance.png"
            link="https://github.com/sujalchand155/attendance.git"
          />
          


        </div>
      </div>
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ title, description, image, link }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl w-96"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>

      {hover && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            View Project
          </a>
        </div>
      )}
    </div>
  );
}
