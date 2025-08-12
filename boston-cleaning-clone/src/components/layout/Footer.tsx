
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">Boston Q Pro Cleaning</p>
        <p className="mb-4">123 Cleaning St, Boston, MA</p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" className="hover:text-blue-400">Facebook</Link>
          <Link href="#" className="hover:text-blue-400">Instagram</Link>
          <Link href="#" className="hover:text-blue-400">Yelp</Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Boston Q Pro Cleaning. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    