import Image from 'next/image'
import Link from 'next/link'

const focusAreas = [
  {
    title: '24/7 Residential Care',
    copy: 'Round-the-clock support in our residential facilities for mental health, learning disabilities, and substance abuse, ensuring individuals feel safe and supported.',
    image: '/services/service-1.png',
  },
  {
    title: 'Domiciliary & Home Care',
    copy: 'Personalized home care services bringing support directly to people\'s homes, enabling them to maintain independence and remain safely in their own accommodation.',
    image: '/services/service-2.png',
  },
  {
    title: 'Elderly & Disabled Care',
    copy: 'Specialist care services for elderly and disabled adults, covering personal care, daily living support, and community integration.',
    image: '/services/service-3.png',
  },
]

const programmes = [
  'Residential care for mental health, learning disabilities, and substance abuse support.',
  'Domiciliary care services across Lambeth, Wandsworth, Merton, and Richmond upon Thames.',
  'Personal care and daily living support enabling independence at home.',
  'Community integration and social connection facilitation.',
  'Family support services including meetings, updates, and collaborative care planning.',
  'Outcome-focused care plans reducing reliance on hospital and residential services.',
]

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/services/service-4.png"
          alt="PharmacodeCare care team"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">You are Supported</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Comprehensive residential and domiciliary care services for adults aged 18-85
            </h1>
            <p className="text-lg text-primary-50">
              We combine residential care, domiciliary support, and community integration so every person can maintain independence, improve wellbeing, and remain safely in their own homes.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-50">
              <div>
                <p className="text-4xl font-bold text-white">18-85</p>
                <p className="text-sm uppercase tracking-[0.2em]">Age range</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm uppercase tracking-[0.2em]">Care support</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">4</p>
                <p className="text-sm uppercase tracking-[0.2em]">Boroughs served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Person-first approach</p>
            <h2 className="text-4xl font-bold text-gray-900 reveal-center animate">
              Care plans that feel personal, practical, and outcome-focused
            </h2>
            <p className="text-lg text-gray-600">
              Every care journey begins with understanding and collaboration. We bring care coordinators, families, and commissioners together to design flexible support that evolves over time.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-3xl border border-primary-50 bg-white shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={area.image} alt={area.title} fill className="object-cover" style={{ objectPosition: 'center 20%' }} />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-900">{area.title}</h3>
                  <p className="text-gray-600">{area.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Residential facilities</p>
            <h2 className="text-4xl font-bold text-gray-900">Safe, comfortable accommodation designed for independence and wellbeing</h2>
            <p>
              Our residential care facilities provide move-in ready accommodation with comfortable furnishings, secure access, and therapeutic spaces. Communal areas host activities, social events, and support groups, while individual rooms offer privacy and personal space.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>24/7 onsite care staff with digital call systems and rapid-response protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Therapeutic rooms for activities, wellbeing sessions, and family visits.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Domiciliary care bringing expert support directly to people&apos;s own homes.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-100 to-white blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/services/service-5.png" alt="Modern residential care facility" width={900} height={700} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Core services</p>
            <h2 className="text-4xl font-bold text-gray-900 zoom-in animate">
              Integrated care services that evolve with each individual
            </h2>
            <p className="text-lg text-gray-600">
              By blending residential care, domiciliary support, and community participation, we create comprehensive care plans individuals can maintain for long-term independence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programmes.map((line) => (
              <div
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:bg-primary-50/40"
              >
                <span className="text-primary-700 text-xl font-bold mt-1">✓</span>
                <p className="text-gray-700">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Community integration</p>
            <h2 className="text-4xl font-bold text-gray-900">Supporting individuals to connect, participate, and thrive</h2>
            <p>
              We facilitate community integration through supported activities, social groups, volunteering opportunities, and local partnerships. Our approach helps individuals build confidence, develop friendships, and participate meaningfully in their communities.
            </p>
            <p>
              Care professionals with specialized training support each activity, helping individuals develop life skills and self-confidence while building supportive connections in Lambeth, Wandsworth, Merton, and Richmond upon Thames.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/services/service-6.png"
                alt="Community activity session"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/services/service-7.png"
                alt="Supportive care session"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-gray-600 text-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Service areas</p>
            <h2 className="text-4xl font-bold text-gray-900">Serving South West London boroughs</h2>
            <p>
              We provide residential care and domiciliary support services across Lambeth, Wandsworth, Merton, and Richmond upon Thames. Each referral receives a prompt response, detailed assessment, and collaborative care planning.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Dedicated referrals team with weekly coordination meetings for timely care decisions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Comprehensive assessments, care planning, and transition support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Transparent reporting, outcome tracking, and commissioner dashboards.</span>
              </li>
            </ul>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
            >
              Refer or collaborate
            </Link>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-96">
            <Image src="/services/service-8.png" alt="Care referral discussion" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <Image
          src="/services/service-9.png"
          alt="PharmacodeCare individuals"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Let&apos;s talk</p>
            <h2 className="text-4xl font-bold">Ready to explore care services or personalized care packages?</h2>
            <p className="text-lg text-primary-50">
              Our care team will arrange a consultation, share outcome data, and co-design a care pathway that matches the needs of the people you support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-700 font-semibold shadow-lg shadow-black/20 transition hover:bg-primary-50"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-white font-semibold transition hover:bg-white/10"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
