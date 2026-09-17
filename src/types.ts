export type ServiceCategory = 
  | 'all'
  | 'cuts-fades'
  | 'texture-perms'
  | 'beard-lineup'
  | 'vip-grooming';

export interface BarberService {
  id: string;
  category: ServiceCategory;
  title: string;
  price: number;
  durationMinutes: number;
  description: string;
  techniqueHighlights: string[];
  popular?: boolean;
  featuredInHero?: boolean;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  technique: string;
}

export interface BookingFormState {
  serviceId: string;
  barber: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  hairType: string;
  notes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}
