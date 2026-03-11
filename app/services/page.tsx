import Image from 'next/image'
import Link from 'next/link'

const focusAreas = [
  {
    title: 'Outreach Care Services',
    copy: 'Flexible outreach support in the community, visiting people where they live to help maintain independence, safety, and daily routines.',
    image: '/services/service-1.png',
  },
  {
    title: 'Supported Living Care',
    copy: 'Person-centred supported living care in people&apos;s own homes or shared accommodation arranged with housing partners, helping adults build skills, confidence, and meaningful day-to-day structure.',
    image: '/services/service-2.png',
  },
  {
    title: 'Domiciliary Care (waiting CQC)',
    copy: 'Planned domiciliary care services (CQC registration in progress) designed to deliver safe, consistent support to people in their own homes.',
    image: '/services/service-3.png',
  },
]

const programmes = [
  'Outreach care services delivering support in people’s own homes and communities.',
  'Supported living care with structured routines, tenancy support, and life skills coaching.',
  'Domiciliary care packages (waiting CQC) focused on personal care, meals, and daily living tasks.',
  'Community engagement and social connection activities that reduce isolation.',
  'Family and carer involvement through regular updates, meetings, and shared care planning.',
  'Outcome-focused support plans that promote independence and reduce reliance on hospital care.',
]

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/services/service-4.png"
          alt="Pharmacode Care Limited care team"
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
              Outreach, supported living and domiciliary care for adults aged 18-65
            </h1>
            <p className="text-lg text-primary-50">
              We combine supported living, outreach support, and domiciliary care (awaiting CQC registration) with community integration so every person can maintain independence, improve wellbeing, and remain safely in their own homes.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-50">
              <div>
                <p className="text-4xl font-bold text-white">18-65</p>
                <p className="text-sm uppercase tracking-[0.2em]">Adult care age range</p>
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
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Support where you live</p>
            <h2 className="text-4xl font-bold text-gray-900">Safe, flexible support in your own home and community</h2>
            <p>
              Pharmacode Care Limited does not provide its own residential accommodation. Instead, we work alongside housing providers, landlords, and families to deliver supported living, outreach, and (subject to CQC registration) domiciliary care where people already live.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Support delivered in people&apos;s own homes or shared accommodation arranged by housing partners.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Flexible visit schedules, including daytime, evenings, weekends, and night support where required.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Focus on safety, independence, and wellbeing within familiar surroundings.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-100 to-white blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/services/service-5.png" alt="Support provided in the community and at home" width={900} height={700} className="object-cover" />
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
              By blending supported living, outreach support, domiciliary care (awaiting CQC registration), and community participation, we create comprehensive care plans individuals can maintain for long-term independence.
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Supported Living</p>
            <h2 className="text-3xl font-bold text-gray-900">Supported Living services</h2>
            <p>
              Supported Living services are designed to support adults to live as independently as possible in their own home or shared accommodation while receiving personalised, person-centred care and support.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Person-centred support planning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Support with personal care (washing, dressing, hygiene).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Medication prompting and administration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Meal planning and preparation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Domestic support including cleaning, laundry, and shopping.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Tenancy sustainment support with rent, bills, and liaising with landlords.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Outreach support</p>
            <h2 className="text-3xl font-bold text-gray-900">Outreach (floating) support services</h2>
            <p>
              Outreach (floating) support provides flexible, goal-focused support to individuals living independently in the community, without accommodation being provided.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Practical support with daily living tasks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Support accessing benefits, housing, and community services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Support attending health and social care appointments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Emotional support, crisis prevention, and resilience-building.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Support during transitions such as hospital discharge or moving home.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Confidence-building, community engagement, and safeguarding support.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Domiciliary care</p>
            <h2 className="text-3xl font-bold text-gray-900">Domiciliary care services (awaiting CQC registration)</h2>
            <p className="text-lg text-gray-600">
              Our organisation is preparing to deliver domiciliary (home-based) care and is currently awaiting Care Quality Commission (CQC) registration. Once registered, services will be delivered in line with CQC Fundamental Standards and relevant legislation.
            </p>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Personal care support (washing, dressing, toileting).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Medication support and prompting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Meal preparation and nutrition support.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Support with mobility, transfers, and daily routines at home.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Companionship and emotional support.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-700 mt-1">•</span>
                <span>Person-centred care planning, reviews, and safeguarding, with dignity and respect at all times.</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 italic">
              Domiciliary care services will commence only upon successful CQC registration and approval.
            </p>
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
              We provide supported living, outreach support, and domiciliary care (awaiting CQC registration) across Lambeth, Wandsworth, Merton, and Richmond upon Thames. Each referral receives a prompt response, detailed assessment, and collaborative care planning.
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
          alt="Pharmacode Care Limited individuals"
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
