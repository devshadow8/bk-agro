"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, FileCheck, Globe2, FlaskConical, Handshake, TrendingUp  } from 'lucide-react';
import {reasons} from "../../utils/data"
  
const WhyChooseUs = () => {
  

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)'
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-80 h-80 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)'
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(132,204,22,0.3) 0%, transparent 70%)'
            }}
            animate={{
              x: [0, 25, 0],
              y: [0, -35, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Subtle Organic Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm0 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z' fill='%2322c55e' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl">
                <Sprout className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured, market-focused approach to suran cultivation and distribution
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: reason.delay,
                  ease: "easeOut"
                }}
                className="group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  {/* Animated Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.gradient} opacity-10`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="inline-block mb-6"
                    >
                      <div className="relative">
                        {/* Pulsing Effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${reason.gradient} blur-md`}
                        />
                        <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: reason.delay + 0.2 }}
                      className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left`}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-green-700 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-700">
              Trusted by farmers and investors for transparent, market-focused agricultural practices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;