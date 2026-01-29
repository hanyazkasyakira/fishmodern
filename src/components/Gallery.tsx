'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useTranslations('gallery');

  const images = [
    {
      src: "/img/WhatsApp Image 2026-301-27 at 16.11.28.jpeg",
      title: t('images.tuna.title'),
      description: t('images.tuna.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-27 at 16.11.27.jpeg",
      title: t('images.snapper.title'),
      description: t('images.snapper.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-27 at5 16.11.24.jpeg",
      title: t('images.grouper.title'),
      description: t('images.grouper.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-274 at 16.11.26.jpeg",
      title: t('images.parrotfish1.title'),
      description: t('images.parrotfish1.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-27 at 16.11.28.jpeg",
      title: t('images.parrotfish2.title'),
      description: t('images.parrotfish2.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-27 at 165.11.27.jpeg",
      title: t('images.mixed1.title'),
      description: t('images.mixed1.description')
    },
    {
      src: "/img/WhatsApp Image 2026-01-27 at 16.11.31.jpeg",
      title: t('images.mixed2.title'),
      description: t('images.mixed2.description')
    },
    {
      src: "/img/WhatsApp Image 20201-27 at 16.11.31.jpeg",
      title: t('images.deepsea.title'),
      description: t('images.deepsea.description')
    }
  ];

  return (
    <>
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <span className="bg-brand-green/20 text-brand-dark px-4 py-1 font-display font-bold text-xs uppercase tracking-widest rounded-full">
              {t('label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mt-4 mb-6">
              {t('title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(image.src)}
                className="group relative h-80 overflow-hidden cursor-pointer bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-display font-bold text-lg mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {image.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-green transform translate-x-6 -translate-y-6 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 italic text-sm">
              {t('note')}
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-green transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
