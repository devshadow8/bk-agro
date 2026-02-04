/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sprout, Leaf, Sun, Users, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: ''
  });
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: '' });

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ submitted: true, loading: false, error: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interest: ''
        });
        setFormStatus({ submitted: false, loading: false, error: '' });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 XXXXX XXXXX",
      subdetails: "Mon-Sat, 9AM-6PM IST"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@suranfarming.com",
      subdetails: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Maharashtra, India",
      subdetails: "Serving across India & UAE"
    }
  ];

  const interests = [
    { icon: <Sprout className="w-5 h-5" />, label: "Farming Partnership", value: "farming" },
    { icon: <Leaf className="w-5 h-5" />, label: "Supply & Distribution", value: "supply" },
    { icon: <Users className="w-5 h-5" />, label: "Business Consultation", value: "consultation" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "General Inquiry", value: "general" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        
        {/* Floating Agriculture Icons */}
        <div className="absolute top-20 left-10 opacity-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <Sprout className="w-20 h-20 text-emerald-400" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Leaf className="w-24 h-24 text-green-400" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <Sun className="w-16 h-16 text-yellow-400" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Get in Touch</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent leading-tight">
              Let&apos;s Grow Together
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              Have questions about suran farming, partnership opportunities, or our services? We&apos;re here to help you cultivate success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-green-500/0 group-hover:from-emerald-500/10 group-hover:to-green-500/10 rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/50">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-emerald-300 mb-2">{info.title}</h3>
                  <p className="text-white font-medium mb-1">{info.details}</p>
                  <p className="text-emerald-100/60 text-sm">{info.subdetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Side - Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                    Send Us a Message
                  </h2>
                  <p className="text-emerald-100/80 text-lg leading-relaxed">
                    Whether you&apos;re interested in partnership opportunities, need consultation, or have questions about our services, we&apos;re ready to assist you.
                  </p>
                </div>

                {/* Why Contact Us */}
                <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <Sprout className="w-6 h-6" />
                    Why Reach Out?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Expert guidance on suran farming',
                      'Partnership and collaboration opportunities',
                      'Market access and export support',
                      'Transparent business model consultation'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-emerald-100/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-300 mb-2">Quick Response Time</h4>
                      <p className="text-emerald-100/70 text-sm">
                        We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 shadow-2xl">
                {formStatus.submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fadeIn">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-500/50 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-300 mb-4">Message Sent Successfully!</h3>
                    <p className="text-emerald-100/80 text-lg mb-2">Thank you for reaching out to us.</p>
                    <p className="text-emerald-100/60">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-emerald-100/40 focus:outline-none transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                            : 'border-emerald-500/30 hover:border-emerald-500/50'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-emerald-100/40 focus:outline-none transition-all duration-300 ${
                            focusedField === 'email' 
                              ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                              : 'border-emerald-500/30 hover:border-emerald-500/50'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="relative">
                        <label htmlFor="phone" className="block text-sm font-medium text-emerald-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-emerald-100/40 focus:outline-none transition-all duration-300 ${
                            focusedField === 'phone' 
                              ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                              : 'border-emerald-500/30 hover:border-emerald-500/50'
                          }`}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    {/* Interest Area */}
                    <div className="relative">
                      <label htmlFor="interest" className="block text-sm font-medium text-emerald-300 mb-2">
                        Area of Interest *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('interest')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none transition-all duration-300 ${
                          focusedField === 'interest' 
                            ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                            : 'border-emerald-500/30 hover:border-emerald-500/50'
                        }`}
                      >
                        <option value="" className="bg-slate-900">Select an option</option>
                        {interests.map((interest, index) => (
                          <option key={index} value={interest.value} className="bg-slate-900">
                            {interest.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <label htmlFor="subject" className="block text-sm font-medium text-emerald-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-emerald-100/40 focus:outline-none transition-all duration-300 ${
                          focusedField === 'subject' 
                            ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                            : 'border-emerald-500/30 hover:border-emerald-500/50'
                        }`}
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-medium text-emerald-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-emerald-100/40 focus:outline-none resize-none transition-all duration-300 ${
                          focusedField === 'message' 
                            ? 'border-emerald-400 shadow-lg shadow-emerald-500/20' 
                            : 'border-emerald-500/30 hover:border-emerald-500/50'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className="group w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {formStatus.loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-emerald-100/50 text-sm text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Areas Section */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              How Can We Help You?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 text-center"
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/50">
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-bold text-emerald-200">{interest.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 mb-6">
              <Sprout className="w-8 h-8 text-emerald-400" />
              <Leaf className="w-8 h-8 text-green-400" />
              <Sun className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
              Join us in cultivating success through sustainable suran farming. Let&apos;s grow together.
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-bold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
              Explore Our Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Wave Effect */}
      <div className="relative h-32">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="url(#gradient)" opacity="0.3">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z;
                      M0,0 C300,40 600,80 900,80 C1050,80 1150,60 1200,40 L1200,120 L0,120 Z;
                      M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" />
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