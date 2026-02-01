'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, Globe, ChevronDown } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, Locale } from '@/i18n/routing';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tLang = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('products'), href: '#products' },
    { name: t('quality'), href: '#quality' },
    { name: t('contact'), href: '#contact' },
  ];

  const languages: { code: Locale; name: string; flag: string }[] = [
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="PT Fish Modern Success Logo"
            className="h-12 w-auto"
          />
          <div className="leading-tight">
            <span className="block text-white font-display font-bold uppercase tracking-wider text-sm">PT Fish</span>
            <span className="block text-white/80 font-display font-semibold uppercase tracking-wider text-xs">Modern Success</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-display text-sm uppercase tracking-widest hover:text-brand-green transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 text-white font-display text-sm uppercase tracking-widest hover:text-brand-green transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang.flag}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-brand-dark border border-gray-700 rounded-lg shadow-xl overflow-hidden min-w-[150px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-800 transition-colors ${locale === lang.code ? 'bg-gray-800 text-brand-green' : 'text-white'
                      }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-display text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="bg-brand-green text-brand-dark px-6 py-2 font-display font-bold uppercase text-sm tracking-wider hover:bg-white transition-colors transform -skew-x-12">
            <span className="block skew-x-12">{t('getQuote')}</span>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark absolute top-full left-0 w-full p-6 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-display uppercase tracking-widest hover:text-brand-green"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-3">{tLang('select')}</p>
              <div className="flex gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLocale(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${locale === lang.code
                      ? 'bg-brand-green text-brand-dark'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                  >
                    <span>{lang.flag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};