"use client"
import React from 'react';
import { TrendingUp, Sprout, Eye, CheckCircle, Globe } from 'lucide-react';

const WorkflowSection = () => {
  const steps = [
    {
      number: 1,
      title: "Invest / Partner",
      description: "Start with a planned investment per acre.",
      icon: TrendingUp,
    },
    {
      number: 2,
      title: "Cultivation Planning",
      description: "We guide suran cultivation using best practices.",
      icon: Sprout,
    },
    {
      number: 3,
      title: "Crop Growth & Monitoring",
      description: "Regular monitoring during the 9–12 month cycle.",
      icon: Eye,
    },
    {
      number: 4,
      title: "Harvest & Quality Check",
      description: "Produce is harvested and graded for market readiness.",
      icon: CheckCircle,
    },
    {
      number: 5,
      title: "Market & Export",
      description: "Supply to domestic buyers and export markets.",
      icon: Globe,
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden relative min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative circles */}
        <div className="absolute top-32 left-16 w-16 h-16 bg-yellow-400 rounded-full opacity-70 animate-float"></div>
        <div className="absolute top-48 left-64 w-10 h-10 bg-green-400 rounded-full opacity-60 animate-float-delayed-1"></div>
        <div className="absolute top-56 left-96 w-8 h-8 bg-emerald-300 rounded-full opacity-50 animate-float-delayed-2"></div>
        <div className="absolute top-24 right-80 w-12 h-12 bg-green-400 rounded-full opacity-60 animate-float-delayed-3"></div>
        <div className="absolute top-20 right-32 w-14 h-14 bg-teal-300 rounded-full opacity-70 animate-float-delayed-4"></div>
        <div className="absolute top-44 right-64 w-9 h-9 bg-green-400 rounded-full opacity-50 animate-float-delayed-5"></div>
        
        {/* Leaf patterns */}
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            How Our Model Works
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mt-4">
            From seed to success - Your agricultural investment journey
          </p>
        </div>

        {/* Desktop Workflow */}
        <div className="hidden lg:block relative">
          {/* SVG Wave Connections Between Steps */}
          <svg 
            className="absolute top-0 left-0 w-full h-64 pointer-events-none"
            style={{ top: '80px' }}
            viewBox="0 0 1400 250"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="greenWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main Wave Path connecting all steps */}
            <path
              d="M 140 120 Q 210 80, 280 120 Q 350 160, 420 120 Q 490 80, 560 120 Q 630 160, 700 120 Q 770 80, 840 120 Q 910 160, 980 120 Q 1050 80, 1120 120 Q 1190 160, 1260 120"
              stroke="url(#greenWaveGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="wave-line"
              filter="url(#glow)"
            />

            {/* Circle markers at each step position */}
            <circle cx="140" cy="120" r="8" fill="#10b981" opacity="0.9" className="pulse-circle" />
            <circle cx="420" cy="120" r="8" fill="#14b8a6" opacity="0.9" className="pulse-circle" style={{ animationDelay: '0.5s' }} />
            <circle cx="700" cy="120" r="8" fill="#22c55e" opacity="0.9" className="pulse-circle" style={{ animationDelay: '1s' }} />
            <circle cx="980" cy="120" r="8" fill="#14b8a6" opacity="0.9" className="pulse-circle" style={{ animationDelay: '1.5s' }} />
            <circle cx="1260" cy="120" r="8" fill="#10b981" opacity="0.9" className="pulse-circle" style={{ animationDelay: '2s' }} />

            {/* Animated dots flowing through the wave */}
            <circle r="6" fill="#fbbf24" className="flow-dot">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M 140 120 Q 210 80, 280 120 Q 350 160, 420 120 Q 490 80, 560 120 Q 630 160, 700 120 Q 770 80, 840 120 Q 910 160, 980 120 Q 1050 80, 1120 120 Q 1190 160, 1260 120"
              />
            </circle>
            <circle r="6" fill="#34d399" className="flow-dot">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                begin="1.5s"
                path="M 140 120 Q 210 80, 280 120 Q 350 160, 420 120 Q 490 80, 560 120 Q 630 160, 700 120 Q 770 80, 840 120 Q 910 160, 980 120 Q 1050 80, 1120 120 Q 1190 160, 1260 120"
              />
            </circle>
            <circle r="6" fill="#2dd4bf" className="flow-dot">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                begin="3s"
                path="M 140 120 Q 210 80, 280 120 Q 350 160, 420 120 Q 490 80, 560 120 Q 630 160, 700 120 Q 770 80, 840 120 Q 910 160, 980 120 Q 1050 80, 1120 120 Q 1190 160, 1260 120"
              />
            </circle>
          </svg>

          {/* Steps Row */}
          <div className="flex justify-between items-end gap-6 relative pt-56">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === 0; // Highlight first step
              
              return (
                <div
                  key={step.number}
                  className="flex-1 max-w-[260px]"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Card Container */}
                  <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 border-2 
                    ${isActive ? 'border-yellow-400 shadow-yellow-400/30' : 'border-green-400/40'} 
                    hover:border-green-300 transition-all duration-500 group
                    hover:bg-white/15 hover:-translate-y-3 min-h-[300px] flex flex-col
                    shadow-2xl hover:shadow-green-500/40`}
                  >
                    {/* Number Circle - Positioned above card */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className={`absolute -inset-4 rounded-full blur-2xl opacity-70 animate-pulse-slow
                          ${isActive ? 'bg-yellow-400' : 'bg-green-400'}`}
                        ></div>
                        
                        {/* Rotating gradient ring */}
                        <div className={`absolute -inset-2 rounded-full opacity-40 animate-spin-slow`}
                          style={{
                            background: isActive 
                              ? 'conic-gradient(from 0deg, transparent, #fbbf24, transparent)'
                              : 'conic-gradient(from 0deg, transparent, #10b981, transparent)'
                          }}
                        ></div>
                        
                        {/* Number circle */}
                        <div className={`relative w-28 h-28 rounded-full flex items-center justify-center
                          ${isActive 
                            ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500' 
                            : 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500'}
                          shadow-2xl border-4 border-white/30 group-hover:scale-110 transition-all duration-500
                          group-hover:rotate-12`}
                        >
                          <span className="text-4xl font-bold text-white drop-shadow-lg">{step.number}</span>
                        </div>

                        {/* Mini pulse effect */}
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-30
                          ${isActive ? 'bg-yellow-400' : 'bg-green-400'}`}
                        ></div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4 mt-10">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center
                        ${isActive ? 'bg-yellow-400/20 border-2 border-yellow-400/40' : 'bg-green-400/20 border-2 border-green-400/40'}
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <Icon className={`w-10 h-10 ${isActive ? 'text-yellow-300' : 'text-green-300'}`} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-green-100 text-sm leading-relaxed flex-1">
                        {step.description}
                      </p>
                      
                      {/* Bottom accent bar */}
                      <div className={`mt-4 h-1 w-0 group-hover:w-full mx-auto rounded-full transition-all duration-500
                        ${isActive ? 'bg-yellow-400' : 'bg-green-400'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="lg:hidden space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === 0;
            
            return (
              <div 
                key={step.number}
                className="relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Wave connector for mobile */}
                {index > 0 && (
                  <div className="absolute -top-8 left-14 w-0.5 h-8">
                    <svg className="w-full h-full" viewBox="0 0 2 32" preserveAspectRatio="none">
                      <path
                        d="M 1 0 Q 1 8, 1 16 T 1 32"
                        stroke="url(#greenWaveGradient)"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                <div className="flex items-start gap-6">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative">
                    <div className={`absolute -inset-3 rounded-full blur-xl opacity-70 animate-pulse-slow
                      ${isActive ? 'bg-yellow-400' : 'bg-green-400'}`}
                    ></div>
                    
                    <div className={`relative w-28 h-28 rounded-full flex items-center justify-center
                      ${isActive 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                        : 'bg-gradient-to-br from-green-500 to-emerald-600'}
                      shadow-2xl border-4 border-white/30`}
                    >
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2
                      ${isActive ? 'border-yellow-400' : 'border-green-400/40'}
                      shadow-xl`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center
                          ${isActive ? 'bg-yellow-400/20 border border-yellow-400/40' : 'bg-green-400/20 border border-green-400/40'}`}
                        >
                          <Icon className={`w-7 h-7 ${isActive ? 'text-yellow-300' : 'text-green-300'}`} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-green-100 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <button 
            className="group relative bg-gradient-to-r from-yellow-400 via-green-500 to-emerald-500 
              hover:from-yellow-300 hover:via-green-400 hover:to-emerald-400
              text-white font-bold px-14 py-6 rounded-full shadow-2xl 
              transform hover:scale-105 transition-all duration-300
              border-2 border-white/20 text-lg"
            style={{ animation: 'fadeInUp 1s ease-out 1.5s both' }}
          >
            <span className="relative z-10 drop-shadow-lg">Start Your Journey Today</span>
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      {/* Animations */}
     
    </section>
  );
};

export default WorkflowSection;