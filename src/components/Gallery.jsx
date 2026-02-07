import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Expand } from 'lucide-react';

// Auto-import all images from each category folder
// Just drop images into src/assets/gallery/<category>/ and they appear automatically
const weddingImages = import.meta.glob('../assets/gallery/weddings/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const birthdayImages = import.meta.glob('../assets/gallery/birthdays/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const partyImages = import.meta.glob('../assets/gallery/parties/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const baptismImages = import.meta.glob('../assets/gallery/baptism/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

function buildGallery(images, category) {
  return Object.entries(images).map(([path, src]) => {
    const filename = path.split('/').pop().replace(/\.[^.]+$/, '');
    return {
      id: `${category}-${filename}`,
      src,
      category,
      alt: `${category} - ${filename.replace(/[-_]/g, ' ')}`,
    };
  });
}

const allImages = [
  ...buildGallery(weddingImages, 'Weddings'),
  ...buildGallery(birthdayImages, 'Birthdays'),
  ...buildGallery(partyImages, 'Parties'),
  ...buildGallery(baptismImages, 'Baptism'),
];

const categories = ['All', 'Weddings', 'Baptism', 'Birthdays', 'Parties'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () => filter === 'All' ? allImages : allImages.filter((img) => img.category === filter),
    [filter]
  );

  const slides = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section id="gallery" className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-black/30 text-xs font-display font-bold tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-black text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            Our Work
          </h2>
          <div className="w-12 h-[2px] bg-black mx-auto" />
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-display font-bold tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                filter === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-black/40 border-black/10 hover:border-black hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-black/30 font-body text-sm">
              No photos yet. Add images to <code className="text-black/50 bg-gray-100 px-2 py-1 text-xs">src/assets/gallery/{filter.toLowerCase()}/</code>
            </p>
          </div>
        ) : (
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1"
          >
            {filtered.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className="group relative cursor-pointer overflow-hidden break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <Expand size={20} className="text-white" />
                    <span className="text-white/80 text-[10px] font-display font-bold tracking-[0.2em] uppercase">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
