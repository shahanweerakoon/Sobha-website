/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #17: Location Page
 * Heading: "CONNECTED TO THE CITY. ABOVE THE ORDINARY."
 * Verified Nearby Landmarks and Distances in Colombo, Sri Lanka
 */

import React, { useState } from 'react';
import { SobhaImage } from '../components/SobhaImage';
import { PROPERTY_LOCATION, VERIFIED_NEARBY_LANDMARKS, Landmark } from '../data/location';
import { MapPin, Navigation, Clock, ExternalLink, ShieldCheck, Compass } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLandmark, setActiveLandmark] = useState<Landmark>(VERIFIED_NEARBY_LANDMARKS[0]);

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'beaches', label: 'Coastline & Beaches' },
    { id: 'business', label: 'Business & Finance' },
    { id: 'shopping', label: 'Luxury Shopping' },
    { id: 'dining', label: 'Fine Dining' },
    { id: 'transport', label: 'Airport & Transit' },
    { id: 'wellness', label: 'Medical & Wellness' },
  ];

  const filteredLandmarks = VERIFIED_NEARBY_LANDMARKS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="bg-[#FAF8F5] pt-24 md:pt-32 pb-36">
      {/* Title Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            Prime Marine Drive Address
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance">
            Connected to the City. Above the Ordinary.
          </h1>
          <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
            {PROPERTY_LOCATION.description}
          </p>
        </div>
      </section>

      {/* Large Location Image Showcase */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="relative overflow-hidden group">
          <SobhaImage
            imageKey="[LOCATION_IMAGE]"
            aspectRatio="21:9"
            className="w-full h-[400px] md:h-[540px] object-cover"
          />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-[#141312]/90 backdrop-blur-md p-6 border border-white/10 text-white max-w-md">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
              Frontline Ocean Position
            </span>
            <h3 className="font-serif text-2xl text-white">
              Marine Drive, Colombo 03
            </h3>
            <p className="text-xs text-[#8C827A] mt-2 leading-relaxed">
              Situated in Kollupitiya, adjacent to Galle Face Green and Colombo Port City, with rapid elevated highway access to Bandaranaike International Airport.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Map Simulation & Destination Explorer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
            Verified Proximity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
            Nearby Key Destinations
          </h2>
        </div>

        {/* Filter categories */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors ${
                selectedCategory === c.id
                  ? 'bg-[#141312] text-white'
                  : 'bg-white text-[#635C56] hover:text-[#141312] border border-[#E2DDD5]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Map Explorer Two-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Stylized Colombo Map Graphic */}
          <div className="lg:col-span-7 bg-[#1E1D1B] p-6 md:p-8 border border-[#E2DDD5] text-white space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs text-[#C5A880]">
                <Compass className="w-4 h-4" />
                <span className="uppercase tracking-widest">Colombo Marine Drive Hub</span>
              </div>
              <span className="text-xs text-[#8C827A] font-mono">6°54'30.6"N 79°51'04.3"E</span>
            </div>

            {/* Stylized Visual Representation of Colombo Coastline */}
            <div className="relative h-[380px] bg-gradient-to-r from-[#141B24] via-[#1A1E24] to-[#1E1D1B] border border-white/10 flex items-center justify-center p-8 overflow-hidden">
              {/* Indian Ocean Water Area */}
              <div className="absolute left-0 top-0 bottom-0 w-2/5 bg-[#0F1722]/80 border-r border-[#C5A880]/30 flex flex-col justify-center items-center text-center p-4">
                <span className="text-xs font-serif italic text-white/50 tracking-widest uppercase">
                  Indian Ocean
                </span>
                <span className="text-[10px] text-[#C5A880]/80 tracking-widest uppercase mt-1">
                  West Coast
                </span>
              </div>

              {/* Coastal Road & Property Pin */}
              <div className="absolute left-[40%] top-0 bottom-0 w-2 bg-[#C5A880]/40" />

              <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#C5A880] text-[#141312] flex items-center justify-center font-bold text-xs shadow-[0_0_20px_#C5A880] animate-pulse">
                  S
                </div>
                <div className="mt-2 bg-[#141312] px-3 py-1 text-[11px] font-serif border border-[#C5A880] whitespace-nowrap">
                  Sobha Marine Drive
                </div>
              </div>

              {/* Nearby landmark nodes */}
              <div className="absolute right-8 top-12 bg-white/5 border border-white/10 p-3 max-w-[200px] text-xs">
                <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">Port City Marina</span>
                <span className="text-[11px] text-white/80">7 mins via Marine Drive</span>
              </div>

              <div className="absolute right-12 bottom-12 bg-white/5 border border-white/10 p-3 max-w-[200px] text-xs">
                <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">Galle Face Green</span>
                <span className="text-[11px] text-white/80">4 mins drive</span>
              </div>
            </div>

            {/* Selected Landmark Highlight */}
            <div className="p-4 bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block">Selected Destination</span>
                <span className="font-semibold text-white text-sm">{activeLandmark.name}</span>
                <p className="text-white/60 text-xs mt-0.5">{activeLandmark.address}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">Travel Time</span>
                <span className="font-medium text-[#C5A880]">{activeLandmark.travelTime}</span>
              </div>
            </div>
          </div>

          {/* List of Verified Landmarks */}
          <div className="lg:col-span-5 space-y-4">
            {filteredLandmarks.map((landmark) => {
              const isSelected = activeLandmark.id === landmark.id;
              return (
                <div
                  key={landmark.id}
                  onClick={() => setActiveLandmark(landmark)}
                  className={`p-5 border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-[#C5A880] shadow-md'
                      : 'bg-white/60 border-[#E2DDD5] hover:bg-white hover:border-[#8C827A]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                        {landmark.category} · {landmark.distanceKm}
                      </span>
                      <h4 className="font-serif text-lg text-[#141312] mt-0.5">
                        {landmark.name}
                      </h4>
                      <p className="text-xs text-[#635C56] font-light mt-1 leading-relaxed">
                        {landmark.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#141312] bg-[#EFECE6] px-2.5 py-1">
                        <Clock className="w-3 h-3 text-[#8C827A]" />
                        <span>{landmark.travelTime}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
