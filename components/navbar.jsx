"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed w-full top-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/skills" className="hover:text-blue-400">Skills</Link>
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>
          <Link href="/certificates" className="hover:text-blue-400">Certificates</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4">
          <Link href="/" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">Home</Link>
          <Link href="/about" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">About</Link>
          <Link href="/skills" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">Skills</Link>
          <Link href="/projects" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">Projects</Link>
          <Link href="/certificates" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">Certificates</Link>
          <Link href="/contact" onClick={closeMenu} className="block text-center py-2 hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </nav>
  );
}
