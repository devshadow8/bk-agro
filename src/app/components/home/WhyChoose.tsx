"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import { reasons } from "../../utils/data";

const WhyChooseUs = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 mb-6 shadow-lg shadow-green-500/30">
            <Sprout className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A structured, market-focused approach to suran cultivation and distribution
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: reason.delay }}
                className="h-full"
              >
                <div
                  className="relative cursor-pointer h-full min-h-[300px] group"
                  onClick={() => toggleFlip(index)}
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 ease-out"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* FRONT CARD - English */}
                    <div
                      className="absolute inset-0 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Icon Container */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {reason.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {reason.description}
                      </p>

                      {/* Flip Indicator */}
                      <div className="absolute bottom-6 left-8 right-8">
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-green-600">
                            Tap to view in Marathi
                          </p>
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BACK CARD - Marathi */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-lg"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Icon Container */}
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/30">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {reason.titleMr}
                      </h3>

                      <p className="text-sm text-white/90 leading-relaxed mb-6">
                        {reason.descriptionMr}
                      </p>

                      {/* Flip Indicator */}
                      <div className="absolute bottom-6 left-8 right-8">
                        <div className="flex items-center justify-between pt-4 border-t border-white/20">
                          <p className="text-xs font-semibold text-white">
                            Tap to go back
                          </p>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;