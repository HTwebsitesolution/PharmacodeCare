import Image from 'next/image'
import Link from 'next/link'

const boroughs = [
  {
    name: 'Lambeth',
    description: 'Comprehensive residential and domiciliary care services across Lambeth, with strong links to local NHS trusts and community services.',
    services: ['Domiciliary care', 'Residential care', 'Mental health support', 'Elderly care'],
  },
  {
    name: 'Wandsworth',
    description: 'Specialist care services in Wandsworth, supporting individuals to maintain independence and reduce hospital reliance.',
    services: ['Home care', 'Learning disabilities support', 'Substance recovery', 'Respite care'],
  },
  {
    name: 'Merton',
    description: 'Outcome-focused care across Merton, working closely with local authorities and families to deliver person-centered support.',
    services: ['Domiciliary support', 'Residential facilities', 'Community integration', '24/7 care'],
  },
  {
    name: 'Richmond upon Thames',
    description: 'Quality care services in Richmond, enabling individuals aged 18-85 to live independently in their own homes.',
    services: ['Elderly care', 'Disabled support', 'Mental health services', 'Reablement programs'],
  },
]

export default function AreasWeCover() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/slider/slide-1.png"
          alt="South West London"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Areas We Cover</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Serving South West London with outcome-focused care
            </h1>
            <p className="text-lg text-primary-50">
              We provide residential care and domiciliary support across four boroughs, with same-week starts available where capacity allows.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {boroughs.map((borough) => (
                <div
                  key={borough.name}
                  className="rounded-2xl border border-primary-100 bg-white p-8 shadow-sm hover:shadow-md transition"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{borough.name}</h2>
                  <p className="text-gray-600 mb-6">{borough.description}</p>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">
                      Services Available
                    </h3>
                    <ul className="space-y-2">
                      {borough.services.map((service) => (
                        <li key={service} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Response Times & Availability</h2>
            <p className="text-lg text-gray-600">
              We aim to respond to all enquiries within 24 hours. Where capacity allows, we can arrange same-week assessments and care starts for urgent referrals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl">
                <p className="text-2xl font-bold text-primary-700">24hrs</p>
                <p className="text-gray-600 mt-2">Response Time</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-2xl font-bold text-primary-700">Same Week</p>
                <p className="text-gray-600 mt-2">Assessment Available</p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-2xl font-bold text-primary-700">24/7</p>
                <p className="text-gray-600 mt-2">Care Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Ready to discuss care in your area?</h2>
            <p className="text-lg text-gray-600">
              Contact us to discuss care options, arrange a visit, or make a referral.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-primary-700"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-primary-300 px-8 py-3 text-primary-700 font-semibold transition hover:bg-primary-50"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
