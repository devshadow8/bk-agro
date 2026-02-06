"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Leaf, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  productImages,
  approachPoints,
  whyItWorks,
  businessStep,
} from "../utils/data";

const AboutPage = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-15">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-banner.png"
            alt="BK-Agro Suran Farming"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Strong dark overlay (MAIN FIX) */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Icon */}
            <div className="mb-6">
              <Leaf className="w-14 h-14 text-green-400" />
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Structured <span className="text-green-400">Suran Farming</span>
              <br />
              with Market Access
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              BK-Agro focuses on planned elephant foot yam cultivation,
              quality-controlled farming, and reliable domestic and
              international distribution.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 2. ABOUT INTRO */}
      <section className="relative py-10 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-sm font-semibold tracking-widest text-green-600 uppercase">
              About BK-Agro
            </h2>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Structured Suran Farming with Market Focus
            </h3>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                BK-Agro is an agriculture-focused business engaged in structured
                suran (elephant foot yam) cultivation and organized market
                distribution. Our farming model is built on planned cultivation,
                yield discipline, and demand-driven execution.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We work closely with farming operations to ensure crop quality,
                consistency, and scalability while aligning production with real
                domestic and international market requirements.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                Our focus remains on long-term sustainability, transparent
                processes, and value creation across the agricultural supply
                chain.
              </p>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/suran-about.png"
                  alt="Suran harvest and cultivation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/25 to-transparent" />
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-[180px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/suran-farming.png"
                    alt="Suran crop field"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                <div className="relative h-[180px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/suran-about-img2.jpeg"
                    alt="Elephant foot yam p roduce"
                    fill
                    className="object-cover"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     loading="lazy"

                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 3. WHAT WE DO */}
      <section className="relative py-10 bg-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We work with a structured farming model where suran cultivation is
              planned, guided, and aligned with market requirements. Our role is
              to support the process across cultivation planning, quality
              handling, and market linkage.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
              This approach helps reduce uncertainty through planning,
              transparency, and disciplined execution.
            </p>
          </motion.div>

          {/* Product Images - 3 in a row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {productImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Title on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-xl flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="relative py-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-400 to-cyan-600 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="inline-block"
            >
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                Our{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Approach
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 rounded-full origin-left"
                  />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto"
            >
              Execution and consistency over speculation
            </motion.p>
          </motion.div>

          {/* Flowing Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {approachPoints.map((point, index) => {
              const Icon = point.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="relative group"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  {/* Card content */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-green-200">
                    {/* Icon with animated gradient background */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 inline-block"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} p-3 shadow-md group-hover:shadow-lg transition-shadow`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </motion.div>

                    {/* Check icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute top-6 right-6"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors" />
                    </motion.div>

                    {/* Text content */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      {point.title}
                    </h3>

                    {/* Animated underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                      className={`h-0.5 bg-gradient-to-r ${point.color} mt-3 rounded-full origin-left group-hover:h-1 transition-all duration-300`}
                    />

                    {/* Flowing particle effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                      initial={{ opacity: 0 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${point.color} rounded-full opacity-0 group-hover:opacity-60`}
                          animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, -100],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                          style={{
                            left: `${20 + i * 30}%`,
                            bottom: 0,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md">
              <p className="text-gray-700 font-medium text-lg">
                Built on a foundation of{" "}
                <span className="text-green-700 font-bold">reliability</span>{" "}
                and{" "}
                <span className="text-emerald-700 font-bold">transparency</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 5. OUR BUSINESS MODEL */}
      <section className="relative py-10 bg-gradient-to-b from-white via-green-50/50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Business{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Model
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">How the Model Works</p>
          </motion.div>

          {/* Flippable Business Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {businessStep.map((step, index) => {
              const Icon = step.icon;
              const isFlipped = flippedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative cursor-pointer h-full min-h-[280px]"
                  onClick={() => toggleFlip(index)}
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="relative h-full transition-transform duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* FRONT CARD - English */}
                    <div
                      className="absolute inset-0 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Flip Indicator */}
                      <div className="absolute bottom-6 left-8 right-8">
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-green-600">
                            Tap for Marathi
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

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-b-2xl"></div>
                    </div>

                    {/* BACK CARD - Marathi */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-lg"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg border border-white/30">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg border border-white/30">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {step.titleMr}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/90 leading-relaxed mb-6">
                        {step.descriptionMr}
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

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 rounded-b-2xl"></div>
                    </div>
                  </div>

                  {/* Arrow Connector (except last in row) */}
                  {index % 3 !== 2 && index !== businessStep.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 text-green-400 z-20">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Supply Chain Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-white">
              <Image
                src="/images/supplyChain.png"
                alt="BK-Agro Supply Chain"
                fill
                className="object-full bg-gray-50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. MARKET FOCUS */}
      <section className="relative py-10 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Market{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Focus
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Domestic Market */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <span className="text-3xl">🇮🇳</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Domestic Market
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Primary focus on Maharashtra, where suran is widely consumed
                  and traded through wholesale markets in{" "}
                  <span className="font-semibold text-green-600">
                    Mumbai, Pune, Nashik, and Nagpur
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* International Market */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    <span className="text-3xl">🇦🇪</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    International Market
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Export supply to the{" "}
                  <span className="font-semibold text-emerald-600">UAE</span>{" "}
                  supports demand from Indian and Asian communities through
                  established import and distribution channels.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Optional Export Image - Image 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <Image
                src="/images/export-port1.png"
                alt="International Export"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-black">
                  Global Distribution Network
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. WHY OUR MODEL WORKS */}
      <section className="relative py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Our Model{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {whyItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-gray-800 font-semibold">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. DISCLAIMER
      <section className="relative py-16 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-l-4 border-green-600 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Important Notice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Agriculture involves natural and market-related risks. Returns
                  are not guaranteed and may vary based on farming conditions
                  and market factors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* 9. FINAL CTA */}
      <section className="relative py-10 bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-black text-gray-900 mb-8">
              Want to understand our complete business model?
            </h3>
            <Link href="/business">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                View Business Model
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
