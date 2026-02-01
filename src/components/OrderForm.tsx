'use client';

import React, { useState } from 'react';
import { Mail, Send, User, Phone, Package, MessageSquare, Anchor } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const OrderForm: React.FC = () => {
    const t = useTranslations('orderForm');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        port: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendToWhatsApp = () => {
        const { name, product, quantity, port, message } = formData;
        const whatsappNumber = '6289512691579'; // Company WhatsApp number
        const text = `${t('whatsapp.greeting')}

${t('whatsapp.name')}: ${name || '-'}
${t('whatsapp.product')}: ${product || '-'}
${t('whatsapp.quantity')}: ${quantity || '-'}
${t('whatsapp.port')}: ${port || '-'}
${t('whatsapp.message')}: ${message || '-'}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const sendToEmail = () => {
        const { name, email, phone, product, quantity, port, message } = formData;
        const emailTo = 'export.ptfishmodernsukses@gmail.com';
        const subject = t('email.subject');
        const body = `${t('email.greeting')}

${t('email.name')}: ${name || '-'}
${t('email.email')}: ${email || '-'}
${t('email.phone')}: ${phone || '-'}
${t('email.product')}: ${product || '-'}
${t('email.quantity')}: ${quantity || '-'}
${t('email.port')}: ${port || '-'}
${t('email.message')}: ${message || '-'}`;

        const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <section id="order" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-green font-display font-bold tracking-[0.2em] uppercase text-sm bg-white/10 px-3 py-1 inline-block mb-4 transform -skew-x-12">
                        <span className="block skew-x-12">{t('label')}</span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-brand-green/30">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Left Side - Form */}
                            <div className="p-8 lg:p-10">
                                <div className="space-y-5">

                                    {/* Name */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <User className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.name')}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.name')}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <Mail className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.email')}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.email')}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <Phone className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.phone')}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        />
                                    </div>

                                    {/* Product */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <Package className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.product')}
                                        </label>
                                        <select
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        >
                                            <option value="">{t('placeholders.product')}</option>
                                            <option value="Frozen Tuna">{t('products.tuna')}</option>
                                            <option value="Red Snapper">{t('products.snapper')}</option>
                                            <option value="Grouper">{t('products.grouper')}</option>
                                            <option value="Parrotfish">{t('products.parrotfish')}</option>
                                            <option value="Mixed Fresh Fish">{t('products.mixed')}</option>
                                            <option value="Deep Sea Fish">{t('products.deepsea')}</option>
                                            <option value="Other">{t('products.other')}</option>
                                        </select>
                                    </div>

                                    {/* Quantity */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            {t('fields.quantity')}
                                        </label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.quantity')}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        />
                                    </div>

                                    {/* Port of Destination */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <Anchor className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.port')}
                                        </label>
                                        <input
                                            type="text"
                                            name="port"
                                            value={formData.port}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.port')}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors text-gray-800"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-brand-dark font-display font-bold text-sm mb-2 uppercase tracking-wide">
                                            <MessageSquare className="inline w-4 h-4 mr-2 text-brand-green" />
                                            {t('fields.message')}
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={t('placeholders.message')}
                                            rows={4}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-brand-green focus:outline-none transition-colors resize-none text-gray-800"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Right Side - Actions */}
                            <div className="bg-gradient-to-br from-brand-dark to-gray-900 p-8 lg:p-10 text-white flex flex-col justify-center">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-display font-bold mb-4 uppercase">{t('contact.title')}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {t('contact.description')}
                                    </p>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                                            <span className="text-gray-300">+62 895-1269-1579</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                                            <span className="text-gray-300 text-xs break-all">export.ptfishmodernsukses@gmail.com</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={sendToWhatsApp}
                                        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 font-display font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 group"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        {t('buttons.whatsapp')}
                                    </button>

                                    <button
                                        onClick={sendToEmail}
                                        className="w-full bg-brand-green hover:bg-white text-brand-dark px-6 py-4 font-display font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 group border-2 border-brand-green"
                                    >
                                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        {t('buttons.email')}
                                    </button>

                                    <p className="text-xs text-gray-400 text-center mt-6">
                                        {t('contact.note')}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
