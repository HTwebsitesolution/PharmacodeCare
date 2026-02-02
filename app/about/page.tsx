import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  { title: 'Promote Independence', copy: 'Flexible support that adjusts to each person\'s pace, routines, and strengths, enabling them to live as independently as possible.' },
  { title: 'Protect Wellbeing', copy: '24/7 safeguarding, therapeutic interventions, and safe environments that feel calming and supportive.' },
  { title: 'Champion Community', copy: 'Partnerships with neighbours, councils, families, and local services to keep everyone connected and integrated.' },
  { title: 'Uphold Dignity', copy: 'Individuals lead their care plans, make informed choices, and feel genuinely heard and respected.' },
]

const whoWeSupport = [
  'Adults with mental health needs and learning disabilities',
  'Individuals requiring substance abuse support and recovery services',
  'Elderly and disabled adults needing residential or domiciliary care',
  'Adults aged 18-85 seeking to maintain independence at home',
  'Individuals transitioning from hospital or institutional care',
]

export default function About() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/about/about-1.png"
          alt="PharmacodeCare care team"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">You are Supported</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Care services built on expertise, compassion, and outcome-focused support
            </h1>
            <p className="text-lg text-primary-50">
              We combine residential care, domiciliary support, and community integration to deliver care services that enable independence, improve wellbeing, and reduce reliance on hospital and residential services.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-50">
              <div>
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-sm uppercase tracking-[0.2em]">Years serving community</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm uppercase tracking-[0.2em]">Care support</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">92%</p>
                <p className="text-sm uppercase tracking-[0.2em]">Improved wellbeing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Our story</p>
            <h2 className="text-4xl font-bold text-gray-900 zoom-in animate">
              Built by care professionals who believe in independence-first support
            </h2>
            <p>
              PharmacodeCare was founded by a team of experienced care professionals, support workers, and mental health specialists who wanted to reimagine care delivery. We saw the need for comprehensive, person-centered care services that truly enable independence. Today, our residential facilities and domiciliary services combine safe, supportive environments with expert care so individuals can thrive in their own homes.
            </p>
            <p>
              Every person we support is welcomed with respect and understanding. We take time to learn their story, cultural background, family ties, and the goals they still carry. That knowledge fuels personalized care plans covering daily living support, community integration, wellbeing activities, and meaningful routines.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-100 to-white blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/about/about-2.png" alt="Care team supporting individuals" width={900} height={700} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Mission & values</p>
            <h2 className="text-4xl font-bold text-gray-900 reveal-center animate">
              We are guided by dignity, safety, and independence
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to deliver person-led care that develops independence while protecting wellbeing. Our care is outcome-focused, enabling individuals to maintain independence, improve wellbeing, and remain safely within their own homes, reducing reliance on hospital and residential services.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-primary-50 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-gray-600">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/about/about-3.png" alt="Bright residential care spaces" fill className="object-cover" />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/about/about-4.png" alt="Supportive care staff" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Spaces with purpose</p>
            <h2 className="text-4xl font-bold text-gray-900">Safe, comfortable environments designed for independence and growth</h2>
            <p>
              Our residential care facilities provide move-in ready accommodation with comfortable furnishings, secure access, and therapeutic spaces. Communal areas host activities, social events, and support groups, while our domiciliary services bring expert care directly to people&apos;s homes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>24/7 on-site care team, medication management, and emergency response protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Dedicated spaces for activities, wellbeing sessions, and community integration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Domiciliary care services bringing support directly to people&apos;s own homes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Care team</p>
            <h2 className="text-4xl font-bold text-gray-900">Multidisciplinary experts working in true partnership</h2>
            <p>
              Our team includes experienced support workers, care coordinators, mental health specialists, and domiciliary care professionals. Regular team reviews ensure every person has a comprehensive circle of support focused on progress and independence.
            </p>
            <p>
              Staff receive continuous development in person-centered care, safeguarding, cultural competency, and co-production so they can champion individuals&apos; voices with humility and confidence.
            </p>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-96">
            <Image src="/about/about-5.png" alt="PharmacodeCare care team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Who we support</p>
            <h2 className="text-4xl font-bold text-gray-900">Open doors for adults aged 18-85 across South West London</h2>
            <p className="text-lg text-gray-600">
              We provide care services for people with a wide range of needs. Our flexible care model allows us to increase or step-down support based on progress, ensuring placements remain successful and individuals can maintain independence.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whoWeSupport.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
                <span className="text-primary-700 text-xl font-bold mt-1">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <Image
          src="/slider/slide-2.png"
          alt="Care partnership meeting"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-center text-white space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Partnerships</p>
            <h2 className="text-4xl font-bold">Working side-by-side with commissioners, clinicians, and families</h2>
            <p className="text-lg text-primary-50">
              Local authorities, NHS trusts, housing associations, and charities trust PharmacodeCare to deliver responsive care services across Lambeth, Wandsworth, Merton, and Richmond upon Thames. We provide transparent reporting, regular outcomes reviews, and open communication with everyone involved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 text-center text-white space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Ready to collaborate</p>
          <h2 className="text-4xl font-bold">Let&apos;s design a care pathway that enables independence</h2>
          <p className="text-lg text-primary-50">
            Talk to our referrals team to explore placements, arrange visits, or co-design a bespoke care package for the people you support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-700 font-semibold shadow-lg shadow-black/20 transition hover:bg-primary-50"
            >
              Contact our team
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-white font-semibold transition hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
