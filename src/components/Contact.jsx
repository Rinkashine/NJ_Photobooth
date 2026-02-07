import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Holiday Party', 'School Event', 'Other'];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          event_date: data.eventDate || 'Not specified',
          event_type: data.eventType || 'Not specified',
          message: data.message || 'No message',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      reset();
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const inputClass = (hasError) =>
    `w-full bg-white/5 border ${hasError ? 'border-red-400' : 'border-white/10 focus:border-white/40'} px-4 py-3.5 text-white text-sm font-body font-light placeholder:text-white/20 outline-none transition-colors duration-300`;

  return (
    <section id="contact" className="relative bg-black py-24 md:py-32 grain">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            Book Your Event
          </h2>
          <div className="w-12 h-[2px] bg-white mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('name', { required: true })}
                  placeholder="Your Name *"
                  className={inputClass(errors.name)}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1 font-body">Name is required</p>}
              </div>
              <div>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  placeholder="Email Address *"
                  className={inputClass(errors.email)}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 font-body">
                    {errors.email.type === 'pattern' ? 'Invalid email' : 'Email is required'}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                {...register('phone')}
                placeholder="Phone Number"
                className={inputClass(false)}
              />
              <input
                {...register('eventDate')}
                type="date"
                className={inputClass(false)}
              />
            </div>

            <select
              {...register('eventType')}
              className={`${inputClass(false)} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-black text-white/40">
                Event Type
              </option>
              {eventTypes.map((type) => (
                <option key={type} value={type} className="bg-black text-white">
                  {type}
                </option>
              ))}
            </select>

            <textarea
              {...register('message')}
              rows={5}
              placeholder="Tell us about your event..."
              className={`${inputClass(false)} resize-none`}
            />

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm font-body">
                <CheckCircle size={16} />
                <span>Message sent! We&apos;ll be in touch soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                <AlertCircle size={16} />
                <span>Something went wrong. Please try again or call us.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-primary text-sm px-10 py-4 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={14} />
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-white text-sm font-bold uppercase tracking-[0.15em] mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <a href="tel:+639924244721" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <Phone size={16} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-body font-light">0992 424 4721</span>
                </a>
                <a href="mailto:njworks2025@gmail.com" className="flex items-center gap-4 text-white/50 hover:text-white transition-colors group">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <Mail size={16} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-body font-light">njworks2025@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-white/50">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-body font-light">Bulacan, Philippines</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-display text-white text-sm font-bold uppercase tracking-[0.15em] mb-4">
                Follow Us
              </h3>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="border border-white/5 p-6">
              <p className="text-white/25 text-xs font-body font-light leading-relaxed">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
                Weekend and holiday bookings fill up fast — reach out early to secure your date!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
