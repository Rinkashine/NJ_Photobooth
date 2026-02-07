import { Instagram, Facebook, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="NJ Photobooth" className="h-14 w-auto invert mb-4" />
            <p className="text-white/25 font-body font-light text-sm leading-relaxed max-w-sm mb-6">
              Creating unforgettable photo booth experiences across New Jersey.
              Premium booths, instant prints, and memories that last a lifetime.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white text-sm font-body font-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <h4 className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-white/30 text-sm font-body font-light">
              <li>0992 424 4721</li>
              <li>njworks2025@gmail.com</li>
              <li>Bulacan, Philippines</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/15 text-xs font-body font-light">
            &copy; {new Date().getFullYear()} NJ Photobooth. All rights reserved.
          </p>
          <a
            href="#hero"
            className="text-white/15 hover:text-white transition-colors flex items-center gap-1 text-xs font-display font-bold tracking-wider uppercase"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
