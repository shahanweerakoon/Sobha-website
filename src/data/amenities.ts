/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Verified Amenities Data
 */

export interface AmenityCategory {
  id: string;
  name: string;
  subtitle: string;
  imageKey: string;
  items: {
    title: string;
    description: string;
    highlight?: string;
  }[];
}

export const AMENITIES_DATA: AmenityCategory[] = [
  {
    id: 'residence',
    name: 'Residence',
    subtitle: 'Meticulously crafted living environments defined by European precision and tropical ease.',
    imageKey: '[LIVING_ROOM_IMAGE]',
    items: [
      {
        title: 'Premium Backward Integrated Interiors',
        description: 'Engineered entirely in-house by Sobha—from German-precision joinery and custom Italian marble to acoustic double-glazed curtain walls.',
        highlight: 'Zero Compromise Craft'
      },
      {
        title: 'Fully Furnished & Curated Living Spaces',
        description: 'Bespoke European furniture, natural organic fabrics, artisan Sri Lankan teak accents, and custom architectural lighting scenes.',
        highlight: 'Turnkey Luxury'
      },
      {
        title: 'Multi-Zone Whisper Climate Control',
        description: 'High-efficiency inverter air conditioning paired with fresh air filtration and acoustic sound isolation.',
        highlight: 'Optimal Comfort'
      },
      {
        title: 'Gigabit Fiber-Optic Wi-Fi',
        description: 'Dedicated high-speed enterprise optical connectivity in every residence with seamless coverage across all private terraces.',
        highlight: 'Seamless Connectivity'
      },
      {
        title: 'Chef Kitchens & European Appliances',
        description: 'Induction cooktops, convection ovens, Sub-Zero or Bosch refrigeration, and bespoke quartz islands.',
        highlight: 'Culinary Precision'
      },
      {
        title: 'Smart Home Automation',
        description: 'Integrated touch panels and smartphone control for motorized drapes, ambient mood lighting, and temperature scenes.',
        highlight: 'Intelligent Living'
      }
    ]
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    subtitle: 'Elevated leisure and wellness spaces designed to restore, energize, and inspire.',
    imageKey: '[AMENITIES_POOL_IMAGE]',
    items: [
      {
        title: 'Rooftop Ocean Infinity Pool',
        description: 'An architectural 25-meter temperature-controlled infinity pool cantilevered over the Indian Ocean with submerged loungers.',
        highlight: 'Panoramic Views'
      },
      {
        title: 'Technogym Artis Fitness Sanctuary',
        description: 'State-of-the-art strength, functional training, and cardiovascular equipment, alongside an open-air yoga pavilion.',
        highlight: '24/7 Wellness'
      },
      {
        title: 'Executive Residents Club & Cigar Lounge',
        description: 'Walnut-paneled private lounge offering quiet reading alcoves, private boardroom facilities, and evening cocktail service.',
        highlight: 'Private Member Ethos'
      },
      {
        title: 'Thermal Wellness Suites & Saunas',
        description: 'Finnish dry saunas, eucalyptus steam chambers, and private experiential rain showers for complete post-workout restoration.',
        highlight: 'Thermal Recovery'
      },
      {
        title: 'Lush Botanical Podium Gardens',
        description: 'Landscaped tropical courtyards featuring indigenous flora, tranquil reflection water ponds, and shaded walking paths.',
        highlight: 'Tropical Modernism'
      }
    ]
  },
  {
    id: 'convenience',
    name: 'Convenience',
    subtitle: 'Discreet, intuitive five-star services tailored around your peace of mind.',
    imageKey: '[EXPERIENCE_ARRIVE_IMAGE]',
    items: [
      {
        title: '24/7 Private Concierge & Lifestyle Desk',
        description: 'Dedicated residential concierges for private aviation, dining reservations, private yacht charters, and bespoke island excursions.',
        highlight: 'Round-the-Clock Assistance'
      },
      {
        title: 'Uncompromising Multi-Tier Security',
        description: 'Biometric access controls, 24/7 monitored premises, private resident elevators, and secure private underground parking bays.',
        highlight: 'Absolute Discretion'
      },
      {
        title: 'Professional Housekeeping & Linen Care',
        description: 'Regular white-glove housekeeping, turndown service, eco-conscious laundry, and same-day dry cleaning delivery.',
        highlight: 'Hotel-Grade Care'
      },
      {
        title: 'Valet Parking & EV Supercharging',
        description: 'Complimentary valet service for residents and guests, complete with dedicated multi-voltage electric vehicle charging stalls.',
        highlight: 'Effortless Arrival'
      },
      {
        title: 'Airport VIP Chauffeur Transfer',
        description: 'Direct door-to-door luxury transfers via the Katunayake Expressway directly to Colombo Bandaranaike International Airport.',
        highlight: 'Seamless Transit'
      }
    ]
  }
];
