"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, TrendingUp } from "lucide-react";
import { highlights } from "../../utils/data";

const Highlights = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Sprout className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            HighLights{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              BK-Agro
            </span>
          </h2>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Transparent, structured, and growth-focused agricultural investment
            opportunities
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: highlight.delay }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                      backgroundImage: `url('${highlight.image}')`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Content */}
                  <div className="relative p-8 flex flex-col items-center text-gray-900 text-center h-full">
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className={`w-20 h-20 ${highlight.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className={`w-10 h-10 ${highlight.iconColor}`} />
                    </motion.div>

                    {/* Value */}
                    <h3
                      className={`text-3xl font-black  text-gray-900 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}
                    >
                      {highlight.value}
                    </h3>
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      {highlight.unit}
                    </p>

                    {/* English Title */}
                    <h4 className="text-xl font-bold text-gray-900">
                      {highlight.title}
                    </h4>

                    {/* English Description */}
                    <p className="text-sm font-bold text-gray-900 leading-relaxed mt-2">
                      {highlight.description}
                    </p>

                    {/* Marathi Title */}
                    <h5 className="text-base font-semibold text-gray-900 mt-4">
                      {highlight.titleMr}
                    </h5>

                    {/* Marathi Description */}
                    <p className="text-sm font-bold text-gray-900 leading-relaxed mt-1 flex-grow">
                      {highlight.descriptionMr}
                    </p>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
                  </div>
                </div>

                {/* Badge */}
                {index === 2 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    High ROI
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
