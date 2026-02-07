import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import testimonials from '../data/testimonials';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-black fill-black" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gray-100 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-black/30 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-black text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            What Clients Say
          </h2>
          <div className="w-12 h-[2px] bg-black mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 relative group hover:bg-black transition-all duration-500"
            >
              <Quote size={32} className="text-black/5 group-hover:text-white/5 absolute top-6 right-6 transition-colors duration-500" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-black group-hover:text-white fill-black group-hover:fill-white transition-colors duration-500" />
                ))}
              </div>
              <p className="text-gray-600 group-hover:text-white/60 font-body font-light text-sm leading-relaxed mb-6 transition-colors duration-500">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 group-hover:border-white/10 pt-4 transition-colors duration-500">
                <p className="text-black group-hover:text-white font-display font-bold text-sm uppercase tracking-wide transition-colors duration-500">
                  {t.name}
                </p>
                <p className="text-gray-400 group-hover:text-white/30 text-xs font-body tracking-wider uppercase transition-colors duration-500">
                  {t.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
