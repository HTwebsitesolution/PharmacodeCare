'use client'

import { useState } from 'react'

const boroughs = [
  { name: 'Lambeth', x: 50, y: 60, color: 'primary' },
  { name: 'Wandsworth', x: 40, y: 65, color: 'primary' },
  { name: 'Merton', x: 45, y: 75, color: 'primary' },
  { name: 'Richmond upon Thames', x: 30, y: 50, color: 'primary' },
]

export default function LondonBoroughsMap() {
  const [hoveredBorough, setHoveredBorough] = useState<string | null>(null)

  return (
    <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border-2 border-primary-200">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background circle representing London */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary-200"
            opacity="0.3"
          />

          {/* Borough markers */}
          {boroughs.map((borough) => (
            <g key={borough.name}>
              {/* Pulse animation circle */}
              <circle
                cx={borough.x}
                cy={borough.y}
                r="4"
                fill="currentColor"
                className={`text-primary-500 ${
                  hoveredBorough === borough.name ? 'opacity-100' : 'opacity-60'
                }`}
                style={{
                  animation: hoveredBorough === borough.name ? 'pulse 2s infinite' : 'none',
                }}
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={hoveredBorough === borough.name ? '0s' : '-1s'}
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={hoveredBorough === borough.name ? '0s' : '-1s'}
                />
              </circle>

              {/* Borough label */}
              <text
                x={borough.x}
                y={borough.y - 6}
                textAnchor="middle"
                className="text-xs font-semibold fill-primary-700"
                style={{ fontSize: '2.5px' }}
              >
                {borough.name.split(' ')[0]}
              </text>
            </g>
          ))}

          {/* Central point marker */}
          <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-primary-600" />
        </svg>
      </div>

      {/* Borough labels overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 pointer-events-none">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-800 mb-2">South West London</h3>
          <p className="text-sm text-primary-700">Coverage Areas</p>
        </div>
      </div>

      {/* Interactive borough list */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {boroughs.map((borough) => (
            <button
              key={borough.name}
              onMouseEnter={() => setHoveredBorough(borough.name)}
              onMouseLeave={() => setHoveredBorough(null)}
              className="bg-white/90 backdrop-blur-sm border border-primary-200 rounded-lg px-3 py-2 text-xs font-semibold text-primary-700 hover:bg-primary-50 hover:border-primary-300 transition"
            >
              {borough.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
