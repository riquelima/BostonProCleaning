
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96">
            <Image
              src="/about-boston-img-1.webp" // Placeholder
              alt="Team cleaning"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              Boston Q Pro Cleaning is a team of dedicated professionals committed to providing top-quality cleaning services. We believe that a clean environment is essential for a healthy and happy life.
            </p>
            <p className="text-gray-600">
              Our mission is to exceed our clients' expectations by delivering reliable, efficient, and thorough cleaning services. We use eco-friendly products to ensure the safety of your family and pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
    