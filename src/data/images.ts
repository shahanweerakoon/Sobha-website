/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Image Registry & Asset Management System
 * 
 * Spec #25 requirement:
 * "Create an easy image management structure. Every major image location
 * should clearly support replacement with actual Sobha property photography.
 * Use placeholder labels during development such as:
 * [HERO_IMAGE], [APARTMENT_SUITE_IMAGE], [BEDROOM_SUITE_IMAGE],
 * [LIVING_ROOM_IMAGE], [BEDROOM_IMAGE], [KITCHEN_IMAGE],
 * [BATHROOM_IMAGE], [BALCONY_IMAGE], [EXTERIOR_IMAGE],
 * [LOCATION_IMAGE], [AMENITIES_IMAGE]"
 */

import colomboApartmentHero from '../assets/images/colombo-apartment-hero.jpg';

export interface ImageAsset {
  key: string;
  label: string;
  category: 'architecture' | 'apartments' | 'bedrooms' | 'living' | 'kitchen' | 'bathrooms' | 'amenities' | 'views' | 'lifestyle' | 'location';
  aspectRatio: '16:9' | '4:3' | '3:2' | '1:1' | '21:9';
  url: string;
  alt: string;
  caption?: string;
  photographerCredit?: string;
}

export type ImageKey = 
  | '[HERO_IMAGE]'
  | '[APARTMENT_SUITE_IMAGE]'
  | '[BEDROOM_SUITE_IMAGE]'
  | '[LIVING_ROOM_IMAGE]'
  | '[BEDROOM_IMAGE]'
  | '[KITCHEN_IMAGE]'
  | '[BATHROOM_IMAGE]'
  | '[BALCONY_IMAGE]'
  | '[EXTERIOR_IMAGE]'
  | '[LOCATION_IMAGE]'
  | '[AMENITIES_IMAGE]'
  | '[AMENITIES_POOL_IMAGE]'
  | '[AMENITIES_FITNESS_IMAGE]'
  | '[AMENITIES_LOUNGE_IMAGE]'
  | '[LIFESTYLE_IMAGE_1]'
  | '[LIFESTYLE_IMAGE_2]'
  | '[EXPERIENCE_ARRIVE_IMAGE]'
  | '[EXPERIENCE_UNWIND_IMAGE]'
  | '[EXPERIENCE_LIVE_IMAGE]'
  | '[EXPERIENCE_DISCOVER_IMAGE]'
  | '[PENTHOUSE_OCEAN_IMAGE]'
  | '[CEYLON_HORIZON_IMAGE]'
  | '[AZURE_PALM_IMAGE]'
  | '[METROPOLITAN_TERRACE_IMAGE]'
  | '[ROYAL_OCEAN_BEDROOM_IMAGE]'
  | '[COLOMBO_SKYLINE_BEDROOM_IMAGE]'
  | '[TROPICAL_TERAZZA_BEDROOM_IMAGE]'
  | '[EXECUTIVE_HARBOR_BEDROOM_IMAGE]'
  | '[FULLSCREEN_MOMENT_1]'
  | '[FULLSCREEN_MOMENT_2]';

export const INITIAL_IMAGE_REGISTRY: Record<ImageKey, ImageAsset> = {
  '[HERO_IMAGE]': {
    key: '[HERO_IMAGE]',
    label: 'Hero Flagship Residence View',
    category: 'architecture',
    aspectRatio: '16:9',
    url: colomboApartmentHero,
    alt: 'Sobha Sri Lanka luxury residential penthouse living area overlooking Colombo coastline and Indian Ocean',
    caption: 'Elevated coastal residential architecture with floor-to-ceiling glass in Colombo, Sri Lanka'
  },
  '[APARTMENT_SUITE_IMAGE]': {
    key: '[APARTMENT_SUITE_IMAGE]',
    label: 'Apartment Suites Collection',
    category: 'apartments',
    aspectRatio: '16:9',
    url: colomboApartmentHero,
    alt: 'Sobha Sri Lanka spacious luxury apartment living salon overlooking Colombo shoreline',
    caption: 'Spacious private residences engineered for effortless, dignified living in Colombo'
  },
  '[BEDROOM_SUITE_IMAGE]': {
    key: '[BEDROOM_SUITE_IMAGE]',
    label: 'Apartment Bedroom Suites Collection',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=85',
    alt: 'Sobha private master bedroom suite with bespoke headboard and private terrace',
    caption: 'Private bedroom sanctuaries with en-suite marble baths and ocean breezes'
  },
  '[LIVING_ROOM_IMAGE]': {
    key: '[LIVING_ROOM_IMAGE]',
    label: 'Grand Architectural Living Area',
    category: 'living',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Expansive living room with travertine stone floors and warm ivory palette',
    caption: 'Double-height ceiling salon with bespoke furniture and curated tropical greenery'
  },
  '[BEDROOM_IMAGE]': {
    key: '[BEDROOM_IMAGE]',
    label: 'Master Bedroom Retreat',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85',
    alt: 'Master bedroom suite with king bed, ambient lighting, and panoramic windows',
    caption: 'Quiet luxury finishes and blackout automated drapes for restful comfort'
  },
  '[KITCHEN_IMAGE]': {
    key: '[KITCHEN_IMAGE]',
    label: 'Custom Chef Kitchen & Bar',
    category: 'kitchen',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Architectural kitchen island with Miele appliances and quartz waterfall counters',
    caption: 'Integrated state-of-the-art European appliances and wine storage'
  },
  '[BATHROOM_IMAGE]': {
    key: '[BATHROOM_IMAGE]',
    label: 'En-Suite Marble Soaking Bath',
    category: 'bathrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=85',
    alt: 'Freestanding soaking tub overlooking coastal views with brushed bronze hardware',
    caption: 'Imported Italian marble, rain showers, and heated vanity mirrors'
  },
  '[BALCONY_IMAGE]': {
    key: '[BALCONY_IMAGE]',
    label: 'Deep Panoramic Ocean Balcony',
    category: 'views',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    alt: 'Private outdoor residential terrace with infinity glass railing over Colombo coast',
    caption: 'Generous covered veranda for sunset reflection and morning Ceylon tea'
  },
  '[EXTERIOR_IMAGE]': {
    key: '[EXTERIOR_IMAGE]',
    label: 'Sobha Sri Lanka Architectural Tower',
    category: 'architecture',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85',
    alt: 'Striking contemporary residential facade rising above the Colombo shoreline',
    caption: 'Precision-engineered facade celebrating tropical light and natural airflow'
  },
  '[LOCATION_IMAGE]': {
    key: '[LOCATION_IMAGE]',
    label: 'Colombo Coastal Skyline & Oceanfront',
    category: 'location',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2000&q=85',
    alt: 'Colombo Sri Lanka vibrant oceanfront boulevard and modern skyline',
    caption: 'Prime Marine Drive address in prestigious Colombo 03'
  },
  '[AMENITIES_IMAGE]': {
    key: '[AMENITIES_IMAGE]',
    label: 'Wellness & Leisure Amenities',
    category: 'amenities',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=85',
    alt: 'Rooftop infinity swimming pool reflecting evening twilight and ocean waves',
    caption: 'Comprehensive five-star residential wellness amenities and private club'
  },
  '[AMENITIES_POOL_IMAGE]': {
    key: '[AMENITIES_POOL_IMAGE]',
    label: 'Skyline Infinity Pool',
    category: 'amenities',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=2000&q=85',
    alt: 'Ocean-facing rooftop swimming pool with submerged sun loungers',
    caption: 'Temperature-controlled lap pool overlooking the vast Indian Ocean'
  },
  '[AMENITIES_FITNESS_IMAGE]': {
    key: '[AMENITIES_FITNESS_IMAGE]',
    label: 'Technogym Fitness Studio',
    category: 'amenities',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85',
    alt: 'Private fitness sanctuary equipped with Technogym Artis series machines',
    caption: 'State-of-the-art strength, cardio, and dedicated yoga studio'
  },
  '[AMENITIES_LOUNGE_IMAGE]': {
    key: '[AMENITIES_LOUNGE_IMAGE]',
    label: 'Executive Residents Club & Cigar Lounge',
    category: 'amenities',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85',
    alt: 'Private club lounge with walnut paneling and plush leather armchairs',
    caption: 'Intimate social spaces and private dining rooms for resident hosting'
  },
  '[LIFESTYLE_IMAGE_1]': {
    key: '[LIFESTYLE_IMAGE_1]',
    label: 'Tropical Modernist Courtyard',
    category: 'lifestyle',
    aspectRatio: '4:3',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Sun-drenched tropical residential veranda with lush palms and minimalist stone',
    caption: 'Where Sri Lanka’s lush botanical heritage meets contemporary architecture'
  },
  '[LIFESTYLE_IMAGE_2]': {
    key: '[LIFESTYLE_IMAGE_2]',
    label: 'Colombo Waterfront Sunset Dining',
    category: 'lifestyle',
    aspectRatio: '4:3',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    alt: 'Luxury oceanside dining terrace with warm ambient candles and ocean breeze',
    caption: 'Vibrant dining, cultural galleries, and coastal promenade minutes away'
  },
  '[EXPERIENCE_ARRIVE_IMAGE]': {
    key: '[EXPERIENCE_ARRIVE_IMAGE]',
    label: 'The Grand Porte-Cochère & Lobby',
    category: 'lifestyle',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    alt: 'Arrival motor court and soaring lobby with concierge reception',
    caption: 'Begin your stay in an environment designed to impress'
  },
  '[EXPERIENCE_UNWIND_IMAGE]': {
    key: '[EXPERIENCE_UNWIND_IMAGE]',
    label: 'Quiet Respite & Private Spa',
    category: 'lifestyle',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85',
    alt: 'Tranquil thermal suites and private relaxation cabana',
    caption: 'Find your own rhythm in beautifully considered spaces'
  },
  '[EXPERIENCE_LIVE_IMAGE]': {
    key: '[EXPERIENCE_LIVE_IMAGE]',
    label: 'Residential Living Freedom',
    category: 'lifestyle',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85',
    alt: 'Airy residential dining and living area opening onto private veranda',
    caption: 'Enjoy the freedom, privacy, and comfort of a private residence'
  },
  '[EXPERIENCE_DISCOVER_IMAGE]': {
    key: '[EXPERIENCE_DISCOVER_IMAGE]',
    label: 'Colombo Coastal Address',
    category: 'lifestyle',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
    alt: 'Golden light reflecting on the Indian Ocean coast of Sri Lanka',
    caption: 'Experience the best of Sri Lankan urban living from an exceptional address'
  },
  '[PENTHOUSE_OCEAN_IMAGE]': {
    key: '[PENTHOUSE_OCEAN_IMAGE]',
    label: 'Grand Ocean Penthouse',
    category: 'apartments',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    alt: 'Grand Ocean Penthouse living room with 270-degree ocean views',
    caption: 'The pinnacle of high-altitude residential luxury in Sri Lanka'
  },
  '[CEYLON_HORIZON_IMAGE]': {
    key: '[CEYLON_HORIZON_IMAGE]',
    label: 'Ceylon Horizon Residence',
    category: 'apartments',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85',
    alt: 'Ceylon Horizon Residence two bedroom suite with panoramic harbor views',
    caption: 'Modern minimalism meeting tropical warmth'
  },
  '[AZURE_PALM_IMAGE]': {
    key: '[AZURE_PALM_IMAGE]',
    label: 'Azure Palm Suite Residence',
    category: 'apartments',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
    alt: 'Azure Palm Suite Residence with expansive terrace garden',
    caption: 'Harmonious indoor-outdoor living with gentle sea breezes'
  },
  '[METROPOLITAN_TERRACE_IMAGE]': {
    key: '[METROPOLITAN_TERRACE_IMAGE]',
    label: 'Metropolitan Terrace Residence',
    category: 'apartments',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2000&q=85',
    alt: 'Metropolitan Terrace Residence open-concept living area',
    caption: 'An intimate architectural haven for discerning executives'
  },
  '[ROYAL_OCEAN_BEDROOM_IMAGE]': {
    key: '[ROYAL_OCEAN_BEDROOM_IMAGE]',
    label: 'Royal Oceanfront Master Suite',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85',
    alt: 'Royal Oceanfront Master Suite with direct private balcony over the water',
    caption: 'Wake to the rhythm of the Indian Ocean'
  },
  '[COLOMBO_SKYLINE_BEDROOM_IMAGE]': {
    key: '[COLOMBO_SKYLINE_BEDROOM_IMAGE]',
    label: 'Colombo Skyline Junior Suite',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=85',
    alt: 'Colombo Skyline Junior Suite with evening city light views',
    caption: 'Dramatic city horizons and plush sanctuary bedding'
  },
  '[TROPICAL_TERAZZA_BEDROOM_IMAGE]': {
    key: '[TROPICAL_TERAZZA_BEDROOM_IMAGE]',
    label: 'Tropical Terazza Garden Suite',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85',
    alt: 'Tropical Terazza Bedroom Suite overlooking lush private terrace foliage',
    caption: 'Serene botanical enclave crafted with natural timber and stone'
  },
  '[EXECUTIVE_HARBOR_BEDROOM_IMAGE]': {
    key: '[EXECUTIVE_HARBOR_BEDROOM_IMAGE]',
    label: 'Executive Harbor Bedroom Suite',
    category: 'bedrooms',
    aspectRatio: '16:9',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85',
    alt: 'Executive Harbor Suite with dedicated study nook and ocean breeze',
    caption: 'Effortless productivity and five-star relaxation combined'
  },
  '[FULLSCREEN_MOMENT_1]': {
    key: '[FULLSCREEN_MOMENT_1]',
    label: 'Full-Screen Moment: Space to Live Beautifully',
    category: 'architecture',
    aspectRatio: '21:9',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Cinematic full-bleed Sobha interior architecture',
    caption: 'SPACE TO LIVE BEAUTIFULLY'
  },
  '[FULLSCREEN_MOMENT_2]': {
    key: '[FULLSCREEN_MOMENT_2]',
    label: 'Full-Screen Moment: Ocean Horizon',
    category: 'views',
    aspectRatio: '21:9',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=85',
    alt: 'Panoramic Indian Ocean horizon at golden hour',
    caption: 'WHERE OCEAN HORIZONS MEET UNCOMPROMISING ARCHITECTURE'
  }
};

// Safe getter with fallback to registry
export function getImage(key: ImageKey | string): ImageAsset {
  if (key in INITIAL_IMAGE_REGISTRY) {
    return INITIAL_IMAGE_REGISTRY[key as ImageKey];
  }
  // Fallback for custom or unknown keys
  return {
    key,
    label: key.replace(/[[\]_]/g, ' '),
    category: 'apartments',
    aspectRatio: '16:9',
    url: INITIAL_IMAGE_REGISTRY['[HERO_IMAGE]'].url,
    alt: 'Sobha Sri Lanka luxury residence image',
    caption: 'Luxury residential suite in Colombo, Sri Lanka'
  };
}
