import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/slider/slide-4.png"
          alt="PharmacodeCare team"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-700/70" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-4 text-white">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/media/Pharmacode%20Logo%20-updated.png" alt="PharmacodeCare logo" width={57} height={57} className="rounded-xl bg-white/90 p-2" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-100">PharmacodeCare</p>
                  <p className="text-xl font-semibold">You are Supported</p>
                </div>
              </div>
              <p className="text-primary-50 leading-relaxed">
                We provide residential care and domiciliary support services enabling individuals to maintain independence, improve wellbeing, and remain safely in their own homes.
              </p>
              <div className="flex space-x-4 text-primary-50">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">YouTube</a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Explore</p>
              <ul className="space-y-3 text-primary-50">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/services', label: 'Services' },
                  { href: '/areas-we-cover', label: 'Areas We Cover' },
                  { href: '/about', label: 'About' },
                  { href: '/careers', label: 'Careers' },
                  { href: '/contact-us', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Resources</p>
              <ul className="space-y-3 text-primary-50">
                {[
                  { label: 'Policies & Procedures', href: '/policies' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Areas We Cover', href: '/areas-we-cover' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Contact</p>
              <ul className="space-y-3 text-primary-50">
                <li>
                  📍 Challenge House Business Centre<br />
                  Suite S3, 616 Mitcham Road<br />
                  Croydon, CR0 3AA
                </li>
                <li>📞 <a href="tel:07930180481" className="hover:text-white transition">07930 180481</a></li>
                <li>✉️ <a href="mailto:admin@pharmacodecare.co.uk" className="hover:text-white transition">admin@pharmacodecare.co.uk</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-6 flex flex-col gap-4 text-sm text-primary-50 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} PharmacodeCare. All Rights Reserved.</p>
            <p>
              Designed by{' '}
              <a href="https://htwebsolution.com" target="_blank" rel="noreferrer" className="font-semibold text-white hover:underline">
                HTwebsolution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
