import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1">
            <img
              src={logo}
              alt="NJ Photobooth"
              className="h-10 w-auto invert"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-xs font-display font-medium tracking-[0.15em] uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cta-primary text-xs px-6 py-2.5 rounded-none"
            >
              Book Now
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 32px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 32px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 32px)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            <img src={logo} alt="NJ Photobooth" className="h-16 w-auto invert mb-4 opacity-20" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="text-white text-2xl font-display font-bold tracking-[0.15em] uppercase hover:text-gray-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="cta-primary text-sm px-10 py-3 mt-4"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
