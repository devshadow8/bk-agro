/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Globe,
  Ship,
  Package,
  CheckCircle2,
  ArrowRight,
  Truck,
  FileCheck,
  MapPin,
  TrendingUp,
  AlertCircle,
  Anchor,
} from "lucide-react";
import Link from "next/link";
export default function ExportOperations() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const exportSteps = [
    {
      number: "1",
      title: "Quality Selection",
      description:
        "Only produce meeting defined quality standards is prepared for export supply.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      number: "2",
      title: "Grading & Packing",
      description:
        "Produce is graded and packed in suitable formats to support transit and handling.",
      icon: <Package className="w-6 h-6" />,
    },
    {
      number: "3",
      title: "Documentation & Coordination",
      description:
        "Export coordination includes alignment with required documentation and compliance processes.",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      number: "4",
      title: "Logistics & Shipment",
      description:
        "Produce is dispatched through planned logistics channels to destination markets.",
      icon: <Ship className="w-6 h-6" />,
    },
  ];

  const whyItWorks = [
    "Focus on quality and compliance",
    "Structured coordination process",
    "Alignment with real market demand",
    "Balanced domestic and export supply",
  ];

  const uaeMarketPoints = [
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Strong Indian and Asian community demand",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Preference for Indian-origin vegetables",
    },
    {
      icon: <Anchor className="w-5 h-5" />,
      text: "Well-established import and distribution networks",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative">
        <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
          {/* Hero Image */}
          <Image
            src="/images/exportImg.png"
            fill
            alt="International export operations - cargo ships at port"
            className="
        object-cover
        brightness-110
        contrast-105
        saturate-110
      "
            priority
          />

          {/* Lighter Overlay (KEY FIX) */}
          <div
            className="absolute inset-0 bg-gradient-to-b 
      from-slate-900/50 
      via-emerald-900/30 
      to-slate-900/60"
          />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
              <div
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">
                    Global Export Solutions
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 
            bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 
            bg-clip-text text-transparent leading-tight"
                >
                  International Export Operations
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-2xl text-emerald-100/90 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Supplying Indian-grown suran to international markets with a
                  focus on quality and compliance.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/services">
                    <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105">
                      Explore Export Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-300">
                Introduction
              </h2>
              <p className="text-lg text-emerald-100/90 leading-relaxed mb-6">
                BK-Agro supports international export of suran (elephant foot
                yam) through structured coordination and quality-focused
                preparation. Our export approach is designed to align
                agricultural produce with international market requirements,
                logistics standards, and destination demand.
              </p>
              <p className="text-lg text-emerald-100/90 leading-relaxed">
                We currently focus on select international markets where Indian
                vegetables have consistent demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT-READY PRODUCE ================= */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* ================= TEXT CONTENT ================= */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <Package className="w-6 h-6 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                    Export-Ready Produce
                  </h2>
                </div>

                <p className="text-lg text-emerald-100/90 leading-relaxed mb-6">
                  Export markets require consistency in quality, handling, and
                  preparation. We support export readiness by focusing on proper
                  harvesting, grading, and handling practices before dispatch.
                </p>

                <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 border border-emerald-500/20 rounded-2xl p-6">
                  <p className="text-emerald-300 italic font-medium">
                    This ensures produce is prepared according to destination
                    market expectations.
                  </p>
                </div>
              </div>

              {/* ================= IMAGE ================= */}
              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                  {/* Image container */}
                  <div className="aspect-square relative">
                    <Image
                      src="/images/produceImg.png"
                      fill
                      alt="Export-ready suran produce packaged for international markets"
                      className="
                  object-cover
                  transition-transform duration-500
                  hover:scale-105
                  contrast-110
                  brightness-105
                "
                      quality={100}
                      priority
                    />
                  </div>

                  {/* Bottom info strip (light, NOT dark overlay) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent p-6">
                    <h3 className="text-xl font-bold text-emerald-200 mb-1">
                      Premium Quality Suran
                    </h3>
                    <p className="text-emerald-100/80 text-sm">
                      Carefully graded and packaged for export
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Export Process Overview */}
      {/* ================= EXPORT PROCESS OVERVIEW ================= */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Export Process Overview
              </h2>
              <p className="text-emerald-100/70 text-lg">
                Step-by-Step Export Flow
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {exportSteps.map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-emerald-500/40">
                        {step.number}
                      </div>

                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-emerald-200 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-emerald-100/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= EXPORT PROCESS IMAGE ================= */}
            <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/images/exportImg1.png"
                  fill
                  alt="Made in India export operations and logistics coordination"
                  className="
              object-cover
              transition-transform duration-500
              hover:scale-105
              contrast-110
              brightness-105
              saturate-110"
                  quality={100}
                  priority
                />

                {/* Lighter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-900/20 to-transparent" />

                {/* Icon */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-400/30 z-10">
                  <Truck className="w-7 h-7 text-emerald-300" />
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-2xl font-bold text-emerald-200 mb-3">
                  Made in India, Delivered Worldwide
                </h3>
                <p className="text-emerald-100/80 text-lg">
                  Professional export coordination from production to
                  international delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT MARKETS – UAE ================= */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Export Markets
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* ================= IMAGE ================= */}
              <div className="group relative overflow-hidden rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/exportImg2.png"
                    fill
                    alt="International shipping port operations for UAE exports"
                    className="
                object-cover
                transition-transform duration-500
                hover:scale-105
                brightness-105
                contrast-105
                saturate-110
              "
                    quality={100}
                    priority
                  />

                  {/* Lighter overlay (KEY FIX) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-emerald-900/15 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-400/30 z-10">
                    <Ship className="w-7 h-7 text-emerald-300" />
                  </div>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-xl font-bold text-emerald-200 mb-2">
                    International Port Operations
                  </h3>
                  <p className="text-emerald-100/80">
                    Strategic shipping routes to key markets
                  </p>
                </div>
              </div>

              {/* ================= TEXT CONTENT ================= */}
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
                  <span className="text-3xl">🇦🇪</span>
                  <span className="text-sm font-medium text-emerald-300">
                    Primary Export Market
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-300">
                  United Arab Emirates (UAE)
                </h3>

                <p className="text-lg text-emerald-100/90 leading-relaxed mb-6">
                  The UAE is a key destination for Indian agricultural produce
                  due to:
                </p>

                <div className="space-y-4 mb-8">
                  {uaeMarketPoints.map((point, index) => (
                    <div
                      key={index}
                      className="
                  flex items-start gap-4 p-4
                  bg-gradient-to-br from-emerald-900/35 to-green-900/35
                  border border-emerald-500/25
                  rounded-xl
                  transition-all duration-300
                  hover:border-emerald-400/50
                "
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/40">
                        {point.icon}
                      </div>

                      <p className="text-emerald-100/90 pt-1.5">{point.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-green-900/45 to-emerald-900/45 border border-green-500/25 rounded-2xl p-6">
                  <p className="text-emerald-300 font-medium italic">
                    Suran is supplied through coordinated channels aligned with
                    these market needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Export Approach Works */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-300">
                  Why Our Export Approach Works
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {whyItWorks.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:translate-x-2"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-emerald-100 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/50">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-300">
                    Important Note
                  </h2>
                  <p className="text-amber-100/90 text-lg leading-relaxed mb-4">
                    International exports depend on:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-3 text-amber-100/80">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Market demand
                    </li>
                    <li className="flex items-center gap-3 text-amber-100/80">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Regulatory requirements
                    </li>
                    <li className="flex items-center gap-3 text-amber-100/80">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      Logistics and transit conditions
                    </li>
                  </ul>
                  <p className="text-amber-100/90 text-lg leading-relaxed">
                    Export outcomes may vary, and availability is subject to
                    compliance and market factors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Ready to Explore Export Opportunities?
            </h2>
            <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
              Interested in understanding our export capabilities or exploring
              international supply opportunities?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                  Contact Us
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <Link href="/">
                <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Wave Effect */}
      <div className="relative h-32">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="url(#gradient)"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z;
                      M0,0 C300,40 600,80 900,80 C1050,80 1150,60 1200,40 L1200,120 L0,120 Z;
                      M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            />
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
