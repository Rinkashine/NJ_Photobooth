import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black grain shutter-stripes"
    >
      {/* Large ghost logo in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt=""
          className="w-[500px] md:w-[700px] h-auto invert opacity-[0.03]"
        />
      </div>

      {/* Geometric frame lines */}
      <div className="absolute top-16 left-16 w-24 h-24 border-l-2 border-t-2 border-white/10 hidden md:block" />
      <div className="absolute bottom-16 right-16 w-24 h-24 border-r-2 border-b-2 border-white/10 hidden md:block" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo mark */}
          <motion.img
            src={logo}
            alt="NJ Photobooth"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-28 md:w-36 h-auto invert mx-auto mb-8"
          />

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-[0.05em] leading-[1.05] mb-4"
          >
            Capture Every
            <br />
            Moment
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-20 h-[2px] bg-white mx-auto mb-6"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/50 font-body font-light text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Capturing smiles, laughter, and unforgettable moments! Our photobooth adds
            the perfect touch of fun to weddings, parties, and events of all kinds.
            Strike a pose and make memories with us!
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="cta-primary text-sm px-10 py-4">
              Book Your Event
            </a>
            <a href="#gallery" className="cta-outline text-sm px-10 py-4">
              View Gallery
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 hover:text-white transition-colors z-10"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
