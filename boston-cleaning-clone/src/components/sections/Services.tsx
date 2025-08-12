
import React from 'react';

// Sample data for services. This can be expanded or moved to a separate file.
const services = [
  {
    name: 'Residential Cleaning',
    description: 'Complete cleaning services for your home.',
    icon: '🏠' 
  },
  {
    name: 'Commercial Cleaning',
    description: 'Professional cleaning for your office or business.',
    icon: '🏢'
  },
  {
    name: 'Deep Cleaning',
    description: 'Intensive cleaning for a spotless result.',
    icon: '✨'
  },
   {
    name: 'Window Cleaning',
    description: 'Crystal clear windows for a better view.',
    icon: '🧼'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
    