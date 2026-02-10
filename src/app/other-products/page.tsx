/* eslint-disable react-hooks/purity */
"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Leaf,
  Droplets,
  Sprout,
  TrendingUp,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { products, crops } from "../utils/data";
import Image from "next/image";
export default function GobarCompostPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const benefits = [
    {
      icon: <Sprout className="w-6 h-6" />,
      text: "Improves soil structure and aeration",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      text: "Enhances water retention capacity",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      text: "Promotes beneficial microbial activity",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Supports strong root development",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Improves crop yield and quality",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Safe for long-term soil use",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>

        {/* Floating Particles */}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 animate-bounce-slow">
            <div className="text-6xl">🐄</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Gobar Compost Fertilizer
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-4 animate-fade-in-up animation-delay-200">
            Natural, Organic, and Soil-Enriching Fertilizer
          </p>

          <p className="text-lg md:text-xl text-green-200 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Supporting healthier crops, improved soil fertility, and sustainable
            agricultural practices through naturally decomposed cow dung
            compost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <a href="#products">
              <button className="group bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                View Product Details
                <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 hover:scale-105">
                Contact for Enquiry
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section
        id="section-intro"
        className={`py-15 px-4 transition-all duration-1000 ${
          isVisible["section-intro"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                What is Gobar Compost Fertilizer?
              </h2>

              <div className="w-20 h-1 bg-green-600 mb-6" />

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gobar Compost Fertilizer is a{" "}
                <span className="font-semibold text-green-700">
                  100% natural organic fertilizer
                </span>{" "}
                prepared from properly decomposed cow dung using controlled
                composting processes. As a reliable natural organic fertilizer
                for farming, it enriches soil naturally, improves nutrient
                availability, and supports healthy crop growth without harming
                soil structure.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                This gobar compost fertilizer is suitable for suran (elephant
                foot yam) cultivation, vegetables, fruits, and multiple
                agricultural crops, making it ideal for traditional farming,
                organic farming, and commercial farming applications.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />

              {/* Image */}
              <div className="relative h-100 rounded-xl overflow-hidden bg-green-100">
                <Image
                  src="/images/composit-img.png"
                  alt="Gobar compost fertilizer in hand"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay label */}
                <div className="absolute inset-0 bg-black/20 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">
                    100% Natural Gobar Compost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Composition */}
      <section
        id="section-composition"
        className={`py-10 px-4 bg-gradient-to-br from-green-50 to-white transition-all duration-1000 ${
          isVisible["section-composition"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Natural Composition
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Ingredients
              </h3>
              <ul className="space-y-4">
                {[
                  "Decomposed cow dung",
                  "Natural organic matter",
                  "Beneficial soil microorganisms",
                  "No chemicals or synthetic additives",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Available Forms
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 hover:border-green-700 transition-colors">
                  <h4 className="font-bold text-xl text-green-700 mb-2">
                    Powder Form
                  </h4>
                  <p className="text-gray-600">Easy to spread and mix</p>
                </div>
                <div className="border-l-4 border-green-500 pl-6 hover:border-green-700 transition-colors">
                  <h4 className="font-bold text-xl text-green-700 mb-2">
                    Paste / Semi-Solid Form
                  </h4>
                  <p className="text-gray-600">
                    Suitable for soil application and plantation preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section
        id="section-benefits"
        className={`py-10 px-4 transition-all duration-1000 ${
          isVisible["section-benefits"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Benefits of Using Gobar Compost Fertilizer
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-green-600 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-lg">
                  {benefit.text}
                </p>
              </div>
            ))}

            <div className="group bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <p className="font-medium text-lg">
                ✔ Eco-friendly and sustainable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable Crops */}
      <section
        id="section-crops"
        className={`py-10 px-4 bg-gradient-to-br from-green-900 to-green-800 text-white transition-all duration-1000 ${
          isVisible["section-crops"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Suitable Applications
            </h2>
            <div className="w-20 h-1 bg-green-400 mx-auto mb-6" />
            <p className="text-xl text-green-100">
              Gobar Compost Fertilizer can be used across multiple crops and
              farming systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <p className="text-lg font-medium">{crop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section
        id="section-application"
        className={`py-10 px-4 transition-all duration-1000 ${
          isVisible["section-application"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              How to Use
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto" />
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              {[
                "Apply during land preparation or before plantation",
                "Mix with soil evenly",
                "Suitable for basal soil application",
                "Application quantity depends on soil condition and crop type",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-gray-700 pt-2">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl">
              <p className="text-yellow-800 font-medium">
                <span className="font-bold">Note:</span> Detailed application
                guidance is provided during consultation based on farming
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section
        id="section-sustainability"
        className={`py-10 px-4 bg-gradient-to-br from-green-50 to-green-100 transition-all duration-1000 ${
          isVisible["section-sustainability"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-7xl mb-6">🌍</div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">
                  Supporting Sustainable Agriculture
                </h3>
                <p className="text-gray-700 text-lg">
                  Our Gobar Compost Fertilizer supports environmentally
                  responsible farming by improving soil health naturally and
                  reducing dependence on chemical inputs.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  🌱 Long-term Cultivation
                </h4>
                <p className="text-gray-600">
                  Aligns with sustainable planning for future generations
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  🏆 Export-Grade Practices
                </h4>
                <p className="text-gray-600">
                  Supports healthier produce and quality standards
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-bold text-green-800 mb-3">
                  💚 Soil Management
                </h4>
                <p className="text-gray-600">
                  Natural approach to maintaining soil vitality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Trust */}
      <section
        id="section-quality"
        className={`py-10 px-4 transition-all duration-1000 ${
          isVisible["section-quality"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Our Quality Approach
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "⚙️",
                title: "Controlled Composting",
                desc: "Process excellence",
              },
              {
                icon: "✅",
                title: "Quality Standards",
                desc: "Consistent results",
              },
              { icon: "🛡️", title: "Safe Inputs", desc: "Natural & tested" },
              {
                icon: "👨‍🌾",
                title: "Farmer Support",
                desc: "Modern & traditional",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products start */}
      <section id="products" className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Other Products
            </h2>
            <p className="text-lg text-gray-600">
              Organic compost powder products supporting soil health and
              sustainable farming
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.desc}</p>

                  <Link href="/contact">
                    <span className="inline-block mt-4 text-green-600 font-semibold">
                      Enquire Now →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product end */}

      {/* CTA Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Gobar Compost Fertilizer?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Learn how this natural fertilizer can support your farming goals and
            soil health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group bg-white text-green-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Contact Us
                <Phone className="inline ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </Link>
            <a href="#products">
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 hover:scale-105">
                Explore Our Products
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
