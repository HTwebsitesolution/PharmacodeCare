'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Slide = {
  image: string
  eyebrow: string
  title: string
  description: string
  cta: {
    label: string
    href: string
  }
}

const slideData: Slide[] = [
  {
    image: '/slider/slide-1.png',
    eyebrow: 'Outcome-Focused Home Care',
    title: 'Stay safely at home, improve wellbeing, reduce hospital reliance',
    description:
      'Domiciliary and residential care across Lambeth, Wandsworth, Merton & Richmond upon Thames. Same-week starts available.',
    cta: {
      label: 'Request a Callback',
      href: '/contact-us',
    },
  },
  {
    image: '/slider/slide-2.png',
    eyebrow: 'For Families & Commissioners',
    title: 'Transparent reporting, measurable outcomes, consistent care',
    description:
      'We work alongside families, social workers, and commissioners to deliver care that makes a real difference.',
    cta: {
      label: 'Make a Referral',
      href: '/contact-us?type=referral',
    },
  },
  {
    image: '/slider/slide-3.png',
    eyebrow: 'Ages 18-85',
    title: 'Specialist support for mental health, learning disabilities & substance recovery',
    description:
      'Residential care and community support enabling independence, building skills, and reducing reliance on hospital services.',
    cta: {
      label: 'View Services',
      href: '/services',
    },
  },
]

const TRANSITION_MS = 800
const AUTO_INTERVAL_MS = 7000

export default function HeroSlider() {
  const slides = slideData
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = (nextIndex: number) => {
    if (isAnimating || nextIndex === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(nextIndex)
    setTimeout(() => setIsAnimating(false), TRANSITION_MS)
  }

  const goNext = () => goToSlide((activeIndex + 1) % slides.length)
  const goPrev = () => goToSlide((activeIndex - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, AUTO_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-gray-900 text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-all ease-out ${
            index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl space-y-6 fade-in animate">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em]">
            {slides[activeIndex].eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
            {slides[activeIndex].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100/90 drop-shadow">
            {slides[activeIndex].description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={slides[activeIndex].cta.href}
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-3 text-lg font-semibold text-primary-700 shadow-2xl shadow-black/30 transition hover:bg-white"
            >
              {slides[activeIndex].cta.label}
            </Link>
            <Link
              href="tel:07930180481"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Call: 07930 180481
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex items-center justify-between px-6 md:px-12">
        <button
          onClick={goPrev}
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white transition hover:bg-white/20"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="pointer-events-auto flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2 w-10 rounded-full transition ${
                index === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white transition hover:bg-white/20"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}
