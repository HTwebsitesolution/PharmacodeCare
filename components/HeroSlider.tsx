'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const heroImages = [
  '/slider/Pharmacode hero image.png',
  '/slider/Pharmacode hero image 1.png',
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 8000) // Change image every 8 seconds - longer display time

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`PharmacodeCare hero image ${index + 1}`}
            fill
            className="object-cover"
            style={{ objectPosition: 'right center' }}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Gradient overlay - dark on left (50-70%), clear on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
    </div>
  )
}
