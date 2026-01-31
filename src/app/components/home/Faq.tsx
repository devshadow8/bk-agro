"use client"

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, TrendingUp, Calendar, Shield, MapPin, Users, LifeBuoy, AlertTriangle, Mail } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  icon: React.ElementType;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What is the minimum investment required?",
      answer: "The standard investment starts at ₹2.5 lakhs per acre, covering cultivation planning, farming guidance, and harvest-stage support.",
      icon: TrendingUp
    },
    {
      question: "What is the crop duration for suran?",
      answer: "The suran crop typically follows a 9–12 month cycle, from plantation to harvest, depending on farming and climatic conditions.",
      icon: Calendar
    },
    {
      question: "Are returns guaranteed?",
      answer: "No. Returns are market-linked and agriculture-based. Yield, pricing, and market demand can vary, and returns are not guaranteed.",
      icon: Shield
    },
    {
      question: "Where is the produce sold?",
      answer: (
        <div>
          <p className="mb-2">The produce is supplied to:</p>
          <ul className="space-y-1 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Domestic markets in India, primarily Maharashtra</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>International export markets, with a current focus on the UAE</span>
            </li>
          </ul>
        </div>
      ),
      icon: MapPin
    },
    {
      question: "Who manages the farming operations?",
      answer: "Cultivation is carried out with planned agricultural practices, and support is provided throughout the crop cycle. Farming activities may involve local teams and partner farms.",
      icon: Users
    },
    {
      question: "Is land ownership required?",
      answer: "Land ownership requirements depend on the specific business arrangement. Details are discussed during the consultation stage.",
      icon: HelpCircle
    },
    {
      question: "What kind of support is provided?",
      answer: (
        <div>
          <p className="mb-2">Support includes:</p>
          <ul className="space-y-1 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Cultivation planning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Crop monitoring guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Harvest and quality handling support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">•</span>
              <span>Market and export linkage assistance</span>
            </li>
          </ul>
        </div>
      ),
      icon: LifeBuoy
    },
    {
      question: "What are the risks involved?",
      answer: (
        <div>
          <p className="mb-2">Agriculture involves risks such as:</p>
          <ul className="space-y-1 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>Weather conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>Crop health issues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-1">•</span>
              <span>Market price fluctuations</span>
            </li>
          </ul>
          <p className="mt-2">These factors can affect yield and returns.</p>
        </div>
      ),
      icon: AlertTriangle
    },
    {
      question: "Is this suitable for first-time investors?",
      answer: "Yes, the model is structured to provide clarity and guidance, but participants should understand that agricultural activities involve inherent risks.",
      icon: HelpCircle
    },
    {
      question: "How can I get more details?",
      answer: (
        <div>
          You can contact us directly or visit the{' '}
          <Link href="/business" className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors">
            Business page
          </Link>
          {' '}for detailed information about the model, process, and terms.
        </div>
      ),
      icon: Mail
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-green-900/10 to-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-green-900/90 to-gray-900/95" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(5,150,105,0.08),transparent_50%)]" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-2xl mb-6 border border-green-500/20">
            <HelpCircle className="w-8 h-8 text-green-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Common questions about our suran farming business model and operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0 rounded-2xl blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-green-500/30 shadow-lg shadow-green-500/10' : 'border-white/10 hover:border-white/20'}`}>
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center gap-4 group/button"
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30' : 'bg-white/5 group-hover/button:bg-white/10'}`}>
                      <Icon className={`w-6 h-6 transition-all duration-500 ${isOpen ? 'text-white scale-110' : 'text-green-400 group-hover/button:scale-110'}`} />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-200 group-hover/button:text-white'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Chevron Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-green-500/20 rotate-180' : 'bg-white/5 group-hover/button:bg-white/10'}`}>
                      <ChevronDown className={`w-5 h-5 transition-all duration-500 ${isOpen ? 'text-green-400' : 'text-gray-400 group-hover/button:text-gray-300'}`} />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-16 pr-4">
                          {/* Decorative Line */}
                          <div className="h-px bg-gradient-to-r from-green-500/50 via-green-500/20 to-transparent mb-4" />
                          
                          {/* Answer Text */}
                          <div className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-xl rounded-2xl border border-green-500/20">
            <div className="flex-1 text-left">
              <p className="text-gray-300 font-medium">Still have questions?</p>
              <p className="text-gray-400 text-sm">We&apos;re here to help you understand our business model better.</p>
            </div>
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 flex items-center gap-2"
            >
              Contact Us
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;