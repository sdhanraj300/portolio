"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const navLinks = [
    { label: 'Home', href: '' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md fixed top-0 w-full z-10">
      <div onClick={() => router.push('/')} className="text-2xl font-bold cursor-pointer hover:text-red-600 transition duration-200">
        DS
      </div>

      <div className="hidden md:flex space-x-8 text-lg">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={`/${link.href}`}
            className="hover:text-gray-400 transition duration-200 relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
        ))}
      </div>
        <div className=""></div>
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <button className="focus:outline-none hover:text-gray-400 transition duration-200">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Full-screen mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-100 text-white flex flex-col items-center justify-center transform transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)} // Close on clicking outside links
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={`/${link.href}`}
              className="text-2xl my-4 hover:text-gray-400 transition duration-200 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
