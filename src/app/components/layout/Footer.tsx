/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/purity */
"use client";

import React, { useEffect, useState } from "react";

import { MapPin, Mail, Clock, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ChevronRight, Leaf
} from "lucide-react";
import { services, quickLinks, socialLinks } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";

type LeafStyle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [leaves, setLeaves] = useState<LeafStyle[]>([]);

  /* ✅ Client-only randomness (fixes hydration error) */
  useEffect(() => {
    setLeaves(
      Array.from({ length: 6 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 20}%`,
        animationDelay: `${i * 2}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }))
    );
  }, []);

 

  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 via-green-950 to-emerald-950 text-white overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-emerald-950/30 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((leaf, i) => (
          <div key={i} className="absolute animate-float-leaf" style={leaf}>
            <Leaf className="w-6 h-6 text-green-500/20 rotate-45" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Newsletter */}
        <div className="border-b border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent flex items-center gap-3">
                <Leaf className="w-10 h-10 text-green-400 animate-bounce" />
                Stay Connected
              </h3>
              <p className="text-gray-400 mt-2">
                Subscribe for agricultural insights and updates
              </p>
            </div>

            <div className="flex gap-3 w-full md:w-auto max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-green-500"
                />
              </div>
              <button className="px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl hover:scale-105 transition">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info + social */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/images/bk-agro-logo.png"
                alt="BK-Agro Logo"
                width={100}
                height={100}
                className="rounded-xl"
                priority
              />
            </Link>

            <p className="text-gray-400 mt-4">
              Sustainable agricultural solutions empowering farmers with modern
              technology and expertise.
            </p>

            {/* ✅ Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Leaf className="w-4 h-4 text-green-500" />
                Follow Us
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      rel="noopener noreferrer"
                      className={`w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center transition hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(`q-${i}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                  >
                    <ChevronRight
                      className={`w-4 h-4 transition ${
                        hoveredLink === `q-${i}` ? "translate-x-1" : ""
                      }`}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin /> Office 501, Navratnagold, Vihar Chowk,Hadapsar, Pune 411028
              </li>
              <li className="flex gap-3">
                <Mail /> bkagroexporters@gmail.com
              </li>
              <li className="flex gap-3">
                <Phone /> +91 9764446454
              </li>
              <li className="flex gap-3">
                <Clock /> Mon–Sun: 9:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
          © 2026 BK-Agro. All Rights Reserved.
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
