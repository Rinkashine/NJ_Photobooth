import { motion } from 'framer-motion';
import { Award, Clock, MapPin, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Award, label: '500+ Events', desc: 'Across New Jersey' },
  { icon: Clock, label: 'Instant Prints', desc: 'Ready in seconds' },
  { icon: MapPin, label: 'Bulacan, PH', desc: 'Philippines' },
  { icon: Sparkles, label: '5-Star Rated', desc: 'Consistently top-rated' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-black/40 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-black text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
              Where Fun
              <br />
              Meets Craft
            </h2>
            <div className="w-12 h-[2px] bg-black mb-8" />
            <p className="text-gray-500 font-body font-light leading-relaxed mb-5 text-[15px]">
              Capturing smiles, laughter, and unforgettable moments! Our photobooth adds
              the perfect touch of fun to weddings, parties, and events of all kinds.
              Strike a pose and make memories with us!
            </p>

            {/* Highlight badges */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-3 bg-gray-100 p-4 border border-gray-200 group hover:bg-black hover:border-black transition-all duration-300"
                >
                  <h.icon size={18} className="text-black group-hover:text-white flex-shrink-0 transition-colors" />
                  <div>
                    <span className="text-black group-hover:text-white text-xs font-display font-bold tracking-wide block transition-colors">
                      {h.label}
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-500 text-[11px] font-body transition-colors">
                      {h.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative border border-gray-200">
              {/* Camera-shaped placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={28} className="text-black/15" />
                  </div>
                  <p className="text-black/20 text-xs font-display font-bold tracking-[0.2em] uppercase">
                    Your Photo Here
                  </p>
                </div>
              </div>
              {/* Film strip holes at top and bottom */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black/5 flex items-center justify-around px-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-black/5 rounded-sm" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/5 flex items-center justify-around px-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-black/5 rounded-sm" />
                ))}
              </div>
            </div>
            {/* Offset shadow frame */}
            <div className="absolute -bottom-3 -right-3 inset-0 border-2 border-black/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
