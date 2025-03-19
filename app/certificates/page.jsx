"use client";
import { FileText, ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Hackathon Participation",
      link: "https://drive.google.com/file/d/1CsvAUKwKM3wNoP0LyrYL0OcT9rk0tXQI/view?usp=drive_link",
    },
    {
      title: "IBM Data Analytics Internship",
      link: "https://drive.google.com/file/d/1DGRV7gRPtdLcJrvp5f84kWIYQESOhgeP/view?usp=drive_link",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">My Certificates</h1>
        <p className="text-lg text-gray-300 mb-8">
          Here are some of my certifications.
        </p>

        {/* Centering Certificates */}
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-105 w-80">
              <FileText size={40} className="text-blue-400 mb-2" />
              <h3 className="text-xl font-semibold text-center">{certificate.title}</h3>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-300 hover:underline flex items-center"
              >
                View Certificate <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
