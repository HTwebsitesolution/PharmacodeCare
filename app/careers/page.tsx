import Link from 'next/link'

const benefits = [
  'Competitive salary and benefits package',
  'Comprehensive training and development opportunities',
  'Supportive team environment',
  'Career progression pathways',
  'Flexible working arrangements',
  'DBS check paid for',
]

const roles = [
  {
    title: 'Support Worker',
    location: 'Various locations across South West London',
    type: 'Full-time & Part-time',
    description: 'Join our team providing person-centered care and support to individuals in their homes and residential settings.',
  },
  {
    title: 'Care Coordinator',
    location: 'Office-based with travel',
    type: 'Full-time',
    description: 'Coordinate care plans, liaise with families and professionals, and ensure high-quality service delivery.',
  },
  {
    title: 'Team Leader',
    location: 'Various locations',
    type: 'Full-time',
    description: 'Lead a team of support workers, ensuring quality care delivery and supporting staff development.',
  },
]

export default function Careers() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Join Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Make a real difference in people&apos;s lives
            </h1>
            <p className="text-lg text-primary-50">
              We&apos;re always looking for compassionate, dedicated individuals to join our care team across South West London.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Opportunities</h2>
            <div className="space-y-6">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{role.title}</h3>
                      <p className="text-gray-600 mt-1">{role.location}</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{role.description}</p>
                  <Link
                    href="/contact-us?subject=Career%20Enquiry"
                    className="inline-block text-primary-700 font-semibold hover:text-primary-800"
                  >
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Don&apos;t See a Role That Fits?</h2>
            <p className="text-lg text-gray-600">
              We&apos;re always interested in hearing from passionate care professionals. Send us your CV and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link
              href="/contact-us?subject=General%20Enquiry"
              className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-primary-700"
            >
              Send Us Your CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
