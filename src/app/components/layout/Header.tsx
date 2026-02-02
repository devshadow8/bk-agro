/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX, IconChevronDown } from "@tabler/icons-react";

const servicesDropdown = [
  { name: "Agricultural Solutions", link: "/services/agricultural-solutions" },
  { name: "Crop Management", link: "/services/crop-management" },
  { name: "Consulting Services", link: "/services/consulting" },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About BK-Agro", link: "/about-us" },
  { name: "Business", link: "/business" },
  { name: "Services", link: "/services", dropdown: servicesDropdown },
];

const particlePositions = [
  { left: 15, top: 25 },
  { left: 85, top: 65 },
  { left: 35, top: 80 },
  { left: 75, top: 15 },
  { left: 55, top: 95 },
  { left: 95, top: 35 },
  { left: 5, top: 75 },
  { left: 65, top: 45 },
  { left: 45, top: 30 },
  { left: 25, top: 60 },
];

const isHome = (href: string) => href === "/";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Desktop dropdown state
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Mobile dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-emerald-900/95 via-green-900/95 to-emerald-900/95 backdrop-blur-xl border-b border-green-700/50 shadow-2xl"
          : "bg-gradient-to-r from-emerald-900/80 via-green-900/80 to-emerald-900/80 backdrop-blur-md"
      }`}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-emerald-950/20 to-green-900/40 animate-pulse" 
           style={{ animationDuration: '3s' }} />

      {/* Animated particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-green-400/40 rounded-full shadow-lg shadow-green-400/50"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{
                x: [0, i % 2 === 0 ? 40 : -40],
                y: [0, i % 3 === 0 ? 20 : -20],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative green glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-4 relative z-10">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/bk-agro-logo.png"
              alt="BK-Agro Logo"
              width={100}
              height={100}
              className="rounded-xl  ring-2 ring-green-500/30 group-hover:ring-green-400/60 transition-all duration-300"

              priority
            />
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className="flex space-x-2 items-center">
          {navItems.map((item, index) => {
            const newTab = !isHome(item.link);

            if (item.dropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <motion.button
                    type="button"
                    className="text-green-50 hover:text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-green-800/50 transition-all duration-300 flex items-center gap-1.5 relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <IconChevronDown
                      size={18}
                      className={`transition-transform duration-300 relative z-10 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-500/20 to-green-600/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-72 rounded-xl bg-gradient-to-br from-emerald-900/98 to-green-900/98 backdrop-blur-xl border border-green-700/50 shadow-2xl overflow-hidden"
                      >
                        <div className="p-3">
                          <div className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-2" />

                          {item.dropdown.map((sub, subIndex) => (
                            <motion.div
                              key={sub.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                            >
                              <Link
                                href={sub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 rounded-lg text-green-50 hover:text-white hover:bg-green-800/60 transition-all duration-300 group relative overflow-hidden"
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-500/20 to-green-600/0"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 0.5 }}
                                />
                                <span className="relative z-10">{sub.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  target={newTab ? "_blank" : undefined}
                  rel={newTab ? "noopener noreferrer" : undefined}
                  className="text-green-50 hover:text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-green-800/50 transition-all duration-300 relative overflow-hidden group inline-block"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-500/20 to-green-600/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link href="/contact" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative px-8 py-3 rounded-xl font-bold text-white shadow-lg shadow-green-500/30 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%] animate-gradient" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Mobile Logo */}
          <Link href="/" className="group">
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/images/bk-agro-logo.png"
                alt="BK-Agro Logo"
                width={129}
                height={129}
                className="h-20 w-20 rounded-xl shadow-lg ring-2 ring-green-500/30"
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-green-800/50 transition-all"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-gradient-to-br from-green-900/98 to-emerald-900/98 backdrop-blur-xl rounded-xl p-4 space-y-3 border border-green-700/50 shadow-2xl overflow-hidden"
            >
              {navItems.map((item, index) => {
                const newTab = !isHome(item.link);

                if (item.dropdown) {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="space-y-2"
                    >
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between text-green-50 hover:text-white font-semibold px-3 py-2 rounded-lg hover:bg-green-800/50 transition-all"
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconChevronDown size={18} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 overflow-hidden border-l-2 border-green-600/50"
                          >
                            {item.dropdown.map((sub, subIndex) => (
                              <motion.div
                                key={sub.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={sub.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMobileMenu}
                                  className="block text-green-100 hover:text-white py-2 px-3 rounded-lg hover:bg-green-800/40 transition-all"
                                >
                                  {sub.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.link}
                      target={newTab ? "_blank" : undefined}
                      rel={newTab ? "noopener noreferrer" : undefined}
                      onClick={closeMobileMenu}
                      className="block text-green-50 hover:text-white font-semibold px-3 py-2 rounded-lg hover:bg-green-800/50 transition-all"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <button className="w-full mt-4 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10">Contact Us</span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     
    </div>
  );
}