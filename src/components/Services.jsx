import { motion } from 'framer-motion';
import services from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden grain shutter-stripes">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
            Our Booths
          </p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            Choose Your
            <br />
            Experience
          </h2>
          <div className="w-12 h-[2px] bg-white mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-black p-8 hover:bg-white transition-all duration-500"
            >
              {/* Number */}
              <span className="text-white/10 group-hover:text-black/10 font-display text-6xl font-extrabold absolute top-4 right-6 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 border border-white/20 group-hover:border-black/20 flex items-center justify-center mb-6 transition-colors duration-500">
                <service.icon size={22} className="text-white group-hover:text-black transition-colors duration-500" />
              </div>

              <h3 className="font-display text-white group-hover:text-black text-lg font-bold uppercase tracking-wide mb-3 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-white/40 group-hover:text-black/50 font-body font-light text-sm leading-relaxed mb-6 transition-colors duration-500">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-white/30 group-hover:text-black/40 text-xs transition-colors duration-500">
                    <span className="w-1 h-1 bg-white/40 group-hover:bg-black/40 flex-shrink-0 transition-colors duration-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
