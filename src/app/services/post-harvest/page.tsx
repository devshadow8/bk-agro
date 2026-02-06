'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PostHarvestHandlingPackingPage() {
  
  // All data and configuration
  const services = [
    {
      number: "01",
      icon: "🤲",
      title: "Safe Handling Practices",
      description: "After harvesting, suran requires careful handling to prevent physical damage and quality deterioration. We provide guidance on safe handling practices to minimize impact, bruising, and contamination during movement and storage.",
      imageUrl: "/images/post-page-img1.jpeg"
    },
    {
      number: "02",
      icon: "📊",
      title: "Sorting & Packing Guidance",
      description: "Sorting and packing are essential for preparing suran for different market requirements. We support structured sorting and packing practices to help organize produce based on size, condition, and intended market use.",
      imageUrl: "/images/post-page-img2.jpeg"
    },
    {
      number: "03",
      icon: "✅",
      title: "Market-Ready Preparation",
      description: "Before supply, suran must be prepared according to market expectations. We provide guidance on preparing produce for domestic distribution and export-oriented supply, ensuring it is ready for transportation and sale.",
      imageUrl: "/images/post-page-img3.jpeg"
    }
  ];

  const benefits = [
    { icon: "📉", title: "Reduces Losses", description: "Minimizes post-harvest losses through proper handling" },
    { icon: "✨", title: "Maintains Quality", description: "Preserves product quality and freshness throughout" },
    { icon: "✓", title: "Market Acceptance", description: "Improves market acceptance and buyer satisfaction" },
    { icon: "🚚", title: "Smoother Logistics", description: "Supports efficient logistics and distribution" }
  ];

  const stats = [
    { value: "100%", label: "Quality Focus" },
    { value: "24/7", label: "Monitoring" },
    { value: "Zero", label: "Wastage Goal" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image src="/images/banner.jpg" alt="Post-harvest handling" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-900/70 to-green-800/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-8xl">📦</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Post-Harvest
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 bg-clip-text text-transparent">
              Handling & Packing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Maintaining quality, freshness, and market readiness after harvest
          </p>

          <Link href="/services">
            <button className="mt-12 px-12 py-5 bg-white text-green-700 rounded-full font-bold text-lg shadow-2xl hover:bg-green-50 transition-colors">
              Explore Services →
            </button>
          </Link>
        </div>
      </section>

      {/* ============================================ */}
      {/* OVERVIEW SECTION */}
      {/* ============================================ */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/overview.jpg" alt="Post-harvest overview" width={800} height={600} className="w-full object-cover" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">Quality Focused</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Overview</h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Post-Harvest Handling & Packing focuses on maintaining the{' '}
                <span className="font-bold text-green-600">quality, freshness, and market readiness</span>{' '}
                of suran after harvest.
              </p>

              <p className="text-lg text-gray-600">
                This stage is critical to reduce losses, preserve product condition, and ensure smooth movement into domestic and export supply chains.
              </p>

              {/* Objective Card */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Objective</h3>
                    <p className="text-gray-700">Handle produce carefully after harvest so it reaches the market in acceptable condition.</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SECTION */}
      {/* ============================================ */}
      <section className="py-10 px-6 bg-gray-50">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-bold mb-4">
            <span className="text-xl">🧭</span> Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-green-600">Handling Support</span>
          </h2>
          <p className="text-xl text-gray-600">Expert guidance at every stage of post-harvest handling</p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:grid-flow-dense' : ''}`}>
                
                {/* Image */}
                <div className={`relative ${isReverse ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 z-10 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-green-100">
                      <span className="text-3xl font-bold text-green-600">{service.number}</span>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-xl">
                      <Image src={service.imageUrl} alt={service.title} width={800} height={600} className="w-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="text-6xl">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
                    
                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="font-medium text-gray-700">Quality Assured</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className="font-medium text-gray-700">Expert Guidance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================ */}
      {/* BENEFITS SECTION */}
      {/* ============================================ */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold mb-4">
              <span className="text-xl">🎯</span> Why It Matters
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Impact of <span className="text-green-300">Proper Handling</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center text-3xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-10 px-6 bg-gradient-to-br from-gray-900 to-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-6 py-3 bg-white/10 text-white rounded-full font-bold mb-6">
            Next Step
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Optimize Your
            <br />
            <span className="text-green-300">Post-Harvest Process?</span>
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Discover how post-harvest handling connects with market and export supply
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/market-export">
              <button className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-xl hover:bg-green-50 transition-colors">
                Market & Export Support →
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-10 py-4 bg-white/10 text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}