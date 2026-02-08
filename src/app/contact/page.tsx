/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
};

type FormStatus = {
  submitted: boolean;
  loading: boolean;
  error: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  interest: ''
};

const initialFormStatus: FormStatus = {
  submitted: false,
  loading: false,
  error: ''
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<FormStatus>(initialFormStatus);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ ...initialFormStatus, loading: true });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error();

      setFormStatus({ submitted: true, loading: false, error: '' });
      setFormData(initialFormData);
    } catch {
      setFormStatus({
        submitted: false,
        loading: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  const interests = [
    { label: 'Farming Partnership', value: 'farming' },
    { label: 'General Inquiry', value: 'general' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white">

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
          Let&apos;s Grow Together
        </h1>
        <p className="text-emerald-100/80 mt-4 max-w-2xl mx-auto text-lg">
          Have questions about suran farming or partnerships? We&apos;re here to help.
        </p>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: CONTACT FORM */}
          <div className="bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8">
            {formStatus.submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-green-300">
                  Message Sent Successfully!
                </h3>
                <p className="text-emerald-100/70 mt-2">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus(initialFormStatus)}
                  className="mt-6 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-emerald-300 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none transition"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none transition"
                    />
                    <input
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none transition"
                    />
                  </div>

                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-emerald-500/30 rounded-xl text-white focus:border-emerald-400 focus:outline-none transition"
                  >
                    <option value="" className="bg-slate-900">Select Your Interest</option>
                    {interests.map(i => (
                      <option key={i.value} value={i.value} className="bg-slate-900">
                        {i.label}
                      </option>
                    ))}
                  </select>

                  <input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none transition"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder:text-emerald-100/40 focus:border-emerald-400 focus:outline-none transition resize-none"
                  />

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 rounded-xl font-bold flex justify-center items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </button>

                  {formStatus.error && (
                    <p className="text-red-400 text-center bg-red-400/10 py-3 rounded-lg border border-red-400/30">
                      {formStatus.error}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* RIGHT: LOCATION MAP & INFO */}
          <div className="space-y-6">
            
            {/* Contact Info Cards */}
            <div className="bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-emerald-300 mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-200">Our Location</h3>
                    <p className="text-emerald-100/70 mt-1">
                     Office 501, Navratnagold, Vihar Chowk, Hadapsar, Pune 411028
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Phone className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-200">Phone</h3>
                    <p className="text-emerald-100/70 mt-1">
                     9764446454 <br /> 
                     9373022095
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Mail className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-200">Email</h3>
                    <p className="text-emerald-100/70 mt-1">
                      bkagroexporters@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0168640354447!2d73.85674731489867!3d18.52043008741677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0778c9fb9a1%3A0x4d8d2b6f0e4e8e8e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Farm Location"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}