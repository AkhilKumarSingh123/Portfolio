import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react'; // optional: install lucide-react for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white font-medium items-center">
          <Link to="/" className="hover:text-green-400 hover:underline underline-offset-8">Home</Link>
          <Link to="/about" className="hover:text-green-400 hover:underline underline-offset-8">About</Link>
          <Link to="/skill" className="hover:text-green-400  hover:underline underline-offset-8">Skills</Link>
          <Link to="/project" className="hover:text-green-400  hover:underline underline-offset-8">Projects</Link>
          <Link to="/resume" className="hover:text-green-400  hover:underline underline-offset-8">Resume</Link>
          <Link to="/contact" className="hover:text-green-400  hover:underline underline-offset-8">Contact</Link>
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white bg-black focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 shadow">
          <nav className="flex flex-col space-y-3 text-white font-medium">
            <Link to="/" 
            onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/skill" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/project" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      )}
    </header>
  );
}
