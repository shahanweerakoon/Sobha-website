/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Gallery Data
 * Spec #16 Categories:
 * Architecture, Apartments, Bedrooms, Living Spaces, Kitchens, Bathrooms, Amenities, Views, Lifestyle
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'architecture' | 'apartments' | 'bedrooms' | 'living' | 'kitchen' | 'bathrooms' | 'amenities' | 'views' | 'lifestyle';
  categoryLabel: string;
  imageKey: string;
  caption: string;
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Crown Penthouse Above the Waves',
    category: 'architecture',
    categoryLabel: 'Architecture',
    imageKey: '[PENTHOUSE_OCEAN_IMAGE]',
    caption: 'Cantilevered architectural terraces rising above the Colombo shoreline.',
    location: 'Floor 28, Marine Drive'
  },
  {
    id: 'gal-02',
    title: 'Grand Living Salon',
    category: 'living',
    categoryLabel: 'Living Spaces',
    imageKey: '[LIVING_ROOM_IMAGE]',
    caption: 'Double-height volume with natural travertine and curated Sri Lankan art.',
    location: 'The Grand Ocean Penthouse'
  },
  {
    id: 'gal-03',
    title: 'Skyline Master Suite',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    imageKey: '[BEDROOM_IMAGE]',
    caption: 'Acoustic sanctuary with floor-to-ceiling glass and plush king bedding.',
    location: 'Ceylon Horizon Residence'
  },
  {
    id: 'gal-04',
    title: 'Rooftop Infinity Edge',
    category: 'amenities',
    categoryLabel: 'Amenities',
    imageKey: '[AMENITIES_POOL_IMAGE]',
    caption: 'Heated 25m swimming pool merging with the Indian Ocean horizon at twilight.',
    location: 'Rooftop Sky Deck'
  },
  {
    id: 'gal-05',
    title: 'Custom Chef Show Kitchen',
    category: 'kitchen',
    categoryLabel: 'Kitchens',
    imageKey: '[KITCHEN_IMAGE]',
    caption: 'Integrated Miele appliances and quartz waterfall preparation island.',
    location: 'Grand Ocean Penthouse'
  },
  {
    id: 'gal-06',
    title: 'Statuario Marble Soaking Bath',
    category: 'bathrooms',
    categoryLabel: 'Bathrooms',
    imageKey: '[BATHROOM_IMAGE]',
    caption: 'Freestanding soaking tub overlooking open ocean sunsets.',
    location: 'Royal Oceanfront Suite'
  },
  {
    id: 'gal-07',
    title: 'Sunset Veranda Outlook',
    category: 'views',
    categoryLabel: 'Views',
    imageKey: '[BALCONY_IMAGE]',
    caption: 'Deep covered terrace with panoramic 270-degree ocean views.',
    location: 'Floor 22 Balcony'
  },
  {
    id: 'gal-08',
    title: 'The Contemporary Facade',
    category: 'architecture',
    categoryLabel: 'Architecture',
    imageKey: '[EXTERIOR_IMAGE]',
    caption: 'Precision-engineered facade optimized for tropical cross-ventilation.',
    location: 'Marine Drive Exterior'
  },
  {
    id: 'gal-09',
    title: 'The Ceylon Horizon Salon',
    category: 'apartments',
    categoryLabel: 'Apartments',
    imageKey: '[APARTMENT_SUITE_IMAGE]',
    caption: 'Contemporary residence balancing European geometry with tropical materials.',
    location: 'Ceylon Horizon Residence'
  },
  {
    id: 'gal-10',
    title: 'Royal Oceanfront Master Chamber',
    category: 'bedrooms',
    categoryLabel: 'Bedrooms',
    imageKey: '[ROYAL_OCEAN_BEDROOM_IMAGE]',
    caption: 'Private bedroom suite with direct ocean balcony and en-suite spa.',
    location: 'Royal Oceanfront Suite'
  },
  {
    id: 'gal-11',
    title: 'Technogym Fitness Studio',
    category: 'amenities',
    categoryLabel: 'Amenities',
    imageKey: '[AMENITIES_FITNESS_IMAGE]',
    caption: 'Private resident fitness studio with ocean vistas.',
    location: 'Level 5 Wellness'
  },
  {
    id: 'gal-12',
    title: 'Tropical Podium Veranda',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    imageKey: '[LIFESTYLE_IMAGE_1]',
    caption: 'Where Sri Lanka’s botanical heritage meets contemporary architecture.',
    location: 'Podium Garden Terrace'
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'apartments', label: 'Apartments' },
  { id: 'bedrooms', label: 'Bedrooms' },
  { id: 'living', label: 'Living Spaces' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'views', label: 'Views' },
  { id: 'lifestyle', label: 'Lifestyle' },
] as const;
