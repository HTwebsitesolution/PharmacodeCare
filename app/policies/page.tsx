import Link from 'next/link'

const policies = [
  {
    title: 'Safeguarding Policy',
    description: 'Our commitment to protecting vulnerable adults from harm, abuse, and neglect.',
    content: 'We have robust safeguarding procedures in place, with clear reporting channels and regular staff training. All concerns are taken seriously and investigated promptly.',
  },
  {
    title: 'Complaints Procedure',
    description: 'How to raise concerns or complaints, and how we respond.',
    content: 'We welcome feedback and take all complaints seriously. Our procedure ensures complaints are investigated fairly, responded to within agreed timescales, and outcomes are communicated clearly.',
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    content: 'We are committed to protecting your privacy and personal data in accordance with GDPR and data protection legislation. Personal information is only used for care planning and service delivery.',
  },
  {
    title: 'Equality & Diversity',
    description: 'Our commitment to treating everyone with dignity and respect.',
    content: 'We provide care regardless of age, disability, gender, race, religion, or sexual orientation. Our services are designed to be inclusive and culturally sensitive.',
  },
  {
    title: 'Accessibility Statement',
    description: 'Our commitment to making our services accessible to all.',
    content: 'We aim to make our services accessible to everyone. If you need information in a different format or have accessibility requirements, please contact us.',
  },
  {
    title: 'Modern Slavery Statement',
    description: 'Our commitment to ethical employment practices.',
    content: 'We are committed to preventing modern slavery and human trafficking. All staff are employed legally, paid fairly, and work in safe conditions.',
  },
]

export default function Policies() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Policies & Procedures</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transparency, trust, and accountability
            </h1>
            <p className="text-lg text-primary-50">
              Our policies and procedures ensure we deliver safe, high-quality care while protecting the rights and dignity of everyone we support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {policies.map((policy) => (
                <div
                  key={policy.title}
                  className="rounded-xl border border-primary-100 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{policy.title}</h2>
                  <p className="text-gray-600 mb-4">{policy.description}</p>
                  <p className="text-gray-700">{policy.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Need More Information?</h2>
            <p className="text-lg text-gray-600">
              For full policy documents or to discuss any concerns, please contact us.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-primary-600 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-primary-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
