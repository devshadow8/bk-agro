/* eslint-disable react-hooks/purity */

'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const}
  }
};

// Hero Section with Parallax
const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.15),transparent_50%)]" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className={`w-${Math.floor(Math.random() * 20) + 10} h-${Math.floor(Math.random() * 20) + 10} ${
                i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg' : 'rounded-none rotate-45'
              } bg-gradient-to-br ${
                i % 4 === 0 ? 'from-teal-300/20 to-cyan-400/20' :
                i % 4 === 1 ? 'from-cyan-300/20 to-blue-400/20' :
                i % 4 === 2 ? 'from-blue-300/20 to-indigo-400/20' :
                'from-indigo-300/20 to-purple-400/20'
              } backdrop-blur-sm`}
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-2xl opacity-30"
            />
            <div className="relative bg-white/90 backdrop-blur-md rounded-full p-6 shadow-2xl">
              <span className="text-7xl">🧪</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Quality & Harvest
          <br />
          <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Management
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Ensuring excellence at the most critical stage of the crop cycle
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-600 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-teal-600 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-teal-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Overview Section
const OverviewSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100/50 to-cyan-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Section badge */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg text-sm">
              <span className="text-xl">📋</span>
              Overview
            </span>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="text-center space-y-6">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Quality & Harvest Management focuses on handling suran at the{' '}
              <span className="font-bold text-teal-700">most critical stage</span> of the crop cycle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This service ensures that produce is harvested, graded, and handled in a manner suitable 
              for both domestic consumption and export market expectations.
            </p>
          </motion.div>

          {/* Objective cards */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: "🎯", title: "Preserve Quality", color: "from-teal-500 to-cyan-500" },
              { icon: "📉", title: "Reduce Loss", color: "from-cyan-500 to-blue-500" },
              { icon: "✅", title: "Market Ready", color: "from-blue-500 to-indigo-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Service Coverage Component
const ServiceCard: React.FC<{
  number: string;
  icon: string;
  title: string;
  description: string;
  details: string;
  gradient: string;
  index: number;
}> = ({ number, icon, title, description, details, gradient, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl`}>
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? { 
            background: [
              'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1), transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1), transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1), transparent 50%)',
            ]
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Number badge */}
        <motion.div
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-6xl font-bold text-white/30">{number}</span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="text-6xl mb-6 inline-block"
            animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>

          {/* Description */}
          <p className="text-white/90 text-lg leading-relaxed mb-4">
            {description}
          </p>

          {/* Details */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/80 leading-relaxed italic">{details}</p>
            </div>
          </motion.div>

          {/* Hover indicator */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-white/80"
            animate={isHovered ? { x: 5 } : { x: 0 }}
          >
            <span className="text-sm font-medium">Learn more</span>
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              className="text-xl"
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
    </motion.div>
  );
};

// What This Service Covers Section
const ServiceCoverageSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "1",
      icon: "🌾",
      title: "Harvest-Stage Guidance",
      description: "Harvesting suran at the right stage is essential for quality and shelf life. We provide guidance on identifying appropriate harvest timing and safe harvesting practices to maintain product integrity.",
      details: "This helps ensure consistency in produce quality.",
      gradient: "from-teal-500 via-teal-600 to-cyan-600"
    },
    {
      number: "2",
      icon: "📊",
      title: "Grading & Sorting Support",
      description: "After harvest, suran is graded and sorted based on size, condition, and market suitability. We support structured grading practices that help separate produce for domestic supply and export requirements.",
      details: "This process improves acceptance across different market channels.",
      gradient: "from-cyan-500 via-cyan-600 to-blue-600"
    },
    {
      number: "3",
      icon: "✨",
      title: "Quality-Focused Handling Practices",
      description: "Proper handling after harvest plays a key role in maintaining freshness and reducing damage. We provide guidance on handling practices that support cleanliness, minimize physical stress, and preserve product quality until market supply.",
      details: "Professional handling ensures optimal product condition.",
      gradient: "from-blue-500 via-blue-600 to-indigo-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-teal-200/30 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg">
              <span className="text-xl">🧭</span>
              What This Service Covers
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Comprehensive <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Support</span>
          </motion.h2>
        </motion.div>

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Why It Matters Section
const WhyItMattersSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: "🌍",
      title: "Meets Market Standards",
      description: "Helps meet domestic and export market standards",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      icon: "📉",
      title: "Reduces Losses",
      description: "Reduces post-harvest losses",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      icon: "✓",
      title: "Improves Consistency",
      description: "Improves consistency and market acceptance",
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      icon: "💰",
      title: "Better Pricing",
      description: "Supports better pricing opportunities",
      gradient: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.5 + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold mb-6 shadow-xl">
              <span className="text-2xl">🎯</span>
              <span>Why It Matters</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Impact of Quality Management
            </h2>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {benefit.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Important Note Section
const ImportantNoteSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl border-l-8 border-amber-500 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex-shrink-0"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-xl">
                ⚠️
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Important Note</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This service provides operational guidance and quality handling support. Final quality 
                outcomes depend on execution, environmental conditions, and market requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.3 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold">
            Ready to Get Started?
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Let&apos;s Ensure Your Harvest
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Meets Excellence
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-xl text-white/80 mb-12"
        >
          Partner with us for professional quality and harvest management services
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="relative z-10 flex items-center gap-3"
                animate={isHovered ? { x: -5 } : { x: 0 }}
              >
                Contact Us
                <motion.span
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </motion.span>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: 0 } : { x: "-100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Main Page Component
export default function QualityHarvestManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OverviewSection />
      <ServiceCoverageSection />
      <WhyItMattersSection />
      <ImportantNoteSection />
      <CTASection />
    </div>
  );
}