"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Leaf, 
  FlaskConical, 
  Ship, 
  Handshake, 
  Package,
  ArrowRight 
} from 'lucide-react';
import Link from "next/link"

const ServicesGrid = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsPerView, setCardsPerView] = React.useState(3);

  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(3); // Desktop
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const services = [
    {
      icon: Sprout,
      title: 'Agricultural Planning',
      description: 'Structured crop planning with guidance on land preparation, plantation methods, and farming best practices.',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-50',
      image: '/images/service1.png'
    },
    {
      icon: Leaf,
      title: 'Crop Management',
      description: 'Ongoing support during the crop cycle, including growth monitoring and quality-focused practices.',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-emerald-50',
      image: '/images/service2.png'
    },
    {
      icon: FlaskConical,
      title: 'Quality & Harvest Support',
      description: 'Guidance on harvesting, grading, and handling to meet domestic and export quality standards.',
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50',
      image: '/images/service3.png'
    },
    {
      icon: Ship,
      title: 'Market & Export Support',
      description: 'Access to national buyers and international export channels through an established distribution network.',
      color: 'from-green-700 to-emerald-700',
      bgColor: 'bg-green-50',
      image: '/images/service4.png'
    },
    {
      icon: Handshake,
      title: 'Consulting & Advisory',
      description: 'Expert consultation to help partners understand the farming process, timelines, and market flow.',
      color: 'from-emerald-700 to-green-700',
      bgColor: 'bg-emerald-50',
      image: '/images/service5.png'
    },
    {
      icon: Package,
      title: 'Post-Harvest Assistance',
      description: 'Support for storage, packaging, and logistics to ensure produce reaches markets in good condition.',
      color: 'from-green-600 to-lime-600',
      bgColor: 'bg-lime-50',
      image: '/images/service6.png'
    }
  ];

  const maxIndex = Math.max(0, services.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCardWidth = () => {
    if (cardsPerView === 1) return '100%';
    if (cardsPerView === 2) return 'calc(50% - 12px)';
    return 'calc(33.333% - 16px)';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support throughout your agricultural investment journey
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative px-2 sm:px-8 md:px-12">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-green-600"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 items-center justify-center group hover:bg-green-600"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ 
                x: cardsPerView === 1 
                  ? `-${currentIndex * 100}%`
                  : cardsPerView === 2
                  ? `-${currentIndex * 50}%`
                  : `-${currentIndex * (100 / 3)}%`
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    style={{ minWidth: getCardWidth() }}
                    className="group"
                    whileHover={{ y: -8 }}
                  >
                    {/* Card */}
                    <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        ></div>
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        
                        {/* Icon on Image */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.bgColor} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-6">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            <Link href= "/services">

            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            
            ))}
            </Link>
          </div>
            
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;