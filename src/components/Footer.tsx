'use client';

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Anchor } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const t = useTranslations('footer');

  const links = [
    t('links.home'),
    t('links.company'),
    t('links.catalog'),
    t('links.sustainability'),
    t('links.news'),
  ];

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="PT Fish Modern Success Logo"
                className="h-12 w-auto"
              />
              <div className="leading-tight">
                <span className="block text-white font-display font-bold uppercase tracking-wider text-lg">PT Fish</span>
                <span className="block text-white/80 font-display font-semibold uppercase tracking-wider text-base">Modern Success</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('brandDesc')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase text-brand-green mb-6 tracking-wider">{t('contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span className="text-sm">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                <a href="tel:+6289512691579" className="text-sm hover:text-brand-green transition-colors">+62 895-1269-1579</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                <a href="mailto:export.ptfishmodernsukses@gmail.com" className="text-sm hover:text-brand-green transition-colors">export.ptfishmodernsukses@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase text-brand-green mb-6 tracking-wider">{t('explore')}</h4>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-green text-sm transition-colors uppercase tracking-wide">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase text-brand-green mb-6 tracking-wider">{t('stayConnected')}</h4>
            <p className="text-gray-400 text-sm mb-4">{t('newsletterDesc')}</p>
            <div className="flex">
              <input type="email" placeholder={t('emailPlaceholder')} className="bg-gray-800 border-none outline-none text-white px-4 py-2 w-full text-sm" />
              <button className="bg-brand-green text-brand-dark px-4 font-bold hover:bg-white transition-colors">OK</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};