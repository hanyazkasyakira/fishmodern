'use client';

import React, { useState } from 'react';
import { ShieldCheck, Award, FileCheck, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Certificates: React.FC = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const t = useTranslations('certificates');

  return (
    <section id="quality" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-brand-green font-display font-bold tracking-[0.2em] uppercase text-sm bg-brand-dark px-3 py-1 inline-block mb-4 transform -skew-x-12">
            <span className="block skew-x-12">{t('label')}</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark uppercase">
            {t('title')}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Certificate Document and Description Side by Side */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* Left: Certificate Preview - Smaller */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-brand-green/20 sticky top-6">
                <div className="bg-brand-dark p-3 text-center">
                  <h3 className="text-base font-display font-bold text-white mb-0.5">
                    {t('officialCert')}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    PT Fish Modern Success
                  </p>
                </div>

                <div className="p-3">
                  <div
                    className="relative cursor-pointer group overflow-hidden rounded"
                    onClick={() => setShowCertificate(true)}
                  >
                    <img
                      src="/img/surat-sertifikat-41260123350106173 (1)_page-0001.jpg"
                      alt="Official Certificate"
                      className="w-full h-auto border-2 border-gray-200 group-hover:border-brand-green transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <FileCheck className="w-8 h-8 text-brand-green mx-auto mb-1" />
                        <p className="text-white font-display font-bold text-xs">{t('clickEnlarge')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <button
                      onClick={() => setShowCertificate(true)}
                      className="w-full bg-brand-green text-brand-dark px-4 py-2 font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-all border-2 border-brand-green"
                    >
                      {t('viewFull')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Description - Larger */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-brand-dark mb-4">
                    {t('qualityTitle')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t('qualityDesc')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-lg shrink-0">
                      <ShieldCheck className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-brand-dark mb-1">
                        {t('govCert.title')}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t('govCert.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-lg shrink-0">
                      <Award className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-brand-dark mb-1">
                        {t('exportReady.title')}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t('exportReady.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-green/10 p-3 rounded-lg shrink-0">
                      <FileCheck className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-brand-dark mb-1">
                        {t('transparent.title')}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t('transparent.desc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-500 italic">
                    {t('additionalNote')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-green transition-colors z-10"
            onClick={() => setShowCertificate(false)}
          >
            <X size={40} />
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] overflow-auto">
            <img
              src="/img/surat-sertifikat-41260123350106173 (1)_page-0001.jpg"
              alt="Official Certificate Full View"
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};