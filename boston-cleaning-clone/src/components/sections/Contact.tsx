
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <input 
              type="text" 
              placeholder="Your Name"
              className="p-3 border rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Your Email"
              className="p-3 border rounded-lg"
            />
            <textarea 
              placeholder="Your Message"
              rows={5}
              className="p-3 border rounded-lg"
            ></textarea>
            <button 
              type="submit"
              className="bg-blue-500 text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
    