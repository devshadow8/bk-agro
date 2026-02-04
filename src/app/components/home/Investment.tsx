"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Globe2, AlertCircle } from 'lucide-react';
import {investmentData} from "../../utils/data"
import Link from "next/link"
const InvestmentSnapshot = () => {
 
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-green-50/40 to-emerald-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-200/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Investment{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Snapshot
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            A quick overview of our structured suran farming investment model
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Investment Details */}
          <div className="space-y-6">
            {investmentData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                    item.highlight 
                      ? 'border-green-600 ring-2 ring-green-600/20' 
                      : 'border-green-500/30 hover:border-green-600'
                  }`}>
                    
                    {/* Highlight Badge */}
                    {item.highlight && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          High ROI
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-2">
                          <p className={`text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.value}
                          </p>
                          {item.unit && (
                            <span className="text-sm font-semibold text-gray-600">
                              {item.unit}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex gap-3"
            >
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-amber-900 font-medium mb-1">
                  *Returns are market-linked and may vary
                </p>
                <p className="text-xs text-amber-800/80">
                  Agricultural investments are subject to farming and market-related risks.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Decorative Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Image */}
              <div 
                className="relative aspect-[4/5] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage: `url('/images/invest-img.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                
                {/* Bottom Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-black mb-2">
                      Farm to Market Excellence
                    </h3>
                    <p className="text-sm text-white/90 font-medium">
                      Quality suran cultivation with proven agricultural practices
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-green-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Success Rate</p>
                  <p className="text-2xl font-black text-green-700">95%+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Export Ready</p>
                  <p className="text-2xl font-black text-emerald-700">100%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >   
        <Link href= "/">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
          >
            <span>Download Investment Brochure</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500">
            Get detailed information about our investment process
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSnapshot;