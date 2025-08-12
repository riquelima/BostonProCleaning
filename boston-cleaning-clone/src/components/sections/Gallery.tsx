
import React from 'react';
import Image from 'next/image';

const galleryImages = [
  { before: '/before-1-boston.webp', after: '/AFTER-1-boston.webp' },
  { before: '/before-2-boston.webp', after: '/AFTER-2-boston.webp' },
  { before: '/before-3-boston.webp', after: '/AFTER-3-boston.webp' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Before & After
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Before</h3>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={image.before}
                  alt={`Before ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">After</h3>
              <div className="relative w-full h-64">
                <Image
                  src={image.after}
                  alt={`After ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
    