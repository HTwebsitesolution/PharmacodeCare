import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <div className="min-h-screen space-y-12">
      {/* Single Hero */}
      <section className="relative isolate min-h-[600px] overflow-hidden bg-gray-900 text-white">
        <Image
          src="/slider/slide-1.png"
          alt="PharmacodeCare care services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-4xl space-y-6">
            <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em]">
              You are Supported
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl">
              Stay safely at home, improve wellbeing, reduce hospital reliance
            </h1>
            <p className="text-xl md:text-2xl text-gray-100/90 drop-shadow max-w-3xl">
              Outcome-focused home care across <strong>Lambeth, Wandsworth, Merton & Richmond upon Thames</strong>. Same-week starts available where capacity allows.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-primary-900/30 transition hover:bg-primary-600"
              >
                Request a Callback
              </Link>
              <Link
                href="tel:07930180481"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/15"
              >
                Call: 07930 180481
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CQC Status & Registered Manager */}
      <section className="py-8 bg-primary-50 border-b-2 border-primary-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">CQC Status</p>
                <p className="text-2xl font-bold text-gray-900">Quality Care at all times</p>
                <p className="text-gray-700 mt-1">In Application</p>
              </div>
              <div className="text-center md:text-left border-l-0 md:border-l-2 border-primary-200 pl-0 md:pl-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Registered Manager</p>
                <p className="text-xl font-bold text-gray-900">Experienced Leadership</p>
                <p className="text-gray-700 mt-1">Qualified and registered care management team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip - Reduced to 4, Bigger, Qualified */}
      <Reveal as="section" className="py-8 bg-white border-b border-gray-200 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: '✓', text: 'DBS-Checked Staff', detail: 'Enhanced checks for all team members' },
                { icon: '🛡️', text: 'Safeguarding Trained', detail: 'Regular updates & CQC standards' },
                { icon: '⏱️', text: '2-Hour Response', detail: 'During opening hours (Mon-Fri 9am-6pm)' },
                { icon: '📞', text: '24/7 Support', detail: 'Emergency line for existing clients' },
              ].map((item, index) => (
                <Reveal
                  key={index}
                  className="flex flex-col items-center fade-up group cursor-pointer"
                  threshold={0.3}
                  rootMargin="0px 0px -50px 0px"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100 group-hover:shadow-lg">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 animate-icon-pulse">{item.icon}</span>
                  </div>
                  <p className="text-base font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-primary-700">{item.text}</p>
                  <p className="text-sm text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Meet the Team - Visual Anchor #1 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-2">You are Supported</p>
              <h2 className="text-2xl font-bold text-gray-900">The people who support you</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Registered Manager / Care Coordinator */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {/* TODO: Replace with real Registered Manager headshot */}
                  <Image
                    src="/about/about-5.png"
                    alt="Registered Manager"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Registered Manager</h3>
                <p className="text-sm text-gray-600">Qualified & experienced leadership</p>
              </div>
              {/* Support Worker */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {/* TODO: Replace with real support worker photo */}
                  <Image
                    src="/about/about-4.png"
                    alt="Support Worker"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Care Team</h3>
                <p className="text-sm text-gray-600">Dedicated support professionals</p>
              </div>
              {/* Training/Coordination */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {/* TODO: Replace with real training/coordination photo */}
                  <Image
                    src="/about/about-3.png"
                    alt="Training & Coordination"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Training & Development</h3>
                <p className="text-sm text-gray-600">Ongoing professional development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Blocks Section - Reduced Text */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
                Real Outcomes, Real Results
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What outcome-focused care means for you
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Stay Safely at Home',
                  description: 'Reduce hospital admissions through proactive care planning.',
                  measurement: 'Weekly goals • Falls risk plan • Safety checklist',
                  icon: '🏠',
                },
                {
                  title: 'Improve Daily Living Skills',
                  description: 'Build confidence in cooking, budgeting, and personal care.',
                  measurement: 'Skills tracked monthly • Milestones celebrated',
                  icon: '💪',
                },
                {
                  title: 'Reduce Hospital Reliance',
                  description: 'Prevent readmissions with consistent care and monitoring.',
                  measurement: 'Medication prompts • Health alerts • Care updates',
                  icon: '🏥',
                },
                {
                  title: 'Support Routines & Wellbeing',
                  description: 'Maintain independence through structured daily support.',
                  measurement: 'Routine plans • Wellbeing checks • Adjustments',
                  icon: '📅',
                },
                {
                  title: 'Community Access',
                  description: 'Reconnect with local activities and social groups.',
                  measurement: 'Community goals • Transport support • Regular outings',
                  icon: '🤝',
                },
                {
                  title: 'Reablement Milestones',
                  description: 'Track progress on finances, transport, and relationships.',
                  measurement: '6-week reviews • Achievements documented • Goals updated',
                  icon: '🎯',
                },
              ].map((outcome) => (
                <div
                  key={outcome.title}
                  className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                    <span className="text-2xl">{outcome.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{outcome.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm">{outcome.description}</p>
                  <p className="text-xs text-primary-800 font-medium border-t border-gray-100 pt-3 leading-relaxed">
                    Measured by: {outcome.measurement}
                  </p>
                </div>
              ))}
            </div>
            {/* Mini Case Study - With Legitimacy Note */}
            <div className="mt-12 rounded-2xl border-2 border-primary-200 bg-primary-50/50 p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Real Result</p>
                  <p className="text-lg text-gray-800 italic mb-2">
                    &quot;After 6 weeks: improved routine, fewer missed medications, regained confidence leaving home.&quot;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-sm text-gray-700">— Service user, Lambeth</p>
                    <p className="text-xs text-gray-600 italic">Anonymised, shared with consent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Visual Anchor #2 - Care in Action (Wide Image) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                {/* TODO: Replace with real "care in action" photo - carer with care plan, meal prep, or companionship (non-identifiable) */}
                <Image
                  src="/homepage/home-1.png"
                  alt="Care in action - supporting daily living"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">You are Supported</p>
                <h2 className="text-3xl font-bold text-gray-900">Care that adapts to your life</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl mt-1">✓</span>
                    <span className="text-gray-700"><strong>Care plan in 24–48 hours</strong> after assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl mt-1">✓</span>
                    <span className="text-gray-700"><strong>Weekly outcomes review</strong> with you and your family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-600 text-xl mt-1">✓</span>
                    <span className="text-gray-700"><strong>Family updates available</strong> whenever you need them</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Reduced Text, Visual Focus */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">Our Services</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialist care across South West London</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Domiciliary Care',
                  description: 'Personal care and daily living support in your own home.',
                  tags: ['Personal care', 'Meals', 'Medication prompts'],
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Support for Elderly & Disabled',
                  description: 'Compassionate care enabling independence and wellbeing.',
                  tags: ['Ages 18-85', 'Tailored plans', 'Regular reviews'],
                  boundary: 'Flexible support that adapts to changing needs.',
                  link: '/services',
                },
                {
                  title: 'Mental Health Support',
                  description: 'Specialist residential and community support for recovery.',
                  tags: ['Residential', 'Community', 'Recovery focus'],
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Substance Misuse Recovery',
                  description: 'Structured support programs for recovery and independence.',
                  tags: ['Structured programs', 'Recovery focus', 'Independence'],
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Respite Care',
                  description: 'Short-term support giving families and carers a break.',
                  tags: ['Flexible hours', 'Short-term', 'Family support'],
                  boundary: 'From a few hours to several weeks.',
                  link: '/services',
                },
                {
                  title: 'Learning Disabilities Support',
                  description: 'Person-centered care helping individuals thrive in communities.',
                  tags: ['Person-centered', 'Community', 'Independence'],
                  boundary: 'Community-based support promoting choice.',
                  link: '/services',
                },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className="block rounded-2xl border border-primary-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-300 transition group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary-50 text-primary-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 italic border-t border-gray-100 pt-3">{service.boundary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* How It Works - Improved */}
      <Reveal as="section" className="py-20 bg-gray-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">Simple Process</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How we work together</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { 
                  step: '1', 
                  title: 'Enquiry', 
                  description: 'Call, email, or complete our form.',
                  commitment: 'We respond within 2 hours (Mon-Fri 9am-6pm)'
                },
                { 
                  step: '2', 
                  title: 'Assessment', 
                  description: 'We meet you at home to understand your needs.',
                  commitment: 'Usually within 48 hours'
                },
                { 
                  step: '3', 
                  title: 'Care Plan', 
                  description: 'Together, we create a personalized plan.',
                  commitment: 'Written plan within 1 week'
                },
                { 
                  step: '4', 
                  title: 'Start Care', 
                  description: 'Your dedicated care team begins support.',
                  commitment: 'Same-week starts available'
                },
              ].map((item, index) => (
                <Reveal
                  key={item.step}
                  className="text-center fade-up step-wrapper"
                  threshold={0.2}
                  rootMargin="0px 0px -100px 0px"
                  style={{
                    '--step-delay': `${index * 0.6}s`,
                  } as React.CSSProperties}
                >
                  <div className="w-20 h-20 rounded-full bg-primary-500 text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:shadow-xl step-number">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 step-title">{item.title}</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed text-sm step-description">{item.description}</p>
                  <p className="text-sm font-semibold text-primary-600 step-commitment">{item.commitment}</p>
                </Reveal>
              ))}
            </div>
            <div className="rounded-2xl bg-primary-50 border border-primary-200 p-6 text-center">
              <p className="text-lg font-semibold text-gray-900 mb-2">What you receive:</p>
              <p className="text-gray-700">
                A written care plan, named coordinator, and review schedule with regular outcome tracking.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* How We Keep People Safe - Consolidated with Visual */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">Safety & Protection</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How we keep people safe</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                {/* TODO: Replace with real training photo - staff with manuals/lanyards, training session */}
                <Image
                  src="/services/service-6.png"
                  alt="Staff training and development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">DBS + Training + Supervision</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Enhanced DBS checks for all staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Regular safeguarding training updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>Ongoing supervision and support</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/policies"
                    className="inline-block text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    View all policies →
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Safeguarding',
                  description: 'Clear procedures to protect vulnerable adults.',
                  link: '/policies',
                },
                {
                  title: 'Complaints Process',
                  description: 'Transparent procedure with independent review.',
                  link: '/policies',
                },
                {
                  title: 'Privacy & Data',
                  description: 'Protected in accordance with GDPR.',
                  link: '/policies',
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm hover:shadow-md transition text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                  <span className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Areas Served - Visual Anchor #3 with Map/Borough Visual */}
      <Reveal as="section" className="py-20 bg-primary-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">Areas We Cover</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving South West London</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We provide residential care and domiciliary support across four boroughs. <strong>Same-week starts subject to availability.</strong>
              </p>
            </div>
            <div className="mb-8">
              {/* TODO: Add simple map illustration or borough montage visual here */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <p className="text-2xl font-bold mb-2">South West London</p>
                    <p className="text-sm">Lambeth • Wandsworth • Merton • Richmond upon Thames</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {['Lambeth', 'Wandsworth', 'Merton', 'Richmond upon Thames'].map((borough) => (
                <div
                  key={borough}
                  className="rounded-xl border border-primary-200 bg-white p-6 text-center shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{borough}</h3>
                  <p className="text-gray-600 text-sm mb-3">Residential & Domiciliary Care</p>
                  <p className="text-xs text-primary-700 font-medium">Postcode coverage available</p>
                </div>
              ))}
            </div>
            <div className="text-center bg-white rounded-xl p-6 border border-primary-100">
              <p className="text-gray-700 mb-2">
                <strong>Coverage:</strong> We serve postcodes across all four boroughs. Contact us to confirm coverage for your specific area.
              </p>
              <Link
                href="/areas-we-cover"
                className="inline-flex items-center rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50 mt-4"
              >
                View Coverage Details →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Testimonials - Improved */}
      <Reveal as="section" className="py-20 bg-gray-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">Real Stories</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What families and individuals say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    'The care team has been exceptional. My mother has been able to stay in her own home, and we can see real improvements in her daily living skills.',
                  author: 'J.M.',
                  role: 'Family Member',
                  location: 'Wandsworth',
                  timeframe: '6 months support',
                },
                {
                  quote:
                    'After leaving hospital, I needed support to get back on my feet. The team helped me rebuild my confidence and now I&apos;m managing independently.',
                  author: 'A.S.',
                  role: 'Service User',
                  location: 'Lambeth',
                  timeframe: '4 months support',
                },
                {
                  quote:
                    'As a social worker, I appreciate PharmacodeCare&apos;s transparent reporting and focus on outcomes. They genuinely care about the people they support.',
                  author: 'R.K.',
                  role: 'Social Worker',
                  location: 'Merton',
                  timeframe: 'Working together 2 years',
                },
              ].map((testimonial, index) => (
                <div key={index} className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm">
                  <p className="text-gray-800 mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.location} • {testimonial.timeframe}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-6">
              All testimonials shared with consent. Names anonymised for privacy.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Final CTA */}
      <Reveal as="section" className="relative py-24 fade-up">
        <div className="absolute inset-0">
          <Image
            src="/slider/slide-2.png"
            alt="Care professional"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 via-primary-600/85 to-primary-500/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">You are Supported</p>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to discuss your care needs?</h2>
            <p className="text-lg text-primary-50">
              Whether you&apos;re a family member, commissioner, or individual seeking support, we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-primary-500 px-8 py-3 text-white text-lg font-semibold shadow-xl shadow-primary-900/30 transition hover:bg-primary-600"
              >
                Request a Callback
              </Link>
              <Link
                href="/contact-us?type=referral"
                className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Make a Referral
              </Link>
            </div>
            <div className="pt-8 border-t border-white/20 mt-8">
              <p className="text-primary-100 mb-4">Or contact us directly:</p>
              <div className="flex flex-wrap justify-center gap-6 text-primary-50">
                <a href="tel:07930180481" className="hover:text-white transition">
                  📞 07930 180481
                </a>
                <a href="mailto:admin@pharmacodecare.co.uk" className="hover:text-white transition">
                  ✉️ admin@pharmacodecare.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
