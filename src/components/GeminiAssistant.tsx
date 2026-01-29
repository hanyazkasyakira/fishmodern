'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateSeafoodResponse } from '@/services/geminiService';
import { ChatMessage } from '@/types';
import { useTranslations } from 'next-intl';

export const GeminiAssistant: React.FC = () => {
  const t = useTranslations('assistant');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: t('greeting') }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => m.text);
    const responseText = await generateSeafoodResponse(userMsg, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-brand-green text-brand-dark p-4 rounded-full shadow-2xl hover:bg-white transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] md:w-[400px] h-[500px] bg-brand-dark border border-gray-700 shadow-2xl z-50 flex flex-col font-sans rounded-xl overflow-hidden">

          {/* Header */}
          <div className="bg-brand-green p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-brand-dark w-5 h-5" />
              <span className="font-display font-bold text-brand-dark uppercase tracking-wider">{t('title')}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-dark hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 text-sm ${msg.role === 'user'
                      ? 'bg-brand-green text-brand-dark rounded-l-lg rounded-tr-lg'
                      : 'bg-gray-800 text-gray-200 rounded-r-lg rounded-tl-lg border border-gray-700'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-3 rounded-r-lg rounded-tl-lg border border-gray-700 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-green" />
                  <span className="text-xs text-gray-400">{t('processing')}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-brand-dark border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('placeholder')}
                className="flex-1 bg-gray-800 text-white text-sm px-4 py-3 outline-none border border-transparent focus:border-brand-green transition-colors rounded-md"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-green text-brand-dark p-3 hover:bg-white transition-colors disabled:opacity-50 rounded-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};