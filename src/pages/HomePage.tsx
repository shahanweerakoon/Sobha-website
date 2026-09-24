/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Flagship Homepage
 * Highly Responsive Mobile & Desktop Layout
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { FeaturedSlider } from '../components/FeaturedSlider';
import { SINGLE_BEDROOM_APARTMENT_SUITE } from '../data/residences';
import { AMENITIES_DATA } from '../data/amenities';
import { getImage } from '../data/images';
import { ArrowRight, Bed, Bath, Maximize2, Users, ChevronDown } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();
  const heroAsset = getImage('[HERO_IMAGE]');

  return (
    <div className="bg-[#FAF8F5] overflow-hidden">
      {/* Spec #6: FULL-SCREEN HERO */}
      <section className="relative h-[100dvh] min-h-[100dvh] sm:min-h-screen w-full flex items-end pb-16 sm:pb-20 md:pb-28 overflow-hidden">
        {/* Background Image: True Fullscreen Cover on Mobile & Desktop */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <img
            src={heroAsset.url}
            alt={heroAsset.alt}
            className="absolute inset-0 w-full h-full object-cover object-center scale-100 min-w-full min-h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none" />
        </div>

        {/* Hero Overlay */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 w-full text-white pt-24 sm:pt-0">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C5A880] font-medium">
              <span>Colombo, Sri Lanka</span>
              <span className="hidden sm:inline">·</span>
              <span>Single Bedroom Suite</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] text-balance">
              Elevated Living, Redefined
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-white/90 font-light max-w-xl leading-relaxed">
              Experience ultra-luxury single bedroom apartment suite living with ocean views, marble bath, and complete privacy.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => openReservationModal()}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#141312] uppercase text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] font-semibold hover:bg-[#C5A880] hover:text-white transition-all duration-300 text-center shadow-lg"
              >
                Reserve Your Suite
              </button>
              <button
                onClick={() => navigate('/apartment-suites/single-bedroom-apartment-suite')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black/40 backdrop-blur-md border border-white/30 text-white uppercase text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.22em] font-medium hover:bg-white hover:text-[#141312] transition-all duration-300 text-center"
              >
                Explore Apartment Suite
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-8 md:right-12 z-10 hidden md:flex items-center gap-2 text-white/60 text-[10px] uppercase tracking-[0.25em]">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* PROPERTY INTRODUCTION */}
      <section className="py-16 sm:py-28 md:py-40 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="lg:col-span-7 relative group overflow-hidden">
            <SobhaImage
              imageKey="[EXTERIOR_IMAGE]"
              aspectRatio="4:3"
              className="w-full h-auto min-h-[260px] sm:min-h-[360px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#141312]/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 text-white text-[9px] sm:text-[11px] tracking-widest uppercase">
              Marine Drive · Colombo 03
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8C827A] font-medium block">
                The Sobha Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#141312] font-light leading-[1.15] text-balance">
                A Single Bedroom Apartment Suite Sanctuary
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#635C56] font-light leading-relaxed">
              Rising above the tranquil rhythms of Colombo’s coastline, Sobha Sri Lanka introduces an exclusive single bedroom apartment suite offering. Designed for guests seeking ultimate spatial privacy, refined aesthetics, and flexible stay experiences.
            </p>

            <p className="text-sm sm:text-base text-[#635C56] font-light leading-relaxed">
              Every detail reflects Sobha’s renowned philosophy of backward integration—featuring Italian Statuario marble, acoustic double-glazed windows, handcrafted teak furnishings, and uninterrupted views of the Indian Ocean horizon.
            </p>

            <div className="pt-4 border-t border-[#E2DDD5] grid grid-cols-2 gap-4 sm:gap-6 text-xs">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8C827A] block">Living Architecture</span>
                <span className="font-serif text-base sm:text-lg text-[#141312] mt-0.5 block font-semibold">Uncompromised Space</span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8C827A] block">Hospitality</span>
                <span className="font-serif text-base sm:text-lg text-[#141312] mt-0.5 block">24/7 VIP Concierge</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => navigate('/about')}
                className="group inline-flex items-center gap-2.5 sm:gap-3 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium text-[#141312] hover:text-[#C5A880] transition-colors"
              >
                <span>Read the Architectural Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SINGLE RESIDENCE SECTION */}
      <section className="py-16 sm:py-24 md:py-36 bg-[#EFECE6]/50 border-t border-[#E2DDD5]/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-24 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#8C827A] font-medium block">
              Flagship Accommodation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#141312] font-light tracking-tight">
              Single Bedroom Apartment Suite
            </h2>
            <p className="text-sm sm:text-base text-[#635C56] font-light leading-relaxed">
              Thoughtfully designed with full access to luxury building amenities.
            </p>
          </div>

          {/* Featured Large Card */}
          <div className="bg-white border border-[#E2DDD5] p-5 sm:p-8 md:p-14 hover:border-[#C5A880] transition-all duration-500 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="overflow-hidden relative group">
                  <SobhaImage
                    imageKey="[APARTMENT_SUITE_IMAGE]"
                    aspectRatio="16:9"
                    className="w-full h-[220px] sm:h-[340px] md:h-[460px] object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#141312]/85 text-[#C5A880] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] px-3 sm:px-4 py-1 sm:py-1.5 font-medium">
                    Floor 18 · Ocean & Skyline View
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <SobhaImage
                    imageKey="[BEDROOM_SUITE_IMAGE]"
                    aspectRatio="16:9"
                    className="w-full h-28 sm:h-36 md:h-44 object-cover"
                  />
                  <SobhaImage
                    imageKey="[BALCONY_IMAGE]"
                    aspectRatio="16:9"
                    className="w-full h-28 sm:h-36 md:h-44 object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A880] font-medium block mb-1.5">
                    Exclusive Single Residence
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141312] font-light">
                    {SINGLE_BEDROOM_APARTMENT_SUITE.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#635C56] font-light mt-2 sm:mt-3 leading-relaxed">
                    {SINGLE_BEDROOM_APARTMENT_SUITE.overview}
                  </p>
                </div>

                {/* Specs */}
                <div className="py-3 sm:py-4 border-y border-[#E2DDD5] grid grid-cols-2 gap-3 sm:gap-4 text-xs text-[#2A2826]">
                  <div className="flex items-center gap-2">
                    <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C827A] shrink-0" />
                    <span className="text-[11px] sm:text-xs">Single Bedroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C827A] shrink-0" />
                    <span className="text-[11px] sm:text-xs">En-Suite Marble Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C827A] shrink-0" />
                    <span className="text-[11px] sm:text-xs">850 sq ft (79 m²)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C827A] shrink-0" />
                    <span className="text-[11px] sm:text-xs">Up to 2 Guests</span>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="p-4 sm:p-5 bg-[#EFECE6] border border-[#D8D2C7] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8C827A] block">
                      Reservation Privileges
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-[#141312] font-semibold block">
                      Flexible Duration Options
                    </span>
                  </div>
                  <button
                    onClick={() => openReservationModal()}
                    className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#141312] text-white text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold hover:bg-[#C5A880] transition-colors text-center"
                  >
                    Reserve Suite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SLIDER */}
      <FeaturedSlider />

      {/* FULL-SCREEN IMAGE MOMENT */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SobhaImage
            imageKey="[FULLSCREEN_MOMENT_1]"
            className="w-full h-full object-cover scale-100"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-brightness-95" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto space-y-3 sm:space-y-4 text-white">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#C5A880] block">
            The Living Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl tracking-wide font-light text-balance leading-tight">
            Space to Live Beautifully
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-light max-w-lg mx-auto leading-relaxed">
            Where expansive dimensions, natural materials, and the warmth of tropical sunlight elevate everyday moments into tranquil memories.
          </p>
        </div>
      </section>

      {/* AMENITIES PREVIEW */}
      <section className="py-16 sm:py-24 md:py-36 bg-[#EFECE6] border-t border-[#E2DDD5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8C827A] font-medium block mb-1.5 sm:mb-2">
                Five-Star Residential Privileges
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#141312] font-light">
                Every Detail, Considered
              </h2>
            </div>
            <button
              onClick={() => navigate('/amenities')}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-[#141312] hover:text-[#C5A880] transition-colors self-start md:self-auto"
            >
              <span>Explore All Amenities</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C5A880]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {AMENITIES_DATA.map((category) => (
              <div
                key={category.id}
                className="bg-white p-6 sm:p-8 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#C5A880] transition-colors"
              >
                <div>
                  <div className="mb-4 sm:mb-6 overflow-hidden">
                    <SobhaImage
                      imageKey={category.imageKey}
                      aspectRatio="16:9"
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#141312] mb-1.5 sm:mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#635C56] font-light mb-4 sm:mb-6 leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Reservation Banner */}
      <section className="bg-[#141312] text-white py-16 sm:py-20 md:py-28 text-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A880]">
            Single Bedroom Apartment Suite · Colombo 03
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-balance leading-tight">
            Reserve Your Single Bedroom Apartment Suite
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 font-light max-w-lg mx-auto leading-relaxed">
            Direct reservation privileges, best rate guarantee, and flexible stay booking options.
          </p>
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => openReservationModal()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#141312] uppercase text-xs tracking-[0.18em] sm:tracking-[0.2em] font-semibold hover:bg-[#C5A880] hover:text-white transition-colors text-center"
            >
              Reserve Your Suite
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white uppercase text-xs tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white/10 transition-colors text-center"
            >
              Speak to Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
