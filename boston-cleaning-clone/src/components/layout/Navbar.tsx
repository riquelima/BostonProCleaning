
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="relative w-40 h-16">
          <Image
            src="/boston-layed-logo.webp" 
            alt="Boston Q Pro Cleaning Logo"
            width={160}
            height={64}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-gray-600 hover:text-blue-500">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-500">About Us</Link>
          <Link href="#gallery" className="text-gray-600 hover:text-blue-500">Gallery</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
        </div>
        <button className="hidden md:block bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors">
          Free Estimate
        </button>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="text-gray-600 hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    