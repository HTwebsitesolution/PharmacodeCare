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
              Outcome-Focused Home Care
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
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary-700 shadow-2xl shadow-black/30 transition hover:bg-primary-50"
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

      {/* Trust Strip */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {[
                { icon: '✓', text: 'DBS-Checked Staff', detail: 'Enhanced checks' },
                { icon: '🛡️', text: 'Safeguarding Trained', detail: 'Regular updates' },
                { icon: '📋', text: 'Insured & Compliant', detail: 'Full coverage' },
                { icon: '⏱️', text: '2-Hour Response', detail: 'Call back time' },
                { icon: '📞', text: '24/7 Support', detail: 'Emergency line' },
                { icon: '📚', text: 'Ongoing Training', detail: 'CQC standards' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-semibold text-gray-900">{item.text}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Blocks Section */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">
                Real Outcomes, Real Results
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What outcome-focused care means for you
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our care isn&apos;t just about support—it&apos;s about measurable improvements that matter to you and your family.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Stay Safely at Home',
                  description: 'Reduce hospital admissions and emergency visits through proactive care planning and daily support.',
                  measurement: 'Weekly goals reviewed with you • Falls risk plan + home safety checklist',
                  icon: '🏠',
                },
                {
                  title: 'Improve Daily Living Skills',
                  description: 'Build confidence in cooking, budgeting, medication management, and personal care routines.',
                  measurement: 'Skills tracked monthly • Progress milestones celebrated',
                  icon: '💪',
                },
                {
                  title: 'Reduce Hospital Reliance',
                  description: 'Prevent readmissions with consistent care, medication prompts, and health monitoring.',
                  measurement: 'Medication prompts recorded • Health alerts escalated promptly',
                  icon: '🏥',
                },
                {
                  title: 'Support Routines & Wellbeing',
                  description: 'Maintain independence through structured support that adapts to your daily life.',
                  measurement: 'Routine plans co-created • Regular wellbeing checks',
                  icon: '📅',
                },
                {
                  title: 'Community Access',
                  description: 'Reconnect with local activities, volunteering, and social groups that matter to you.',
                  measurement: 'Community goals set together • Transport support available',
                  icon: '🤝',
                },
                {
                  title: 'Reablement Milestones',
                  description: 'Track progress on goals like managing finances, using public transport, and building relationships.',
                  measurement: 'Milestone reviews every 6 weeks • Achievements documented',
                  icon: '🎯',
                },
              ].map((outcome) => (
                <div
                  key={outcome.title}
                  className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-4xl mb-4">{outcome.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{outcome.title}</h3>
                  <p className="text-gray-700 mb-3">{outcome.description}</p>
                  <p className="text-xs text-primary-700 font-medium border-t border-gray-100 pt-3">
                    How we measure: {outcome.measurement}
                  </p>
                </div>
              ))}
            </div>
            {/* Mini Case Study */}
            <div className="mt-12 rounded-2xl border-2 border-primary-200 bg-primary-50/50 p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Real Result</p>
                  <p className="text-lg text-gray-800 italic mb-2">
                    &quot;After 6 weeks: improved routine, fewer missed medications, regained confidence leaving home.&quot;
                  </p>
                  <p className="text-sm text-gray-600">— Service user, Lambeth (anonymised, with consent)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Services Overview */}
      <Reveal as="section" className="py-20 bg-gray-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">Our Services</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialist care across South West London</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Domiciliary Care',
                  description: 'Personal care and daily living support in your own home, tailored to your needs.',
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Support for Elderly & Disabled',
                  description: 'Compassionate care enabling independence and wellbeing for older adults and those with disabilities.',
                  boundary: 'Ages 18-85. Tailored support plans reviewed regularly.',
                  link: '/services',
                },
                {
                  title: 'Mental Health Support',
                  description: 'Specialist residential and community support for mental health recovery and stability.',
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Substance Misuse Recovery',
                  description: 'Structured support programs for individuals working towards recovery and independence.',
                  boundary: 'Non-clinical support alongside NHS/clinical teams where appropriate.',
                  link: '/services',
                },
                {
                  title: 'Respite Care',
                  description: 'Short-term support giving families and carers a well-deserved break.',
                  boundary: 'Flexible arrangements from a few hours to several weeks.',
                  link: '/services',
                },
                {
                  title: 'Learning Disabilities Support',
                  description: 'Person-centered care helping individuals with learning disabilities thrive in their communities.',
                  boundary: 'Community-based support promoting independence and choice.',
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
                  <p className="text-gray-700 mb-3">{service.description}</p>
                  <p className="text-xs text-gray-600 italic border-t border-gray-100 pt-3">{service.boundary}</p>
                  <span className="inline-block mt-4 text-primary-600 font-semibold text-sm">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* How It Works - Improved */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">Simple Process</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How we work together</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From first enquiry to ongoing care, we keep the process clear, transparent, and focused on your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                { 
                  step: '1', 
                  title: 'Enquiry', 
                  description: 'Call, email, or complete our form.',
                  commitment: 'We respond within 2 hours'
                },
                { 
                  step: '2', 
                  title: 'Assessment', 
                  description: 'We meet you at home to understand your needs, goals, and preferences.',
                  commitment: 'Usually within 48 hours'
                },
                { 
                  step: '3', 
                  title: 'Care Plan', 
                  description: 'Together, we create a personalized plan with clear outcomes and milestones.',
                  commitment: 'Written plan within 1 week'
                },
                { 
                  step: '4', 
                  title: 'Start Care', 
                  description: 'Your dedicated care team begins support, with regular check-ins from day one.',
                  commitment: 'Same-week starts available'
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary-600 text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                  <p className="text-sm font-semibold text-primary-700">{item.commitment}</p>
                </div>
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

      {/* Areas Served - Enhanced */}
      <Reveal as="section" className="py-20 bg-primary-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 mb-4">Areas We Cover</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Serving South West London</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We provide residential care and domiciliary support across four boroughs. <strong>Same-week starts subject to availability.</strong>
              </p>
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

      {/* Trust & Compliance */}
      <Reveal as="section" className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">Trust & Compliance</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your safety and wellbeing is our priority</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'DBS Checked Staff',
                  description: 'All care professionals undergo enhanced DBS checks and ongoing monitoring.',
                  icon: '✓',
                },
                {
                  title: 'Comprehensive Training',
                  description: 'Regular training in safeguarding, person-centered care, and health & safety.',
                  icon: '📚',
                },
                {
                  title: 'Safeguarding Policies',
                  description: 'Robust procedures to protect vulnerable adults, with clear reporting channels.',
                  icon: '🛡️',
                },
                {
                  title: 'Complaints Process',
                  description: 'Transparent complaints procedure with independent review and rapid response.',
                  icon: '📋',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-primary-100 bg-white p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/policies"
                className="text-primary-700 hover:text-primary-800 font-semibold underline text-lg"
              >
                View all policies and procedures →
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">Real Stories</p>
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
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold">Ready to discuss your care needs?</h2>
            <p className="text-lg text-primary-50">
              Whether you&apos;re a family member, commissioner, or individual seeking support, we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-800 text-lg font-semibold shadow-xl shadow-black/20 transition hover:bg-primary-50"
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
