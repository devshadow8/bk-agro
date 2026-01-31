"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {  MapPin,  Globe2,  TrendingUp,  Users,  Package, Store, Truck, Building2} from 'lucide-react';
import { markets } from '../../utils/data';

const MarketCoverage = () => {
  const [activeMarket, setActiveMarket] = React.useState<'india' | 'uae'>('india');

  
  const currentMarket = markets[activeMarket];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-green-50/30 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Globe Pattern */}
        <div className="absolute top-10 right-10 w-96 h-96 opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <Globe2 className="w-full h-full text-green-600" />
          </motion.div>
        </div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-30 animate-pulse"></div>
              <Globe2 className="w-16 h-16 text-green-600 relative z-10" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Market{' '}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Coverage
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused domestic reach with growing international export access
          </p>
        </motion.div>

        {/* Market Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <button
              onClick={() => setActiveMarket('india')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeMarket === 'india'
                  ? 'bg-gradient-to-r from-orange-600 to-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl">🇮🇳</span>
              <span className="text-lg">India</span>
            </button>
            <button
              onClick={() => setActiveMarket('uae')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeMarket === 'uae'
                  ? 'bg-gradient-to-r from-red-600 to-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl">🇦🇪</span>
              <span className="text-lg">UAE</span>
            </button>
          </div>
        </motion.div>

        {/* Market Content */}
        <motion.div
          key={activeMarket}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Market Info */}
          <div className="space-y-8">
            {/* Market Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentMarket.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {currentMarket.flag}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {currentMarket.title}
                  </p>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    {currentMarket.country}
                  </h3>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentMarket.color} text-white text-sm font-bold`}>
                    <MapPin className="w-4 h-4" />
                    {currentMarket.focus}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {currentMarket.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {currentMarket.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentMarket.color}`}></div>
                    <span className="text-sm font-medium text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentMarket.color} flex items-center justify-center mx-auto mb-3`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-black text-gray-900 mb-1">
                  {activeMarket === 'india' ? 'Growing' : 'Expanding'}
                </p>
                <p className="text-sm text-gray-600 font-medium">Market Demand</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentMarket.color} flex items-center justify-center mx-auto mb-3`}>
                  <Package className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-black text-gray-900 mb-1">
                  {activeMarket === 'india' ? '4+' : '2+'}
                </p>
                <p className="text-sm text-gray-600 font-medium">Key Regions</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Regions Grid */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              {activeMarket === 'india' ? 'Major Supply Regions' : 'Key Demand Drivers'}
            </motion.h4>

            <div className="grid gap-4">
              {currentMarket.regions.map((region, index) => {
                const Icon = region.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${currentMarket.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentMarket.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-lg font-bold text-gray-900 mb-1">
                          {region.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {region.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-black mb-3">
                Dual-Market Strategy
              </h3>
              <p className="text-white/90 text-lg">
                Strong domestic foundation with strategic international expansion for optimized returns
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <p className="text-4xl font-black">🇮🇳</p>
                <p className="text-sm font-bold mt-2">Primary</p>
              </div>
              <div className="text-3xl">+</div>
              <div className="text-center px-6 py-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <p className="text-4xl font-black">🇦🇪</p>
                <p className="text-sm font-bold mt-2">Export</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketCoverage;