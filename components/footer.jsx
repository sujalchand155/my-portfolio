"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Copyright Text - Centered */}
        <p className="text-gray-400 text-center flex-1">
          © Sujal Chand. All Rights Reserved
        </p>

        {/* Social Links - Aligned Right with Icons */}
        <div className="flex space-x-6">
          {/* GitHub Icon */}
          <Link href="https://github.com/sujalchand155" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="currentColor"
              className="w-6 h-6 text-gray-300 hover:text-gray-500 transition"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.04-2.68-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.02A9.62 9.62 0 0 1 12 6.8c.85 0 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.43.1 2.69.65.7 1.04 1.59 1.04 2.68 0 3.84-2.35 4.69-4.58 4.94.36.31.69.92.69 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* LinkedIn Icon - Proper SVG */}
          <Link href="https://www.linkedin.com/in/sujal-chand-b95160302/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#0077B5" /* LinkedIn blue */
              className="w-6 h-6 hover:opacity-80 transition"
            >
              <path d="M20.447 20.452h-3.554v-5.482c0-1.306-.025-2.988-1.82-2.988-1.822 0-2.101 1.421-2.101 2.893v5.577H9.42V9.005h3.414v1.561h.048c.477-.9 1.642-1.85 3.38-1.85 3.614 0 4.285 2.379 4.285 5.474v6.262zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07s.927-2.07 2.07-2.07 2.07.927 2.07 2.07-.927 2.07-2.07 2.07zm1.777 13.02H3.56V9.005h3.555v11.448zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.542C0 23.226.792 24 1.771 24h20.451c.98 0 1.775-.774 1.775-1.728V1.728C24 .774 23.206 0 22.225 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
