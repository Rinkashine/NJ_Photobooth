import { Camera, RotateCw, RectangleVertical, Wind } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Classic Booth',
    icon: Camera,
    description: 'Our signature enclosed photo booth delivers the timeless charm of classic photo strips with modern digital quality.',
    features: ['High-res DSLR camera', 'Instant prints', 'Digital copies', 'Custom backdrops'],
  },
  {
    id: 2,
    title: '360° Booth',
    icon: RotateCw,
    description: 'Step onto the platform and let our rotating camera capture stunning slow-motion videos from every angle.',
    features: ['Slow-motion video', 'Instant sharing', 'Red carpet platform', 'Custom overlays'],
  },
  {
    id: 3,
    title: 'Mirror Booth',
    icon: RectangleVertical,
    description: 'An interactive full-length mirror that guides guests through a magical photo experience with animations.',
    features: ['Touch screen mirror', 'Animated prompts', 'Full-length photos', 'Signature capture'],
  },
  {
    id: 4,
    title: 'Open Air Booth',
    icon: Wind,
    description: 'Maximum flexibility with our open-air setup — perfect for large groups and creative backdrops.',
    features: ['Fits large groups', 'Custom backdrops', 'GIF & boomerang', 'Social sharing'],
  },
];

export default services;
