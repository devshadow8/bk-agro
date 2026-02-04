'use client';

import React, { useRef, useState, useMemo} from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Parallax Image Component
const ParallaxImage = ({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 via-emerald-100 to-lime-100 flex items-center justify-center">
            <span className="text-6xl">📦</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Hero Section with Image Background
const HeroSection = ({ bannerImageUrl }: { bannerImageUrl?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);

  // Generate static particle positions using useMemo
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: (i * 37 + 13) % 100,
      top: (i * 47 + 23) % 100,
      duration: 3 + (i % 5) * 0.5,
      delay: (i % 10) * 0.2
    }));
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0"
      >
        {bannerImageUrl ? (
          <>
            <Image
              src={bannerImageUrl}
              alt="Post-harvest handling"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-900/70 to-green-800/80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-lime-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]" />
          </div>
        )}
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
          >
            <span className="text-8xl">📦</span>
          </motion.div>
        </motion.div>

        {/* Title with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Post-Harvest
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-yellow-300 via-green-300 to-emerald-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Handling & Packing
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light"
        >
          Maintaining quality, freshness, and market readiness after harvest
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-green-700 rounded-full font-bold text-lg shadow-2xl hover:bg-green-50 transition-colors inline-flex items-center gap-3"
          >
            Explore Services
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-sm text-white/80 font-medium uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Overview Section
const OverviewSection = ({ imageUrl }: { imageUrl?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={fadeInScale} className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage
                  src={imageUrl}
                  alt="Post-harvest overview"
                  className="aspect-[4/3] w-full"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-5xl mb-2">🎯</div>
                  <div className="text-sm font-semibold">Quality</div>
                  <div className="text-xs opacity-90">Focused</div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80px" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"
              />
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Post-Harvest Handling & Packing focuses on maintaining the{' '}
              <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                quality, freshness, and market readiness
              </span>{' '}
              of suran after harvest.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              This stage is critical to reduce losses, preserve product condition, and ensure 
              smooth movement into domestic and export supply chains.
            </p>

            {/* Objective Card */}
            <motion.div 
              whileHover={{ x: 10 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Objective
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Handle produce carefully after harvest so it reaches the market in acceptable condition.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "100%", label: "Quality Focus" },
                { value: "24/7", label: "Monitoring" },
                { value: "Zero", label: "Wastage Goal" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Service Card with Image
const ServiceCard = ({
  number,
  icon,
  title,
  description,
  details,
  gradient,
  imageUrl,
  index,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
  details: string;
  gradient: string;
  imageUrl?: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image Section */}
        <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            {/* Number Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.2 }}
              className="absolute -top-8 -left-8 z-20 w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 shadow-2xl flex items-center justify-center border-4 border-white"
            >
              <span className="text-4xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {number}
              </span>
            </motion.div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ParallaxImage
                src={imageUrl}
                alt={title}
                className="aspect-[4/3] w-full"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white"
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <h4 className="text-xl font-bold">{title}</h4>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-4 -z-10 bg-gradient-to-br ${gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <motion.div
            whileHover={{ x: isEven ? 10 : -10 }}
            className="space-y-6"
          >
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block text-7xl mb-4"
            >
              {icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>

            {/* Expandable Details */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic leading-relaxed">
                  {details}
                </p>
              </div>
            </motion.div>

            {/* Learn More Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${gradient} shadow-lg hover:shadow-xl transition-shadow`}
            >
              {isExpanded ? "Show Less" : "Learn More"}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: "✓", text: "Quality Assured" },
                { icon: "✓", text: "Expert Guidance" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-green-500 text-xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Service Coverage Section
const ServiceCoverageSection = ({ 
  image1Url,
  image2Url,
  image3Url,
}: { 
  image1Url?: string;
  image2Url?: string;
  image3Url?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      icon: "🤲",
      title: "Safe Handling Practices",
      description: "After harvesting, suran requires careful handling to prevent physical damage and quality deterioration. We provide guidance on safe handling practices to minimize impact, bruising, and contamination during movement and storage.",
      details: "This helps preserve freshness and overall product condition.",
      gradient: "from-green-500 via-green-600 to-emerald-600",
      imageUrl: "/images/safe-handling.png"
    },
    {
      number: "02",
      icon: "📊",
      title: "Sorting & Packing Guidance",
      description: "Sorting and packing are essential for preparing suran for different market requirements. We support structured sorting and packing practices to help organize produce based on size, condition, and intended market use.",
      details: "Proper packing improves handling efficiency and product presentation.",
      gradient: "from-emerald-500 via-emerald-600 to-teal-600",
      imageUrl: image2Url
    },
    {
      number: "03",
      icon: "✅",
      title: "Market-Ready Preparation",
      description: "Before supply, suran must be prepared according to market expectations. We provide guidance on preparing produce for domestic distribution and export-oriented supply, ensuring it is ready for transportation and sale.",
      details: "This step helps align produce with buyer and distributor requirements.",
      gradient: "from-lime-500 via-lime-600 to-green-600",
      imageUrl: image3Url
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold shadow-2xl text-lg">
              <span className="text-2xl">🧭</span>
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Handling Support
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expert guidance at every stage of post-harvest handling
          </motion.p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} index={idx} />
        ))}
      </div>
    </section>
  );
};

// Why It Matters Section
const WhyItMattersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Generate static particle positions
  const particles = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      left: (i * 41 + 17) % 100,
      top: (i * 53 + 29) % 100,
      duration: 2 + (i % 4) * 0.5,
      delay: (i % 8) * 0.25
    }));
  }, []);

  const benefits = [
    {
      icon: "📉",
      title: "Reduces Losses",
      description: "Minimizes post-harvest losses through proper handling",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "✨",
      title: "Maintains Quality",
      description: "Preserves product quality and freshness throughout",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "✓",
      title: "Market Acceptance",
      description: "Improves market acceptance and buyer satisfaction",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: "🚚",
      title: "Smoother Logistics",
      description: "Supports efficient logistics and distribution",
      color: "from-lime-500 to-green-500"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold border border-white/20 shadow-2xl">
                <span className="text-3xl">🎯</span>
                Why It Matters
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Impact of
              <br />
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                Proper Handling
              </span>
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 overflow-hidden">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-4xl mb-6 shadow-xl`}
                  >
                    {benefit.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Important Note Section
const ImportantNoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Generate static particle positions
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: (i * 43 + 11) % 100,
      top: (i * 59 + 19) % 100,
      duration: 2 + (i % 3) * 0.5,
      delay: (i % 6) * 0.33
    }));
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-12 shadow-2xl border-l-8 border-red-500 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-red-200 rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
              {/* Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-5xl shadow-2xl">
                  ⚠️
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Important Note
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  This service provides handling and packing guidance. Final outcomes depend on execution, 
                  storage conditions, logistics, and market requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  // Generate static positions for floating orbs
  const floatingOrbs = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      width: 100 + (i * 23) % 200,
      height: 100 + (i * 31) % 200,
      left: (i * 37 + 13) % 100,
      top: (i * 47 + 23) % 100,
      duration: 5 + (i % 5)
    }));
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {floatingOrbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-sm"
            style={{
              width: orb.width,
              height: orb.height,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-block px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold text-lg border border-white/20">
            Next Step
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Ready to Optimize Your
          <br />
          <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
            Post-Harvest Process?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Discover how post-harvest handling connects with market and export supply
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/services/market-export-support">
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-12 py-6 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Market & Export Support
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: 0 } : { x: "-100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              className="px-12 py-6 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Main Page Component
export default function PostHarvestHandlingPackingPage({
  bannerImageUrl,
  overviewImageUrl,
  image1Url,
  image2Url,
  image3Url,
}: {
  bannerImageUrl?: string;
  overviewImageUrl?: string;
  image1Url?: string;
  image2Url?: string;
  image3Url?: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection bannerImageUrl={bannerImageUrl} />
      <OverviewSection imageUrl={overviewImageUrl} />
      <ServiceCoverageSection 
        image1Url={image1Url}
        image2Url={image2Url}
        image3Url={image3Url}
      />
      <WhyItMattersSection />
      <ImportantNoteSection />
      <CTASection />
    </div>
  );
}