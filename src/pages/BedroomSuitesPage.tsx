/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #11: Apartment Bedroom Suites Listing Page
 * Single Bedroom Apartment Suite Only (No website prices)
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { SINGLE_BEDROOM_APARTMENT_SUITE } from '../data/residences';
import { ArrowRight, Bed, Bath, Maximize2, Users, ShieldCheck } from 'lucide-react';

export const BedroomSuitesPage: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] pt-24 md:pt-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] w-full flex items-end pb-16 md:pb-24 overflow-hidden mb-20 md:mb-28">
        <div className="absolute inset-0">
          <SobhaImage
            imageKey="[BEDROOM_SUITE_IMAGE]"
            priority
            className="w-full h-full object-cover scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full text-white">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
              Flagship Residence Category
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-balance">
              Single Bedroom Apartment Suite
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Private bedroom luxury combined with spacious apartment amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-3xl space-y-4 pb-8 border-b border-[#E2DDD5]">
          <p className="text-base sm:text-lg text-[#2A2826] font-light leading-relaxed">
            Sobha’s Single Bedroom Apartment Suite is designed for discerning solo executives, couples, and travelers who value five-star suite privacy within an authentic residential setting.
          </p>
          <p className="text-sm text-[#635C56] font-light leading-relaxed">
            Featuring an acoustically isolated king bedroom, en-suite Statuario marble bath with soaking tub, integrated living salon, work desk, and private ocean terrace.
          </p>
        </div>
      </div>

      {/* Large Card Showcase */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="bg-white border border-[#E2DDD5] p-6 md:p-12 hover:border-[#C5A880]/60 transition-all duration-500 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="overflow-hidden relative group">
                <SobhaImage
                  imageKey={SINGLE_BEDROOM_APARTMENT_SUITE.heroImageKey}
                  aspectRatio="16:9"
                  className="w-full h-[340px] md:h-[440px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-[#141312]/80 backdrop-blur-md px-3.5 py-1 text-white text-[10px] tracking-widest uppercase font-medium">
                  {SINGLE_BEDROOM_APARTMENT_SUITE.floor} · {SINGLE_BEDROOM_APARTMENT_SUITE.view}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SobhaImage
                  imageKey={SINGLE_BEDROOM_APARTMENT_SUITE.secondaryImageKey}
                  aspectRatio="16:9"
                  className="w-full h-32 md:h-40 object-cover"
                />
                <SobhaImage
                  imageKey="[BATHROOM_IMAGE]"
                  aspectRatio="16:9"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium block mb-2">
                  Single Bedroom Suite
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#141312] font-light leading-snug">
                  {SINGLE_BEDROOM_APARTMENT_SUITE.name}
                </h2>
                <p className="text-sm text-[#635C56] font-light mt-3 leading-relaxed">
                  {SINGLE_BEDROOM_APARTMENT_SUITE.overview}
                </p>
              </div>

              <div className="py-4 border-y border-[#E2DDD5] grid grid-cols-2 gap-4 text-xs text-[#2A2826]">
                <div>
                  <span className="text-[#8C827A] text-[10px] uppercase tracking-wider block">Bedding</span>
                  <span className="font-medium text-[#141312] mt-0.5 block">1 Ultra-Plush King Bed</span>
                </div>
                <div>
                  <span className="text-[#8C827A] text-[10px] uppercase tracking-wider block">Private Bathroom</span>
                  <span className="font-medium text-[#141312] mt-0.5 block">En-Suite Marble Spa Bath</span>
                </div>
                <div>
                  <span className="text-[#8C827A] text-[10px] uppercase tracking-wider block">Suite Size</span>
                  <span className="font-medium text-[#141312] mt-0.5 block">850 sq ft (79 m²)</span>
                </div>
                <div>
                  <span className="text-[#8C827A] text-[10px] uppercase tracking-wider block">Occupancy</span>
                  <span className="font-medium text-[#141312] mt-0.5 block">Up to 2 Guests</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#635C56]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Dedicated acoustic double-door entrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Private marble bath with freestanding soaking tub</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Full access to rooftop infinity pool, gym, and resident club</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4 border-t border-[#EFECE6]">
                <button
                  onClick={() => navigate('/apartment-suites/single-bedroom-apartment-suite')}
                  className="px-5 py-3 border border-[#141312] text-xs uppercase tracking-wider font-medium text-[#141312] hover:bg-[#141312] hover:text-white transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => openReservationModal()}
                  className="px-5 py-3 bg-[#141312] text-xs uppercase tracking-wider font-medium text-white hover:bg-[#C5A880] transition-colors"
                >
                  Reserve Suite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
