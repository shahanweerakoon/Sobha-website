/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Core Single Bedroom Apartment Suite Data for Sobha Realty Sri Lanka
 */

export interface SpaceBreakdown {
  title: string;
  imageKey: string;
  description: string;
  features: string[];
}

export interface Residence {
  id: string;
  slug: string;
  type: 'apartment-suite' | 'bedroom-suite';
  name: string;
  subtitle: string;
  tagline: string;
  heroImageKey: string;
  secondaryImageKey: string;
  
  // Specs
  bedrooms: number | string;
  bathrooms: number | string;
  sizeSqFt: number;
  sizeSqM: number;
  guestCapacity: number;
  view: string;
  floor: string;
  bedConfiguration?: string;
  
  // Reservation Rate Data (Price starting from 5500 for 4 hours)
  startingPriceLKR: number;
  startingDurationHours: number;
  currency: string;
  availability: 'Available' | 'Reserved' | 'Limited Availability';
  
  // Editorial description
  overview: string;
  architecturalNote: string;
  
  // Detailed spaces for individual property page
  spaces: {
    livingArea: SpaceBreakdown;
    bedroom: SpaceBreakdown;
    kitchen?: SpaceBreakdown;
    bathroom: SpaceBreakdown;
    balcony: SpaceBreakdown;
  };
  
  // Amenities list
  amenities: {
    category: string;
    items: string[];
  }[];
  
  floorPlanSummary: string[];
}

export const SINGLE_BEDROOM_APARTMENT_SUITE: Residence = {
  id: 'single-bedroom-apt-01',
  slug: 'single-bedroom-apartment-suite',
  type: 'apartment-suite',
  name: 'The Luxury Single Bedroom Apartment Suite',
  subtitle: 'A premier single-bedroom apartment residence offering uninterrupted ocean views, marble bath, and complete privacy.',
  tagline: 'Refined single-bedroom apartment living crafted with uncompromising detail',
  heroImageKey: '[APARTMENT_SUITE_IMAGE]',
  secondaryImageKey: '[BEDROOM_SUITE_IMAGE]',
  bedrooms: '1 Single Bedroom',
  bathrooms: '1 En-Suite Marble Bath',
  sizeSqFt: 850,
  sizeSqM: 79,
  guestCapacity: 2,
  view: 'Panoramic Indian Ocean & Colombo Skyline',
  floor: 'Floor 18',
  bedConfiguration: '1 Ultra-Plush King Bed',
  startingPriceLKR: 5500,
  startingDurationHours: 4,
  currency: 'Rs.',
  availability: 'Available',
  overview: 'The Luxury Single Bedroom Apartment Suite is Sobha Sri Lanka’s flagship single-residence accommodation. Perfectly engineered for discerning guests seeking high-end apartment living, quiet work environments, or relaxing getaways. Enjoy floor-to-ceiling soundproof glass, an integrated living pavilion, a marble bathroom, and a private ocean balcony.',
  architecturalNote: 'Designed with Sobha’s backward integration principles—featuring Italian marble flooring, custom teak joinery, acoustic double glazing, and ambient climate controls.',
  spaces: {
    livingArea: {
      title: 'Integrated Living Salon & Work Desk',
      imageKey: '[APARTMENT_SUITE_IMAGE]',
      description: 'An open-concept living pavilion featuring bespoke Italian seating, high-speed fiber connectivity, ergonomic work desk, and 55" 4K Smart TV.',
      features: ['Bespoke Italian linen seating', 'Ergonomic walnut desk', 'Acoustic ceiling sound isolation', 'Curated Sri Lankan artwork']
    },
    bedroom: {
      title: 'Private Master Bedroom Sanctuary',
      imageKey: '[BEDROOM_SUITE_IMAGE]',
      description: 'A serene single bedroom chamber with custom plush king bedding, 600-thread-count Egyptian cotton linens, and motorized blackout blinds.',
      features: ['Custom king pocket spring mattress', 'Walk-in wardrobe closet', 'Independent multi-zone climate control', 'Direct ocean balcony access']
    },
    kitchen: {
      title: 'Kitchenette & Refreshment Bar',
      imageKey: '[KITCHEN_IMAGE]',
      description: 'Equipped with Nespresso coffee bar, microwave, mini-refrigerator, induction cooktop, and premium knife and glassware collection.',
      features: ['Nespresso coffee station', 'Integrated compact refrigerator', 'Induction heating & microwave', 'Complimentary Ceylon tea selection']
    },
    bathroom: {
      title: 'En-Suite Marble Spa Bathroom',
      imageKey: '[BATHROOM_IMAGE]',
      description: 'En-suite bath lined with white Statuario marble, featuring a thermostatic rain shower, freestanding tub, and premium bath amenities.',
      features: ['Thermostatic rain shower with body jets', 'Freestanding soaking tub', 'Heated vanity mirror', 'L’Occitane bath products']
    },
    balcony: {
      title: 'Private Sunset Ocean Balcony',
      imageKey: '[BALCONY_IMAGE]',
      description: 'A private covered balcony offering front-row seating for Colombo’s famous Indian Ocean sunsets.',
      features: ['Teak outdoor seats & coffee table', 'Frameless safety glass balustrades', 'Gentle evening sea breeze', 'Warm architectural downlighting']
    }
  },
  amenities: [
    {
      category: 'Single Apartment Features',
      items: [
        'Private smart lock entry',
        'Flexi reservation options',
        'Gigabit fiber optic Wi-Fi',
        'Daily housekeeping on request',
        'In-suite digital safe & iron'
      ]
    },
    {
      category: 'Hospitality & Building Privileges',
      items: [
        '24/7 VIP Concierge & Security',
        'Rooftop Infinity Pool Access',
        'Fully equipped Fitness Gym',
        'Complimentary Resident Parking',
        'Airport Chauffeur Transfer available'
      ]
    }
  ],
  floorPlanSummary: [
    'Master Bedroom Chamber (380 sq ft)',
    'Living Salon & Work Nook (300 sq ft)',
    'Marble En-Suite Bathroom (110 sq ft)',
    'Private Ocean Balcony (60 sq ft)'
  ]
};

export const APARTMENT_SUITES: Residence[] = [SINGLE_BEDROOM_APARTMENT_SUITE];
export const BEDROOM_SUITES: Residence[] = [SINGLE_BEDROOM_APARTMENT_SUITE];
export const ALL_RESIDENCES: Residence[] = [SINGLE_BEDROOM_APARTMENT_SUITE];

export function getResidenceBySlug(slug: string): Residence {
  return SINGLE_BEDROOM_APARTMENT_SUITE;
}
