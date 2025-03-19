"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer">
            Sujal Chand
          </span>
        </Link>

        {/* Navigation Links with More Gaps */}
        <div className="flex space-x-8"> {/* Increased spacing to space-x-8 */}
          <Link href="/" className="font-semibold text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="font-semibold text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/skills" className="font-semibold text-gray-700 hover:text-blue-600">
            Skills
          </Link>
          <Link href="/projects" className="font-semibold text-gray-700 hover:text-blue-600">
            Projects
          </Link>
          <Link href="/certificates" className="font-semibold text-gray-700 hover:text-blue-600">
            Certificates
          </Link>
          <Link href="/contact" className="font-semibold text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
