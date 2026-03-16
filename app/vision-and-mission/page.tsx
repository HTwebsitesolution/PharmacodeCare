import Link from 'next/link'

export default function VisionAndMission() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Vision & Mission</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Community-based adult social care
            </h1>
            <p className="text-lg text-primary-50">
              Pharmacode Care Limited provides community-based adult social care through supported
              living, outreach and domiciliary (awaiting CQC registration) services that enable adults
              to live safely and independently in their own homes and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Personal Profile</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A compassionate and reliable care professional with experience supporting adults in
              residential and community-based settings. Skilled in providing person-centred care
              through supported living, outreach, and domiciliary services. Committed to promoting
              independence, dignity, and wellbeing while maintaining high standards of safeguarding
              and professional practice.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Organisation:</span> Pharmacode Care Limited
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide high-quality, person-centred care that supports adults to live
                independently, improve their wellbeing, and remain safe within their homes and
                communities.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a trusted provider of community-based care services that empowers individuals,
                promotes dignity, and enhances quality of life through compassionate and professional
                support.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Core Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Dignity and Respect –</span> Treating every individual
                with compassion, fairness, and understanding.
              </li>
              <li>
                <span className="font-semibold">Person-Centred Care –</span> Supporting individuals
                according to their unique needs, choices, and goals.
              </li>
              <li>
                <span className="font-semibold">Integrity –</span> Acting with honesty,
                accountability, and professionalism at all times.
              </li>
              <li>
                <span className="font-semibold">Inclusion –</span> Providing care that is accessible
                and respectful of diversity.
              </li>
              <li>
                <span className="font-semibold">Independence –</span> Encouraging and enabling
                individuals to maintain control over their lives.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Services Description</h3>
            <p className="text-gray-700 leading-relaxed">
              Pharmacode Care Limited provides supported living, outreach, and domiciliary care
              services designed to help adults maintain independence, improve wellbeing, and remain
              safely in their homes and communities.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                Supported individuals with daily living activities including personal care, meal
                preparation, and medication prompts.
              </li>
              <li>
                Promoted independence by assisting people to access community activities, appointments,
                and social opportunities.
              </li>
              <li>
                Maintained accurate care records and reported any safeguarding or wellbeing concerns to
                senior staff.
              </li>
              <li>
                Worked collaboratively with healthcare professionals, families, and multidisciplinary
                teams.
              </li>
              <li>
                Followed care plans and risk assessments to ensure safe, respectful, and high-quality
                support.
              </li>
            </ul>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Key Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Person-centred care</li>
                <li>Safeguarding awareness</li>
                <li>Communication and interpersonal skills</li>
                <li>Teamwork and collaboration</li>
                <li>Record keeping and documentation</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">Services Provided</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Supported Living –</span> Providing daily support to
                  adults to help them live independently in their own accommodation while promoting
                  choice and control.
                </li>
                <li>
                  <span className="font-semibold">Domiciliary Care –</span> Delivering personal care
                  and practical support in individuals’ homes, including assistance with personal
                  hygiene, meal preparation, medication prompts, and daily routines.
                </li>
                <li>
                  <span className="font-semibold">Community Outreach Support –</span> Assisting
                  individuals to access community services, attend appointments, participate in social
                  activities, and maintain independence.
                </li>
                <li>
                  <span className="font-semibold">Personal Care Support –</span> Helping with bathing,
                  dressing, grooming, and maintaining personal dignity.
                </li>
                <li>
                  <span className="font-semibold">Medication Support –</span> Prompting or assisting
                  with prescribed medication according to care plans.
                </li>
                <li>
                  <span className="font-semibold">Social and Emotional Support –</span> Encouraging
                  participation in activities and providing companionship to improve wellbeing and
                  reduce isolation.
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Ready to find out more about how we work?
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-700 transition"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

