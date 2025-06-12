"use client";

import Navbar from "@/components/navbar";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-400">Sujal Chand</span>
        </h1>

        <div className="mt-4 text-xl md:text-2xl font-medium">
          <Typewriter
            words={[
              "A Web Developer 💻",
              "A Data Analyst 📊",
              "An ML Enthusiast 🤖",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </div>

        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          I build real-world applications with a focus on{" "}
          <strong>Web Development, Data Analysis, and Machine Learning</strong>.  
          Passionate about solving problems using technology.
        </p>

        <div className="mt-8">
       <Link
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
>
  📄 Download Resume
</Link>
        </div>
      </div>
    </>
  );
}
