'use client';

import React from 'react';
import { Globe, Package, Users, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Stats: React.FC = () => {
    const t = useTranslations('stats');

    const stats = [
        {
            icon: Globe,
            value: t('exportCountries.value'),
            label: t('exportCountries.label'),
            suffix: '+'
        },
        {
            icon: Package,
            value: t('monthlyVolume.value'),
            label: t('monthlyVolume.label'),
            suffix: '+'
        },
        {
            icon: TrendingUp,
            value: t('productVarieties.value'),
            label: t('productVarieties.label'),
            suffix: '+'
        },
        {
            icon: Users,
            value: t('certifiedSuppliers.value'),
            label: t('certifiedSuppliers.label'),
            suffix: '+'
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:bg-brand-green/10 transition-all duration-300 group-hover:scale-110 border border-gray-200 group-hover:border-brand-green/30">
                                <stat.icon className="w-8 h-8 text-brand-dark group-hover:text-brand-green transition-colors" />
                            </div>

                            {/* Value */}
                            <div className="mb-2">
                                <span className="text-4xl md:text-5xl font-display font-bold text-brand-dark">
                                    {stat.value}
                                </span>
                                <span className="text-3xl md:text-4xl font-display font-bold text-brand-green">
                                    {stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-gray-600 font-medium uppercase tracking-wider text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
