/* eslint-disable react-hooks/purity */
'use client';

import React, {useRef, useState, useMemo } from 'react';
import { motion, useInView, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { Link } from 'lucide-react';


// Types
interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  includes: string[];
  color: string;
  gradient: string;
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) }
  }
};

// Service Card Component
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`relative h-full rounded-3xl bg-gradient-to-br ${service.gradient} p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}>
        {/* Animated background blur */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${service.color}20, transparent 70%)`
          }}
          animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Number badge */}
        <motion.div
          className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl font-bold text-white opacity-10 group-hover:opacity-20 transition-all duration-500`}
          animate={isHovered ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {service.id}
        </motion.div>

        {/* Icon */}
        <motion.div
          className="relative z-10 mb-6 text-6xl"
          animate={isHovered ? { y: -8, scale: 1.1 } : { y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {service.icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Includes list */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-800 mb-3">Includes:</p>
            {service.includes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                  animate={isHovered ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                />
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover effect border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          animate={isHovered ? { 
            borderColor: service.color + '40',
            boxShadow: `0 0 40px ${service.color}30`
          } : { 
            borderColor: 'transparent',
            boxShadow: 'none'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

/// Hero section
const HeroSection: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // ✅ Use useState with lazy initializer instead of useMemo
  const [blobs] = useState(() => {
    return Array.from({ length: 20 }).map(() => {
      const size = Math.random() * 300 + 50;

      return {
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xMove: Math.random() * 100 - 50,
        yMove: Math.random() * 100 - 50,
        scale: Math.random() + 0.5,
        duration: Math.random() * 10 + 10,
      };
    });
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-emerald-300/20 to-green-400/20"
            style={{
              width: blob.size,
              height: blob.size,
              left: `${blob.left}%`,
              top: `${blob.top}%`,
            }}
            animate={{
              x: [0, blob.xMove, 0],
              y: [0, blob.yMove, 0],
              scale: [1, blob.scale, 1],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
              <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Our{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700">
          End-to-end support across suran cultivation, quality management, and market linkage.
        </p>
      </motion.div>

      </motion.div>
    </section>
  );
};


// Introduction Section
const IntroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold shadow-lg"
          >
            <span className="text-2xl">🌾</span>
            <span>Introduction</span>
          </motion.div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            At <span className="font-bold text-emerald-600">BK-Agro</span>, we provide structured agricultural services designed to support suran cultivation from planning to market supply. Our services focus on execution, quality control, and alignment with real market demand.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Markets Section
const MarketsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const markets = [
    {
      title: "Domestic Market",
      location: "India (primarily Maharashtra)",
      icon: "🇮🇳",
      gradient: "from-orange-400 to-green-400"
    },
    {
      title: "International Market",
      location: "UAE",
      icon: "🇦🇪",
      gradient: "from-red-400 to-green-400"
    }
  ];

  return (
    <section ref={ref} className="py-10 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Markets We <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Support</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-700"
          >
            Our market approach balances stability and export opportunity
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {markets.map((market, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {market.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{market.title}</h3>
                <p className="text-gray-700 text-lg">{market.location}</p>
              </div>

              <motion.div
                className={`absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${market.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
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

  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => {
      const size = Math.random() * 200 + 50;

      return {
        size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        xMove: Math.random() * 50 - 25,
        yMove: Math.random() * 50 - 25,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 8 + 5,
      };
    });
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 px-6 bg-gradient-to-br from-emerald-600 to-green-600 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              top: `${b.top}%`,
            }}
            animate={{
              x: [0, b.xMove, 0],
              y: [0, b.yMove, 0],
              scale: [1, b.scale, 1],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              repeatType: 'reverse',
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
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-white/90 mb-10"
        >
          Interested in learning more about our services or how we work?
        </motion.p>
       <a href = "/contact">

        <motion.button
          variants={scaleIn}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-12 py-5 bg-white text-emerald-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
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
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: 0 } : { x: "-100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
          </a>
      </motion.div>
    </section>
  );
};

// Main Services Page Component
const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "🌾",
      title: "Agricultural Planning & Setup",
      description: "We assist with structured planning for suran cultivation, including crop cycle alignment and field preparation guidance.",
      includes: [
        "Crop planning per acre",
        "Timeline and cycle planning",
        "Field preparation guidance"
      ],
      color: "#10b981",
      gradient: "from-emerald-100 to-green-100"
    },
    {
      id: 2,
      icon: "🌿",
      title: "Crop Management Support",
      description: "We provide guidance throughout the suran crop cycle to support healthy growth and consistent outcomes.",
      includes: [
        "Growth-stage monitoring guidance",
        "Best-practice cultivation support",
        "Issue identification and advisory"
      ],
      color: "#059669",
      gradient: "from-green-100 to-teal-100"
    },
    {
      id: 3,
      icon: "🧪",
      title: "Quality & Harvest Management",
      description: "Quality handling is a key focus to ensure produce meets domestic and export market expectations.",
      includes: [
        "Harvest-stage guidance",
        "Grading and sorting support",
        "Quality-focused handling practices"
      ],
      color: "#0d9488",
      gradient: "from-teal-100 to-cyan-100"
    },
    {
      id: 4,
      icon: "📦",
      title: "Post-Harvest Handling & Packing",
      description: "Proper post-harvest handling helps maintain product quality and market readiness.",
      includes: [
        "Safe handling practices",
        "Sorting and packing guidance",
        "Market-ready preparation"
      ],
      color: "#06b6d4",
      gradient: "from-cyan-100 to-sky-100"
    },
    {
      id: 5,
      icon: "🚚",
      title: "Market & Export Support",
      description: "We support access to both domestic and international markets through structured supply channels.",
      includes: [
        "Domestic market linkage (India)",
        "Export coordination support (UAE)",
        "Logistics and distribution guidance"
      ],
      color: "#0284c7",
      gradient: "from-sky-100 to-blue-100"
    },
    {
      id: 6,
      icon: "🤝",
      title: "Consulting & Business Support",
      description: "We provide clarity and guidance to help partners understand the agricultural business model and processes.",
      includes: [
        "Business model explanation",
        "Process transparency",
        "One-on-one consultation"
      ],
      color: "#2563eb",
      gradient: "from-blue-100 to-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      
      {/* Services Grid */}
      <section className="py-10 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Core Services</span>
            </h2>
            <p className="text-xl text-gray-700">Comprehensive support for every stage of cultivation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <MarketsSection />
      <CTASection />
    </div>
  );
};

export default ServicesPage;