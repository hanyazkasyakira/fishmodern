'use client';

import { useTranslations } from 'next-intl';

export const CallToAction: React.FC = () => {
    const t = useTranslations();

    return (
        <section className="py-20 bg-brand-green relative overflow-hidden">
            <div className="diagonal-clip-reverse absolute top-0 left-0 w-full h-full bg-brand-dark opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
                    {t('cta.title')}
                </h2>
                <p className="text-brand-dark/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                    {t('cta.description')}
                </p>
                <a
                    href="mailto:export.ptfishmodernsukses@gmail.com"
                    className="bg-brand-dark text-white px-10 py-4 font-display font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all shadow-xl transform hover:-translate-y-1 inline-block"
                >
                    {t('cta.button')}
                </a>
            </div>
        </section>
    );
};
