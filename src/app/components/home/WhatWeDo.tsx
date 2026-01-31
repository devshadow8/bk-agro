"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sprout } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WhatWeDo = () => {
  const keyPoints = [
    'Planned suran cultivation with expert guidance',
    'Export-grade quality handling and logistics',
    'Market access across domestic and global channels'
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <div className="relative aspect-[4/3.9] bg-gradient-to-br from-green-100 to-emerald-100">
                <Image
                  src="/images/about1.png"
                  alt="Suran Cultivation Farm"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Sprout className="w-6 h-6" />
                <div>
                  <div className="text-2xl font-black">100%</div>
                  <div className="text-xs font-medium opacity-90">Export Quality</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                What We{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Do
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </motion.div>

            {/* One-Line Explanation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              We support suran cultivation and connect farm produce to national and international markets through a structured, export-focused model.
            </motion.p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-green-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;