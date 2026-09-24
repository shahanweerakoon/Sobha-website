/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Verified Location Data
 * Prime Marine Drive, Colombo 03 (Kollupitiya), Western Province, Sri Lanka
 */

export interface Landmark {
  id: string;
  name: string;
  category: 'business' | 'dining' | 'shopping' | 'attractions' | 'beaches' | 'transport' | 'wellness';
  travelTime: string;
  distanceKm: string;
  description: string;
  address: string;
}

export const PROPERTY_LOCATION = {
  address: 'Marine Drive, Colombo 03, Sri Lanka',
  district: 'Colombo 03 (Kollupitiya)',
  coordinates: {
    lat: 6.9085,
    lng: 79.8512
  },
  tagline: 'Connected to the City. Above the Ordinary.',
  description: 'Situated along prestigious Marine Drive in Colombo 03, Sobha Sri Lanka commands an enviable frontline position overlooking the Indian Ocean. Residents enjoy immediate coastal tranquility paired with rapid arterial access to Colombo’s financial core, luxury shopping promenades, Michelin-standard dining, and the Port City marina.'
};

export const VERIFIED_NEARBY_LANDMARKS: Landmark[] = [
  {
    id: 'galle-face-green',
    name: 'Galle Face Green & Promenade',
    category: 'beaches',
    travelTime: '4 mins drive · 12 mins walk',
    distanceKm: '1.8 km',
    description: 'Colombo’s iconic oceanfront urban park, famous for sunset walks, gentle sea breezes, and open coastal vistas.',
    address: 'Galle Face Centre Road, Colombo 03'
  },
  {
    id: 'one-galle-face',
    name: 'One Galle Face Mall & Luxury Retail',
    category: 'shopping',
    travelTime: '5 mins drive',
    distanceKm: '2.1 km',
    description: 'South Asia’s premier luxury shopping mall featuring international designer boutiques, gourmet dining, and cinema suites.',
    address: '1A Centre Road, Galle Face, Colombo 02'
  },
  {
    id: 'colombo-port-city',
    name: 'Colombo Port City & Marina District',
    category: 'business',
    travelTime: '7 mins drive',
    distanceKm: '3.4 km',
    description: 'The visionary multi-billion dollar master-planned international financial center, yacht marina, and duty-free shopping precinct.',
    address: 'Port City Boulevard, Colombo 01'
  },
  {
    id: 'dutch-hospital',
    name: 'Historic Dutch Hospital Dining Precinct',
    category: 'dining',
    travelTime: '8 mins drive',
    distanceKm: '3.8 km',
    description: 'Restored 17th-century colonial architectural courtyard housing Ministry of Crab, refined wine bars, and artisan cafes.',
    address: 'Hospital Street, Colombo Fort, Colombo 01'
  },
  {
    id: 'world-trade-center',
    name: 'World Trade Center & Financial District (Fort)',
    category: 'business',
    travelTime: '8 mins drive',
    distanceKm: '3.9 km',
    description: 'The financial epicentre of Sri Lanka, housing the Colombo Stock Exchange, multinational headquarters, and private banks.',
    address: 'Echelon Square, Colombo 01'
  },
  {
    id: 'cinnamon-gardens',
    name: 'Cinnamon Gardens (Colombo 07)',
    category: 'attractions',
    travelTime: '10 mins drive',
    distanceKm: '3.5 km',
    description: 'Colombo’s prestigious diplomatic enclave filled with wide tree-lined boulevards, art galleries, high commissions, and the National Museum.',
    address: 'Colombo 07'
  },
  {
    id: 'mount-lavinia',
    name: 'Mount Lavinia Coastal Beachfront',
    category: 'beaches',
    travelTime: '18 mins drive',
    distanceKm: '9.2 km',
    description: 'Golden sandy beaches, coastal seafood terraces, and historic colonial heritage along the southern coastal line.',
    address: 'Hotel Road, Mount Lavinia'
  },
  {
    id: 'katunayake-airport',
    name: 'Bandaranaike International Airport (CMB)',
    category: 'transport',
    travelTime: '35 mins via Airport Expressway',
    distanceKm: '34 km',
    description: 'Sri Lanka’s primary international gateway, seamlessly accessible via the elevated Port Access Elevated Highway and Katunayake Expressway.',
    address: 'Canada Friendship Road, Katunayake'
  },
  {
    id: 'asiri-central',
    name: 'Asiri Central Hospital & Durdans Hospital',
    category: 'wellness',
    travelTime: '6 mins drive',
    distanceKm: '2.4 km',
    description: 'Premier internationally accredited private hospitals offering 24/7 emergency care, specialized surgical units, and executive wellness clinics.',
    address: 'Alfred Place & Norris Canal Road, Colombo'
  }
];
