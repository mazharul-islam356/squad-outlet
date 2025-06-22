"use client"

import type React from "react"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full text-sm font-bold text-slate-700 mb-8 border border-sky-200">
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            Free Squad Strategy Session Worth $2,500
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Ready to Join
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              squad outlet?
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Share your vision and our squad will craft a strategy to dominate your market. Response guaranteed within 2
            hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Why Choose squad outlet?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Lightning Fast Squad</h4>
                    <p className="text-slate-600">MVP ready in 2 weeks, full launch in 6-8 weeks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    💎
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Premium Squad Quality</h4>
                    <p className="text-slate-600">Enterprise-grade solutions with pixel-perfect design</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Guaranteed Squad Results</h4>
                    <p className="text-slate-600">Average 350% ROI increase or your money back</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-br from-slate-900 to-sky-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact squad outlet HQ</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">📧</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-300">hello@squadoutlet.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">📞</div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">🌍</div>
                  <div>
                    <div className="font-semibold">Global Squad</div>
                    <div className="text-slate-300">Serving 45+ countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-slate-300"
                    placeholder="Your full name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-slate-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-slate-300"
                    placeholder="Your company name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-3">
                    Squad Investment Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-slate-300"
                  >
                    <option value="">Select investment range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3">
                  Project Vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-sky-500/20 focus:border-sky-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm group-hover:border-slate-300"
                  placeholder="Describe your vision, goals, timeline, and any specific requirements..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-sky-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-sky-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        Sending to Squad...
                      </>
                    ) : (
                      <>
                        <span className="mr-3">🚀</span>
                        Join squad outlet
                        <svg
                          className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
