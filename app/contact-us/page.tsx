'use client'

import Image from 'next/image'
import { useState, type ChangeEvent, type FormEvent } from 'react'

import Reveal from '@/components/Reveal'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Reveal as="section" className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white fade-up">
        <Image
          src="/about/about-1.png"
          alt="PharmacodeCare welcoming environment"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">You are Supported</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl text-primary-100 font-semibold">You are Supported</p>
            <p className="text-lg text-primary-50 max-w-2xl mx-auto">
              Whether you are a commissioner, care professional, or family member, our dedicated team is ready to explore how PharmacodeCare can help support independence and wellbeing.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">We&apos;re Here To Help</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch For All Care Enquiries</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Send us a message and we&apos;ll respond as soon as possible. Our team is ready to answer your questions and discuss how we can support you or your loved ones with residential care or domiciliary services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white border border-primary-100 p-8 rounded-2xl shadow-[0px_15px_40px_rgba(67,95,93,0.08)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition shadow-lg"
                  >
                    Send
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-br from-white to-primary-50/40 border border-primary-100 p-8 rounded-2xl shadow-[0px_15px_40px_rgba(67,95,93,0.08)]">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Address</h4>
                    <p className="text-gray-600">
                      Challenge House Business Centre<br />
                      Suite S3<br />
                      616 Mitcham Road<br />
                      Croydon<br />
                      CR0 3AA
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:07930180481" className="hover:text-primary-700 transition">
                        07930 180481
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:admin@pharmacodecare.co.uk" className="hover:text-primary-700 transition">
                        admin@pharmacodecare.co.uk
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Service Areas</h4>
                    <p className="text-gray-600">
                      Lambeth, Wandsworth, Merton,<br />
                      Richmond upon Thames
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Age Range</h4>
                    <p className="text-gray-600">
                      18 - 85 years
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-300">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-primary-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-primary-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition"
                        aria-label="YouTube"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Reveal className="mt-16 fade-up">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100 to-white blur-xl" aria-hidden />
                <div className="relative">
                  <Image
                    src="/homepage/home-1.png"
                    alt="PharmacodeCare team ready to help"
                    width={1200}
                    height={600}
                    className="h-[400px] md:h-[500px] w-full object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12">
                    <div className="max-w-2xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/90 mb-2">Ready To Support You</p>
                      <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Our compassionate care team is here to guide you through every step of your care journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
