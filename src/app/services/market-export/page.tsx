/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Globe, Package, TrendingUp, MapPin, Ship, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from "next/image"
export default function MarketExportSupport() {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Domestic Market Linkage – India",
      description: "We support access to domestic vegetable markets in India, with a primary focus on Maharashtra. This includes guidance on supplying produce to wholesale markets and distribution channels where suran has consistent demand.",
      benefit: "Domestic market linkage helps ensure stable movement of produce within established trade networks."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Export Coordination Support – UAE",
      description: "We provide support for coordinating exports to international markets, currently focused on the United Arab Emirates (UAE). This includes guidance related to export readiness, coordination with import channels, and alignment with destination market requirements.",
      benefit: "Export support helps extend market reach beyond domestic supply."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics & Distribution Guidance",
      description: "Efficient logistics play a key role in timely market delivery. We provide guidance on transportation planning, handling during transit, and coordination across supply stages to support smooth distribution.",
      benefit: "This helps reduce delays and maintain product condition until delivery."
    }
  ];

  const benefits = [
    "Expands access to multiple markets",
    "Reduces dependency on a single sales channel",
    "Supports smoother distribution and delivery",
    "Aligns supply with real market demand"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
              <Truck className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Service 5</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent leading-tight">
              Market & Export Support
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100/80 max-w-3xl leading-relaxed mb-8">
              Connecting suran produce to reliable domestic and international markets through structured supply channels.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-300">Overview</h2>
              <p className="text-lg text-emerald-100/90 leading-relaxed mb-6">
                Market & Export Support focuses on connecting suran produce to reliable domestic and international markets through structured supply channels. This service ensures that produce cultivated through planned farming practices reaches appropriate buyers with proper coordination and logistical support.
              </p>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                The objective is to enable smooth market access while maintaining quality and compliance with market requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              What This Service Covers
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/50">
                      {service.icon}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-emerald-400">{index + 1}</span>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-emerald-200">{service.title}</h3>
                    <p className="text-emerald-100/80 mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-sm text-emerald-300 font-medium italic">{service.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-300">Why This Matters</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-emerald-100 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
<section className="relative py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-300">
        Market & Logistics in Action
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image 1: Export Operations */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/images/export-port1.png" 
              fill
              alt="Export shipping and international logistics operations"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-400/30 z-10">
              <Ship className="w-6 h-6 text-emerald-300" />
            </div>
          </div>
          <div className="p-6 relative z-10">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">Export Operations</h3>
            <p className="text-emerald-100/70">International market coordination and logistics for UAE markets</p>
          </div>
        </div>

        {/* Image 2: Domestic Distribution */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src="/images/market-img.png" 
              fill
              alt="Domestic vegetable market and distribution network"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30 z-10">
              <Package className="w-6 h-6 text-green-300" />
            </div>
          </div>
          <div className="p-6 relative z-10">
            <h3 className="text-xl font-bold text-green-300 mb-2">Distribution Network</h3>
            <p className="text-emerald-100/70">Domestic market supply chain management across Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Important Note Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/50">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-300">Important Note</h2>
                  <p className="text-amber-100/90 text-lg leading-relaxed">
                    Market access and outcomes depend on demand conditions, logistics execution, and regulatory requirements. This service provides coordination and guidance support, and results may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Ready to Expand Your Market Reach?
            </h2>
            <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
              To understand how market access fits into the overall suran farming business model, explore our Business Model page or contact us for further details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                View Business Model
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Wave Effect */}
      <div className="relative h-32">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="url(#gradient)" opacity="0.3">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z;
                      M0,0 C300,40 600,80 900,80 C1050,80 1150,60 1200,40 L1200,120 L0,120 Z;
                      M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}