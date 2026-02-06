/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CropManagementPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
      {/* Animated Background Pattern - Agricultural Grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated Growing Plants Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f2a0f] to-transparent opacity-60" />
        
        {/* Floating Leaf Particles */}
        <div className="absolute top-20 left-[10%] w-16 h-16 opacity-20 animate-float-leaf">🌿</div>
        <div className="absolute top-40 right-[15%] w-12 h-12 opacity-15 animate-float-leaf-delayed">🍃</div>
        <div className="absolute top-60 left-[70%] w-14 h-14 opacity-20 animate-float-leaf-slow">🌱</div>
        <div className="absolute bottom-40 right-[25%] w-16 h-16 opacity-15 animate-float-leaf">🌾</div>
        
        {/* Light Rays Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#7fb069]/20 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-[#4a7c59]/20 to-transparent blur-3xl animate-pulse-slow-delayed" />
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#2d5a2d] z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#7fb069] via-[#9dc88d] to-[#a7d7c5] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            
            {/* Decorative Top Element */}
            <div className="flex items-center justify-center mb-8 gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#7fb069] to-transparent" />
              <div className="text-6xl animate-grow-pulse">🌿</div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-[#7fb069] to-transparent" />
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-6 leading-none">
              <span className="block text-[#a7d7c5] drop-shadow-2xl" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                Crop Management
              </span>
              <span className="block text-[#7fb069] mt-2 drop-shadow-lg" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, letterSpacing: '0.05em' }}>
                SUPPORT
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-center text-[#c5e1a5] max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md" style={{ fontFamily: 'Merriweather, serif', fontWeight: 300 }}>
              Guiding suran cultivation from plantation through harvest. Expert support for healthy crop development at every growth stage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
              <button className="group relative px-10 py-5 bg-[#7fb069] text-[#1a3a1a] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(127,176,105,0.5)]">
                <span className="relative z-10 font-bold text-lg tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  GET STARTED
                </span>
                <div className="absolute inset-0 bg-[#9dc88d] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              </Link>
              <Link href= "/">
              <button className="px-10 py-5 border-2 border-[#7fb069] text-[#7fb069] rounded-lg font-bold text-lg tracking-wide hover:bg-[#7fb069]/20 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                LEARN MORE
              </button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#a7d7c5] text-sm tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}></span>
              <div className="w-6 h-10 border-2 border-[#7fb069] rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-1.5 bg-[#7fb069] rounded-full animate-scroll-down" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-12 px-6 bg-gradient-to-b from-transparent to-[#0f2a0f]/50">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-12 md:p-16 border border-[#7fb069]/30 transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-20 bg-gradient-to-b from-[#7fb069] via-[#9dc88d] to-[#a7d7c5] rounded-full shadow-lg" />
              <h2 className="text-5xl md:text-6xl font-bold text-[#a7d7c5]" style={{ fontFamily: 'Crimson Text, serif' }}>
                Overview
              </h2>
            </div>
            <p className="text-xl text-[#c5e1a5] leading-relaxed mb-6" style={{ fontFamily: 'Merriweather, serif', fontWeight: 300 }}>
              Crop Management Support focuses on guiding suran cultivation after plantation and throughout the crop cycle. This service is designed to support healthy crop development by providing structured guidance at each growth stage.
            </p>
            <p className="text-xl text-[#7fb069] font-semibold" style={{ fontFamily: 'Merriweather, serif' }}>
              The objective is to maintain consistency in farming practices while responding to crop needs during the cultivation period.
            </p>
          </div>
        </div>
      </section>

      {/* What This Service Covers */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className=" inline-block px-6 py-2 text-white rounded-full text-md font-semibold mb-4 drop-shadow-lg animate-pulse-slow "  style={{ fontFamily: 'Crimson Text, serif' }}>
              COMPREHENSIVE SUPPORT
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-[#a7d7c5] mb-4 drop-shadow-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
              What This Service Covers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <ServiceCard
              number="01"
              title="Growth-Stage Monitoring Guidance"
              icon="📊"
              description="Suran cultivation involves multiple growth stages over a 9–12 month period. We provide guidance on observing crop progress at different stages, helping identify whether growth is proceeding as expected."
              benefit="This allows timely awareness of crop development patterns."
              delay={0}
            />

            {/* Service Card 2 */}
            <ServiceCard
              number="02"
              title="Best-Practice Cultivation Support"
              icon="🌾"
              description="We share recommended cultivation practices based on practical farming experience. These practices aim to support crop health, optimize growth conditions, and maintain field hygiene throughout the crop cycle."
              benefit="The focus remains on disciplined execution rather than reactive farming."
              delay={200}
            />

            {/* Service Card 3 */}
            <ServiceCard
              number="03"
              title="Issue Identification & Advisory"
              icon="🔍"
              description="During the crop cycle, various challenges such as crop stress, growth irregularities, or environmental factors may arise. We provide advisory support to help identify such issues early and suggest appropriate corrective actions."
              benefit="This helps minimize disruption during cultivation."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative backdrop-blur-lg bg-gradient-to-br from-[#7fb069]/30 to-[#4a7c59]/30 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-12 md:p-16 border border-[#7fb069]/40 overflow-hidden">
            
            {/* Decorative Growing Vines */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 50 0 Q 75 25, 50 50 T 50 100" stroke="currentColor" fill="none" strokeWidth="2" className="text-[#a7d7c5]" />
                <circle cx="50" cy="25" r="3" fill="currentColor" className="text-[#a7d7c5]" />
                <circle cx="50" cy="75" r="3" fill="currentColor" className="text-[#a7d7c5]" />
              </svg>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-12 relative z-10 text-[#a7d7c5]" style={{ fontFamily: 'Crimson Text, serif' }}>
              🎯 Why Crop Management Support Matters
            </h2>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <BenefitItem text="Encourages healthy crop development" />
              <BenefitItem text="Helps maintain consistency across cultivation stages" />
              <BenefitItem text="Supports early identification of potential issues" />
              <BenefitItem text="Aligns field practices with planned crop outcomes" />
            </div>
          </div>
        </div>
      </section> 
      {/* CTA Section */}
      <section className="relative py-12 px-6 bg-gradient-to-b from-transparent to-[#0f2a0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#a7d7c5] mb-6 drop-shadow-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
            Ready to Optimize Your Crop Cycle?
          </h2>
          <p className="text-xl text-[#c5e1a5] mb-10" style={{ fontFamily: 'Merriweather, serif', fontWeight: 300 }}>
            To understand how Crop Management Support fits into the overall suran farming model, explore our complete services or contact us for further discussion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href= "/services">
            <button className="group relative px-12 py-6 bg-[#7fb069] text-[#1a3a1a] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(127,176,105,0.6)]">
              <span className="relative z-10 font-bold text-lg tracking-wide" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                EXPLORE ALL SERVICES
              </span>
              <div className="absolute inset-0 bg-[#9dc88d] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            </Link>
            <Link href= "/contact">
            <button className="px-12 py-6 border-2 border-[#7fb069] text-[#7fb069] rounded-lg font-bold text-lg tracking-wide hover:bg-[#7fb069]/20 transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              CONTACT US
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
      className={`group relative backdrop-blur-md bg-white/5 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#7fb069]/30 hover:border-[#7fb069]/60 hover:shadow-[0_8px_32px_rgba(127,176,105,0.2)] transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Number Badge */}
      <div className="absolute -top-5 -left-5 w-16 h-16 bg-gradient-to-br from-[#7fb069] to-[#4a7c59] rounded-xl flex items-center justify-center text-[#1a3a1a] font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
        {number}
      </div>

      {/* Icon */}
      <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#a7d7c5] mb-4 group-hover:text-[#7fb069] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.02em' }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#c5e1a5] mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif', fontWeight: 300 }}>
        {description}
      </p>

      {/* Benefit */}
      <div className="mt-6 pt-6 border-t border-[#7fb069]/30">
        <p className="text-[#7fb069] font-semibold italic" style={{ fontFamily: 'Merriweather, serif' }}>
          {benefit}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7fb069]/0 to-[#7fb069]/0 group-hover:from-[#7fb069]/10 group-hover:to-[#4a7c59]/10 rounded-2xl transition-all duration-500 pointer-events-none" />
    </div>
  );
}

// Benefit Item Component
function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 w-8 h-8 rounded-lg bg-[#7fb069]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#7fb069] group-hover:scale-110 transition-all duration-300 shadow-lg">
        <svg className="w-5 h-5 text-[#a7d7c5]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-lg font-medium text-[#c5e1a5]" style={{ fontFamily: 'Merriweather, serif', fontWeight: 400 }}>
        {text}
      </span>
    </div>
  );
}