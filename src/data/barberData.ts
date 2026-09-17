import { BarberService, TransformationItem, Testimonial } from '../types';

export const STUDIO_INFO = {
  name: 'The Obsidian Edge',
  tagline: 'Transform Your Look. Master Precision.',
  masterBarber: 'Alex Coutinho',
  title: 'NJ Barber & Texture Specialist',
  address: '1235 W. Chestnut St',
  cityStateZip: 'Union, NJ 07083',
  fullAddress: '1235 W. Chestnut St, Union, NJ 07083',
  phone: '(908) 583-9244',
  phoneFormatted: '9085839244',
  email: 'booking@theobsidianedge.com',
  instagram: '@theobsidianedge',
  instagramUrl: 'https://instagram.com/theobsidianedge',
  facebook: 'Obsidianedgenj',
  facebookUrl: 'https://facebook.com/Obsidianedgenj',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2917983637175!2d-74.2798150235338!3d40.69089093898687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad8e5b4b10b9%3A0x1b79d28892fca360!2s1235%20W%20Chestnut%20St%2C%20Union%2C%20NJ%2007083!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  hours: [
    { day: 'Monday – Thursday', time: '9:00 AM – 7:30 PM', status: 'Open' },
    { day: 'Friday', time: '8:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Saturday', time: '8:00 AM – 6:00 PM', status: 'Peak Times' },
    { day: 'Sunday', time: '10:00 AM – 4:00 PM', status: 'Appt Only' },
  ],
  amenities: [
    'Private VIP Cutting Suite',
    'Cold Craft Beverages & Espresso',
    'Free On-Site Dedicated Parking',
    'Hot Botanical Steam Towel Service',
    'Cashless & Contactless Payments',
    'Precision Consultation First'
  ]
};

export const SERVICES: BarberService[] = [
  {
    id: 'precision-fade',
    category: 'cuts-fades',
    title: 'The Precision Fade',
    price: 35.00,
    durationMinutes: 40,
    description: 'Signature skin fade or taper tailored to your head shape. Seamless blend from skin to desired length with straight razor finish.',
    techniqueHighlights: ['Zero-gap foil shaver', 'Custom taper/skin blend', 'Hot lather razor neck clean', 'Matte texture styling finish'],
    popular: true,
    featuredInHero: true,
  },
  {
    id: 'texture-styling',
    category: 'texture-perms',
    title: 'Texture Styling & Flow Cut',
    price: 45.00,
    durationMinutes: 45,
    description: 'Point-cutting, shear channeling, and texturizing powder application to create weightless volume, messy crops, or modern curtain flows.',
    techniqueHighlights: ['Japanese dry-cutting shears', 'Volume debulking without frizz', 'Natural movement sculpting', 'Styling education demo'],
    popular: true,
    featuredInHero: true,
  },
  {
    id: 'beard-sculpt',
    category: 'beard-lineup',
    title: 'Beard Sculpt & Razor Edge',
    price: 25.00,
    durationMinutes: 30,
    description: 'Crisp cheek and jawline razor definition, symmetry alignment, length graduation, and organic conditioning beard oil infusion.',
    techniqueHighlights: ['Pre-shave eucalyptus oil', 'Hot steam towel prep', 'Straight razor edge-up', 'Cold towel pore closure'],
    popular: false,
    featuredInHero: true,
  },
  {
    id: 'modern-texture-perm',
    category: 'texture-perms',
    title: 'Modern Korean / Curly Texture Perm',
    price: 110.00,
    durationMinutes: 90,
    description: 'Transform limp or pin-straight hair into effortless wavy texture, relaxed curls, or root-lifted Korean drop perms.',
    techniqueHighlights: ['Custom rod diameter mapping', 'Gentle low-ammonia formula', 'Post-perm deep hydration', 'Low-maintenance air dry'],
    popular: true,
  },
  {
    id: 'vip-grooming-package',
    category: 'vip-grooming',
    title: 'The Obsidian VIP Package',
    price: 80.00,
    durationMinutes: 75,
    description: 'The complete luxury experience: Precision fade, custom shear texturizing, full beard sculpting, double hot lather steam shave, and black charcoal peel-off mask.',
    techniqueHighlights: ['Full precision cut & texture', 'Complete beard architecture', 'Double hot steam towel session', 'Exfoliating skin refresh', 'Complimentary drink'],
    popular: true,
    featuredInHero: true,
  },
  {
    id: 'taper-fringe',
    category: 'cuts-fades',
    title: 'Textured Crop & Low Taper',
    price: 40.00,
    durationMinutes: 45,
    description: 'Blunt or jagged micro-fringe with heavy top texture, paired with an ultra-clean low taper on temples and nape.',
    techniqueHighlights: ['Micro-sheared fringe alignment', 'Low blowout taper', 'Matte clay separation', 'Hairline reinforcement'],
    popular: false,
  },
  {
    id: 'razor-lineup-steam',
    category: 'beard-lineup',
    title: 'Straight Razor Lineup & Steam',
    price: 20.00,
    durationMinutes: 20,
    description: 'Sharp surgical line-up around the temples, sideburns, and neck with soothing hot towel compress and talc finish.',
    techniqueHighlights: ['Surgical feather blade', 'Skin stretching technique', 'Menthol aftershave splash'],
    popular: false,
  },
  {
    id: 'haircut-beard-combo',
    category: 'cuts-fades',
    title: 'Master Cut + Beard Sculpt Combo',
    price: 55.00,
    durationMinutes: 60,
    description: 'Our most requested appointment: comprehensive precision fade or scissor cut combined with a tailored beard sculpt and razor lineup.',
    techniqueHighlights: ['Seamless temple-to-beard blend', 'Straight razor perimeter', 'Styling product application'],
    popular: true,
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'trans-1',
    title: 'Heavy Bulky Straight to Effortless Textured Crop',
    category: 'Texture Styling',
    tag: 'Texture Perm & Crop',
    beforeImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    description: 'Deconstructed bulky crown weight using Japanese point-cutting techniques. Added custom root lift and defined matte texture separation.',
    technique: 'Point-Cut Shear Work + Matte Clay'
  },
  {
    id: 'trans-2',
    title: 'Low Skin Taper with Natural Curls & Crisp Line',
    category: 'Precision Fade',
    tag: 'Low Taper Fade',
    beforeImage: 'https://images.unsplash.com/photo-1517832606589-7629c3ab844c?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    description: 'Sculpted temple and nape taper keeping natural curly bulk on top. Surgical razor lineup across hairline for immaculate contrast.',
    technique: 'Zero-Gap Shaver + Straight Razor Lineup'
  },
  {
    id: 'trans-3',
    title: 'Scruffy Patchy Beard to Geometric Sharp Beard Sculpt',
    category: 'Beard Sculpting',
    tag: 'Beard Sculpt',
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    description: 'Straightened side cheek lines, carved under-jaw symmetry, and blended sideburns smoothly into the taper for an elongated jawline.',
    technique: 'Freehand Clipper Gradation + Hot Steam Shave'
  },
  {
    id: 'trans-4',
    title: 'Classic Pompadour to Modern Textured Burst Fade',
    category: 'Precision Fade',
    tag: 'Burst Fade & Texture',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    description: 'Curved burst fade around ears accentuating natural head shape, connected with layered shear flow on crown.',
    technique: 'Burst Fade + Slide Cutting'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Ramirez',
    location: 'Union, NJ',
    rating: 5,
    comment: 'Alex is hands down the best barber in Union County. My hair is notoriously pin-straight and difficult to style, but his texture work gave my hair movement I never thought possible. 10/10 precision.',
    service: 'Texture Styling & Precision Fade',
    date: '3 days ago'
  },
  {
    id: 't-2',
    name: 'Derrick Vance',
    location: 'Kenilworth, NJ',
    rating: 5,
    comment: 'The Obsidian VIP package is top tier luxury. The hot towels, straight razor lineup, and beard sculpting are unmatched. The studio ambiance is modern, dark, and super clean.',
    service: 'The Obsidian VIP Package',
    date: '1 week ago'
  },
  {
    id: 't-3',
    name: 'Julian Chen',
    location: 'Springfield, NJ',
    rating: 5,
    comment: 'Booked Alex for a Korean textured perm and low taper. The curls came out subtle and natural just like I wanted. He explains exactly how to style it at home with minimal effort.',
    service: 'Modern Texture Perm',
    date: '2 weeks ago'
  }
];
