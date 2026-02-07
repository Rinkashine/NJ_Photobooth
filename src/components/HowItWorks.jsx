import { motion } from 'framer-motion';
import { MessageSquare, Palette, Settings, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Inquire',
    description: 'Reach out with your event details and we\'ll craft the perfect photo booth package for you.',
  },
  {
    icon: Palette,
    title: 'Customize',
    description: 'Choose your booth style, backdrop, props, and custom print designs to match your theme.',
  },
  {
    icon: Settings,
    title: 'We Set Up',
    description: 'Our team arrives early, sets up everything, and handles all the technical details seamlessly.',
  },
  {
    icon: PartyPopper,
    title: 'Enjoy',
    description: 'Your guests have a blast! Instant prints, digital copies, and a full online gallery after the event.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden grain">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-white/30 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
            The Process
          </p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            How It Works
          </h2>
          <div className="w-12 h-[2px] bg-white mx-auto" />
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center lg:px-6"
            >
              {/* Step circle */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="w-24 h-24 border border-white/10 flex items-center justify-center bg-black relative z-10">
                  <step.icon size={28} className="text-white" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 bg-white text-black text-xs font-display font-extrabold flex items-center justify-center z-20">
                  {i + 1}
                </span>
              </div>

              <h3 className="font-display text-white text-lg font-bold uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-white/35 font-body font-light text-sm leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
