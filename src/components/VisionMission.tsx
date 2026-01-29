'use client';

import React from 'react';
import { Target, Compass } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const VisionMission: React.FC = () => {
    const tVision = useTranslations('vision');
    const tMission = useTranslations('mission');

    const missionItems = [
        tMission('items.0'),
        tMission('items.1'),
        tMission('items.2'),
        tMission('items.3'),
    ];

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden border-b border-gray-800">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-800/50 skew-x-12 transform translate-x-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-green/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Vision Card */}
                    <div className="flex-1 group">
                        <div className="relative bg-gray-900 p-10 border-l-4 border-brand-green h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target size={120} className="text-white" />
                            </div>

                            <div className="bg-brand-green w-14 h-14 flex items-center justify-center mb-8 transform -skew-x-12">
                                <Target className="text-brand-dark w-7 h-7 transform skew-x-12" />
                            </div>

                            <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase tracking-wider">
                                {tVision('title')}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                {tVision('content')} <span className="text-white font-medium">{tVision('highlight')}</span>.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="flex-1 group">
                        <div className="relative bg-brand-green p-10 border-l-4 border-white h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Compass size={120} className="text-brand-dark" />
                            </div>

                            <div className="bg-brand-dark w-14 h-14 flex items-center justify-center mb-8 transform -skew-x-12">
                                <Compass className="text-white w-7 h-7 transform skew-x-12" />
                            </div>

                            <h3 className="text-3xl font-display font-bold text-brand-dark mb-6 uppercase tracking-wider">
                                {tMission('title')}
                            </h3>
                            <ul className="space-y-4">
                                {missionItems.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 items-start text-brand-dark/80 font-medium">
                                        <span className="font-display font-bold text-brand-dark text-lg opacity-50">0{idx + 1}.</span>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};