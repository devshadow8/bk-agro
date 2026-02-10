"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout,
  Calendar,
  Package,
  Globe,
  CheckCircle2,
  ArrowRight,
  MapPin,
  AlertCircle,
  Target,
  BarChart3,
  Leaf,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  processSteps,
  investmentHighlights,
  marketRegions,
  modelBenefits,
} from "../utils/data";

export default function BusinessModelPage() {
  const { scrollYProgress } = useScroll();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen bg-white py-10">
      {/* Hero Banner with Background Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: yHero }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/images/suran-sec2-img2.jpeg"
            alt="Suran Farming"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity: opacityHero }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-full text-green-300 text-sm font-semibold tracking-wide">
                  BUSINESS MODEL
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Suran Farming
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Business Model
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
              >
                A structured agricultural model with domestic and international
                market access
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <div className="flex items-center justify-center gap-3 text-white/80">
                  <Leaf className="w-5 h-5" />
                  <span className="text-sm">
                    Structured • Transparent • Market-Driven
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block p-4 bg-green-100 rounded-2xl mb-6">
              <Target className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on Structure, Not Speculation
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our business model is built around structured suran (elephant foot
              yam) cultivation, supported by planned farming practices and
              aligned with verified domestic and export market demand. We focus
              on clarity, disciplined execution, and controlled exposure rather
              than speculative farming outcomes. Through contract suran farming,
              BK Agro Exporters enables predictable crop cycles, guided
              cultivation, and quality-led harvests, creating long-term value
              across the agricultural supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Model Overview with Image */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Model{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Overview
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The model follows a defined agricultural process that includes:
              </p>

              <div className="space-y-4">
                {[
                  { icon: Sprout, text: "Cultivation planning" },
                  { icon: BarChart3, text: "Crop growth and monitoring" },
                  { icon: Package, text: "Harvest and quality handling" },
                  { icon: Globe, text: "Domestic and export market supply" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="p-3 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 mt-8 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <Shield className="w-5 h-5 inline mr-2 text-blue-600" />
                Each stage is designed to reduce uncertainty through planning
                and process control.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business/businessimg2.jpeg"
                  alt="Structured Farming Process"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    Planned agricultural excellence
                  </p>
                </div>
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-600">Month Cycle</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How The Business Model Works - Interactive Timeline */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How The{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Business Model
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A step-by-step journey from participation to market outcome
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-emerald-300 to-green-200" />

            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: step.delay }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="relative"
                  >
                    <div
                      className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                    >
                      {/* Content */}
                      <div
                        className={`${isEven ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                      >
                        <motion.div
                          animate={{
                            scale: activeStep === index ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                          {/* Step number */}
                          <div
                            className={`inline-block mb-4 ${isEven ? "lg:float-right lg:ml-4" : "lg:float-left lg:mr-4"}`}
                          >
                            <span
                              className={`text-6xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20`}
                            >
                              {step.number}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-gray-900 mb-3 clear-both">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Arrow indicator */}
                          <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: activeStep === index ? 10 : 0 }}
                            className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                          >
                            <span>Step {index + 1}</span>
                            <ArrowRight
                              className="w-4 h-4"
                              style={{
                                background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Icon node */}
                      <div
                        className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isEven ? "" : ""}`}
                      >
                        <motion.div
                          animate={{
                            scale: activeStep === index ? 1.2 : 1,
                            rotate: activeStep === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} p-4 shadow-xl flex items-center justify-center relative z-10`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </motion.div>

                        {/* Pulse effect */}
                        {activeStep === index && (
                          <motion.div
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                          />
                        )}
                      </div>
                    </div>

                    {/* Mobile icon */}
                    <div className="lg:hidden flex items-center gap-4 mt-4 mb-2">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} p-3 shadow-lg`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-500">
                        Step {index + 1} of 6
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Supporting Image after step 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-20 max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business/harvestQuality.png"
                  alt="Quality Harvest Process"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Quality at Every Stage
                  </h3>
                  <p className="text-white/90">
                    From field to market, excellence is our standard
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Snapshot - Interactive Cards */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Investment{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Snapshot
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Clear numbers, transparent structure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl p-3 mb-4 shadow-lg">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{item.label}</p>
                      <p
                        className={`text-2xl font-bold ${item.color} text-white`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              <AlertCircle className="w-4 h-4 inline mr-1" />
              *Returns are market-linked and not guaranteed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Focus - Geographic Cards */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Market{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Focus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic presence in domestic and international markets
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {marketRegions.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${market.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`}
                />

                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{market.flag}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {market.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {market.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <MapPin className="w-4 h-4 text-green-600" />
                    {market.regions.map((region, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-r ${market.color} bg-opacity-10 rounded-full text-sm font-medium text-gray-700`}
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Model is Structured */}
      <section className="py-10 bg-gradient-to-b from-green-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why This Model is{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Structured
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {modelBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/farming-pattern.jpg"
            alt="Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Want to understand the business in detail or discuss
              participation?
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
