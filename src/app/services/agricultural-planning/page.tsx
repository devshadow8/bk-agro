/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
export default function AgriculturalPlanningPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a3a1a] via-[#2d5a2d] to-[#1a4a1a] overflow-hidden py-20">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#d4e8cf] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#5a7c3e] via-[#7a9d54] to-[#9fbd6f] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#7a9d54] opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#5a7c3e] opacity-10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#9fbd6f] opacity-10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#6b8e4d] opacity-8 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            {/* Decorative Top Element */}
            <div className="flex items-center justify-center mb-8 gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#7a9d54]" />
              <div className="text-6xl animate-bounce-slow">🌾</div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#7a9d54]" />
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-6 leading-none">
              <span className="block text-[#2d3e1f] font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                Agricultural
              </span>
              <span className="block text-[#5a7c3e] mt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                Planning & Setup
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-[#6b7c5c] max-w-3xl mx-auto leading-relaxed mb-12" style={{ fontFamily: 'Lora, serif' }}>
              The foundation of successful suran cultivation. Structured planning before plantation, ensuring excellence from seed to harvest.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href = "/contact">
              <button className="group relative px-8 py-4 bg-[#5a7c3e] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 font-semibold text-lg">Start Planning</span>
                <div className="absolute inset-0 bg-[#2d3e1f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              </Link>
              <Link href = "/">
              <button className="px-8 py-4 border-2 border-[#5a7c3e] text-[#5a7c3e] rounded-full font-semibold text-lg hover:bg-[#5a7c3e] hover:text-white transition-all duration-300 hover:scale-105">
                Learn More
              </button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#7a9d54] rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-[#7a9d54] rounded-full animate-scroll-down" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-[#c8e0c0] transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-16 bg-gradient-to-b from-[#5a7c3e] to-[#9fbd6f] rounded-full" />
              <h2 className="text-5xl font-bold text-[#2d3e1f]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Overview
              </h2>
            </div>
            <p className="text-xl text-[#6b7c5c] leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Agricultural Planning & Setup is the foundation of successful suran cultivation. This service focuses on structured planning before plantation, ensuring that land preparation, crop cycles, and timelines are aligned with practical farming requirements.
            </p>
            <p className="text-xl text-[#5a7c3e] font-semibold" style={{ fontFamily: 'Lora, serif' }}>
              Our goal at this stage is to reduce uncertainty by planning the cultivation process in advance.
            </p>
          </div>
        </div>
      </section>

      {/* What This Service Covers */}
      <section className="relative py-10 px-6 bg-gradient-to-b from-[#e8f5e3] to-[#d8ecd1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-[#3e790e] text-white rounded-full text-md font-semibold mb-4 animate-pulse-slow">
              CORE SERVICES
            </div>
            <h2 className="text-6xl font-bold text-[#2d3e1f] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              What This Service Covers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <ServiceCard
              number="1"
              title="Crop Planning per Acre"
              icon="🌱"
              description="We assist in planning suran cultivation on a per-acre basis, considering factors such as crop spacing, input requirements, and alignment with the suran growth cycle."
              benefit="This helps ensure that cultivation activities are well-organized and scalable."
              delay={0}
            />

            {/* Service Card 2 */}
            <ServiceCard
              number="2"
              title="Timeline & Crop Cycle Planning"
              icon="📅"
              description="Suran follows a defined 9–12 month crop cycle. We help structure this cycle by outlining key stages such as plantation, growth periods, and expected harvest windows."
              benefit="Clear timelines allow better coordination of farming and post-harvest activities."
              delay={200}
            />

            {/* Service Card 3 */}
            <ServiceCard
              number="3"
              title="Field Preparation Guidance"
              icon="🚜"
              description="Proper field preparation is essential for healthy crop development. We provide guidance on land readiness, soil preparation practices, and pre-plantation setup to support effective suran cultivation."
              benefit="This stage helps create suitable conditions before plantation begins."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#5a7c3e] to-[#7a9d54] rounded-3xl shadow-2xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="absolute inset-0 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-8 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-16 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2" />
            </div>

            <h2 className="text-5xl font-bold mb-12 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
              🎯 Why Agricultural Planning Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <BenefitItem text="Reduces operational uncertainty" />
              <BenefitItem text="Aligns farming activities with crop timelines" />
              <BenefitItem text="Supports better coordination across cultivation stages" />
              <BenefitItem text="Lays a structured foundation for the entire farming process" />
            </div>
          </div>
        </div>
      </section>  
      {/* CTA Section */}
      <section className="relative py-10 px-6 bg-[#2d3e1f] ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-[#c5d4b8] mb-10" style={{ fontFamily: 'Lora, serif' }}>
            To understand how this service fits into the overall business model, explore our full services or contact us for more details.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
            <button className="group relative px-10 py-5 bg-white text-[#2d3e1f] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 font-bold text-lg">Explore All Services</span>
              <div className="absolute inset-0 bg-[#9fbd6f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            </Link>
             <Link href= "/contact">
            <button className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#2d3e1f] transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ 
  number, 
  title, 
  icon, 
  description, 
  benefit, 
  delay 
}: { 
  number: string;
  title: string;
  icon: string;
  description: string;
  benefit: string;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-[#c8e0c0] hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Number Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#5a7c3e] to-[#7a9d54] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
        {number}
      </div>

      {/* Icon */}
      <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#2d3e1f] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6b7c5c] mb-4 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
        {description}
      </p>

      {/* Benefit */}
      <div className="mt-6 pt-6 border-t-2 border-[#d8ecd1]">
        <p className="text-[#5a7c3e] font-semibold italic" style={{ fontFamily: 'Lora, serif' }}>
          {benefit}
        </p>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a7c3e] to-[#9fbd6f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-b-2xl" />
    </div>
  );
}

// Benefit Item Component
function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-lg font-medium" style={{ fontFamily: 'Lora, serif' }}>
        {text}
      </span>
    </div>
  );
}