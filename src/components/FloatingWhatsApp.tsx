'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export const FloatingWhatsApp: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('floatingWhatsApp');

    const openWhatsApp = () => {
        const phone = '6289512691579';
        const message = encodeURIComponent(t('defaultMessage'));
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 animate-pulse"
                aria-label="WhatsApp Contact"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Popup Card */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-40 bg-white rounded-lg shadow-2xl p-6 w-80 border-2 border-brand-green animate-fadeIn">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#25D366] p-2 rounded-full">
                            <MessageCircle className="text-white" size={24} />
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-brand-dark">
                                {t('title')}
                            </h4>
                            <p className="text-sm text-gray-600">{t('subtitle')}</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{t('description')}</p>
                    <button
                        onClick={openWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded font-display font-bold uppercase tracking-wide transition-colors"
                    >
                        {t('button')}
                    </button>
                </div>
            )}
        </>
    );
};
