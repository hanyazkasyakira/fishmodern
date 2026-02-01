'use client';

import React from 'react';
import { ArrowRight, Globe, TrendingUp, Anchor } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-brand-dark overflow-hidden pt-20">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/WhatsApp Image 2026-01-27 at 16.11.31.jpeg"
          alt="Fresh Seafood Catch"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
      </div>

      {/* Diagonal Accent Shape (Like reference) */}
      <div className="diagonal-stripe hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">

        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <div className="inline-block border-l-4 border-brand-green pl-4 mb-6">
            <p className="text-brand-green font-display font-bold tracking-[0.2em] uppercase animate-pulse">
              {t('welcome')}
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-snug mb-8">
            {t('title1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-white">
              {t('title2')}
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#order" className="group bg-brand-green text-brand-dark px-10 py-5 font-display font-bold text-xl uppercase tracking-wider hover:bg-white transition-all transform -skew-x-12 inline-flex items-center justify-center shadow-2xl">
              <span className="skew-x-12 flex items-center gap-2">
                {t('contactUs')} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#products" className="group border-2 border-white text-white px-8 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-brand-dark transition-all transform -skew-x-12 inline-flex items-center justify-center">
              <span className="skew-x-12">
                {t('ourProducts')}
              </span>
            </a>
          </div>
        </div>

        {/* Hero Image / Visual Element */}
        <div className="w-full md:w-1/2 relative h-[500px] hidden md:flex items-center justify-center">
          {/* Main Image Container with Polygon Clip */}
          <div className="relative w-full h-full">
            <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-gray-800 transform rotate-3"></div>
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white/5 transform -rotate-3 backdrop-blur-sm border border-white/10 z-10 flex flex-col justify-end p-8">
              <img
                src="/img/makarel1 (1).jpeg"
                alt="Premium Fresh Mackerel"
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Floating stats */}
            <div className="absolute bottom-20 left-10 z-30 bg-brand-green p-6 shadow-xl transform skew-x-12">
              <div className="transform -skew-x-12 text-center">
                <p className="text-3xl font-display font-bold text-brand-dark">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">{t('exportCountries')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker/features */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md border-t border-white/10 py-6 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-white/70">
          <div className="flex items-center gap-3">
            <Globe className="text-brand-green" />
            <span className="text-sm font-display uppercase tracking-widest">{t('globalLogistics')}</span>
          </div>
          <div className="flex items-center gap-3">
            <Anchor className="text-brand-green" />
            <span className="text-sm font-display uppercase tracking-widest">{t('wildCaught')}</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-brand-green" />
            <span className="text-sm font-display uppercase tracking-widest">{t('marketDriven')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};