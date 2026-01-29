'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Product } from '../types';

export const Products: React.FC = () => {
  const t = useTranslations('products');

  const products: Product[] = [
    {
      id: 1,
      name: t('items.tuna.name'),
      category: t('items.tuna.category'),
      description: t('items.tuna.description'),
      image: "/img/WhatsApp Image 2026-301-27 at 16.11.28.jpeg"
    },
    {
      id: 2,
      name: t('items.snapper.name'),
      category: t('items.snapper.category'),
      description: t('items.snapper.description'),
      image: "/img/WhatsApp Image 2026-01-27 at 16.11.27.jpeg"
    },
    {
      id: 3,
      name: t('items.grouper.name'),
      category: t('items.grouper.category'),
      description: t('items.grouper.description'),
      image: "/img/WhatsApp Image 2026-01-27 at5 16.11.24.jpeg"
    },
    {
      id: 4,
      name: t('items.parrotfish.name'),
      category: t('items.parrotfish.category'),
      description: t('items.parrotfish.description'),
      image: "/img/WhatsApp Image 2026-01-27 at 16.11.28.jpeg"
    },
    {
      id: 5,
      name: t('items.mixed.name'),
      category: t('items.mixed.category'),
      description: t('items.mixed.description'),
      image: "/img/WhatsApp Image 2026-01-27 at 16.11.31.jpeg"
    },
    {
      id: 6,
      name: t('items.deepsea.name'),
      category: t('items.deepsea.category'),
      description: t('items.deepsea.description'),
      image: "/img/WhatsApp Image 20201-27 at 16.11.31.jpeg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="bg-brand-green/20 text-brand-dark px-4 py-1 font-display font-bold text-xs uppercase tracking-widest rounded-full">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mt-4 mb-6">
            {t('title')}
          </h2>
          <div className="w-20 h-1 bg-brand-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative h-[400px] w-full overflow-hidden bg-brand-dark cursor-pointer">
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end border-b border-gray-600 pb-4 mb-4 group-hover:border-brand-green transition-colors">
                    <div>
                      <p className="text-brand-green text-sm font-bold uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-3xl font-display font-bold text-white">{product.name}</h3>
                    </div>
                    <div className="bg-brand-green p-2 text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green transform translate-x-10 -translate-y-10 rotate-45 hidden group-hover:block transition-all"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#contact" className="border-2 border-brand-dark text-brand-dark px-10 py-3 font-display font-bold uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
            {t('downloadCatalog')}
          </a>
        </div>
      </div>
    </section>
  );
};