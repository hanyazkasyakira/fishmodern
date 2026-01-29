'use client';

import React from 'react';
import { ShieldCheck, Target, Users, Globe, Leaf } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const About: React.FC = () => {
  const t = useTranslations('about');

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('features.legal.title'),
      desc: t('features.legal.desc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('features.quality.title'),
      desc: t('features.quality.desc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('features.network.title'),
      desc: t('features.network.desc')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('features.international.title'),
      desc: t('features.international.desc')
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: t('features.sustainable.title'),
      desc: t('features.sustainable.desc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-green relative diagonal-clip">
      <div className="container mx-auto px-6 pt-10 pb-20">

        <div className="flex flex-col lg:flex-row mb-16 gap-10">
          <div className="lg:w-1/2">
            <p className="text-brand-dark font-display font-bold text-sm tracking-[0.2em] uppercase mb-2">
              {t('label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark leading-tight mb-6">
              {t('title1')} <br /> {t('title2')}
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-brand-dark/80 font-medium leading-relaxed mb-4">
              {t('description')}
            </p>
            <p className="text-brand-dark/70 leading-relaxed mb-4">
              {t('history')}
            </p>
            <p className="text-brand-dark/80 font-medium leading-relaxed">
              {t('focus')}
            </p>
          </div>
        </div>

        {/* 5 Features Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-brand-dark p-6 group hover:bg-white transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-5 transition-opacity">
                <div className="transform scale-[1.5] text-brand-green group-hover:text-brand-dark">
                  {feature.icon}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 border border-brand-green/30 flex items-center justify-center mb-4 group-hover:border-brand-dark/20 text-brand-green group-hover:text-brand-dark transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-white text-lg font-display font-bold uppercase mb-3 group-hover:text-brand-dark transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {feature.desc}
                </p>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-green group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};