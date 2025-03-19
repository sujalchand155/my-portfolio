"use client";
import { User } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white/5 shadow-lg rounded-xl p-10 transform transition-all duration-300 hover:scale-105">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-6 flex justify-center items-center gap-3">
            <User className="text-blue-400" size={42} />
            About Me
          </h1>

          {/* Introduction */}
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            I am an aspiring <span className="text-blue-300 font-semibold">AI & Machine Learning Engineer</span> currently pursuing my 
            Bachelor's degree at <span className="text-indigo-300 font-semibold">Lokmanya Tilak College of Engineering</span>. Passionate about 
            technology, I specialize in <span className="text-green-300 font-semibold">machine learning, web development, and fintech applications</span>, aiming 
            to develop intelligent solutions for real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
}
