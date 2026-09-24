/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #12: Dedicated Individual Property Page
 * Single Bedroom Apartment Suite
 * Price starting from Rs. 5,500 for 4 hours shown in reservation engine
 */

import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { getResidenceBySlug, Residence } from '../data/residences';
import {
  Bed,
  Bath,
  Maximize2,
  Users,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

interface PropertyDetailPageProps {
  slug: string;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ slug }) => {
  const { navigate, openReservationModal } = useNavigation();
  const residence: Residence = getResidenceBySlug(slug);

  // 4-Hour Block Calculation State
  const [bookingDate, setBookingDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });
  const [slotDuration, setSlotDuration] = useState<number>(4);
  const [guestCount, setGuestCount] = useState(2);

  const blockCount = Math.max(1, Math.ceil(slotDuration / 4));
  const basePriceLKR = blockCount * 5500;
  const serviceFeeLKR = Math.round(basePriceLKR * 0.05);
  const totalStayPriceLKR = basePriceLKR + serviceFeeLKR;

  return (
    <div className="bg-[#FAF8F5] pb-32">
      {/* Spec #12 Hero: FULL-WIDTH APARTMENT IMAGE */}
      <section className="relative h-[80dvh] md:h-[90vh] w-full flex items-end pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SobhaImage
            imageKey={residence.heroImageKey}
            priority
            containerClassName="w-full h-full absolute inset-0"
            className="w-full h-full object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full text-white">
          <button
            onClick={() => navigate('/apartment-suites')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Single Bedroom Apartment Suite Overview</span>
          </button>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-medium block">
              {residence.floor} · {residence.view}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight">
              {residence.name}
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
              A refined single-bedroom apartment suite in the heart of Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Key Residence Metrics Strip (No price displayed on bar) */}
      <div className="bg-white border-b border-[#E2DDD5] py-6 sticky top-20 z-20 shadow-sm hidden md:block">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10 text-xs">
            <div>
              <span className="text-[#8C827A] uppercase tracking-wider block text-[10px]">Bedrooms</span>
              <span className="font-medium text-[#141312] text-sm mt-0.5 block">{residence.bedrooms}</span>
            </div>
            <div>
              <span className="text-[#8C827A] uppercase tracking-wider block text-[10px]">Bathrooms</span>
              <span className="font-medium text-[#141312] text-sm mt-0.5 block">{residence.bathrooms}</span>
            </div>
            <div>
              <span className="text-[#8C827A] uppercase tracking-wider block text-[10px]">Total Area</span>
              <span className="font-medium text-[#141312] text-sm mt-0.5 block">{residence.sizeSqFt} sq ft ({residence.sizeSqM} m²)</span>
            </div>
            <div>
              <span className="text-[#8C827A] uppercase tracking-wider block text-[10px]">Capacity</span>
              <span className="font-medium text-[#141312] text-sm mt-0.5 block">Up to {residence.guestCapacity} Guests</span>
            </div>
          </div>

          <button
            onClick={() => openReservationModal(residence.slug)}
            className="px-6 py-2.5 bg-[#141312] text-white uppercase text-xs tracking-wider font-medium hover:bg-[#C5A880] transition-colors"
          >
            Reserve Suite
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Storytelling & Detailed Room Galleries */}
          <div className="lg:col-span-8 space-y-24">
            {/* Overview */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
                The Residence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
                {residence.tagline}
              </h2>
              <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
                {residence.overview}
              </p>
              <div className="p-6 bg-[#EFECE6] border-l-2 border-[#C5A880]">
                <span className="text-xs uppercase tracking-wider text-[#8C827A] block font-medium mb-1">
                  Architectural Precision Note
                </span>
                <p className="text-xs md:text-sm text-[#2A2826] font-light leading-relaxed">
                  {residence.architecturalNote}
                </p>
              </div>
            </div>

            {/* Spec #12 Detailed Spaces Gallery */}
            <div className="space-y-20 border-t border-[#E2DDD5] pt-16">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] block">
                  Spaces & Architecture
                </span>
                <h3 className="font-serif text-3xl text-[#141312] font-light">
                  A Guided Tour of the Single Bedroom Apartment Suite
                </h3>
              </div>

              {/* LIVING AREA */}
              <div className="space-y-6">
                <SobhaImage
                  imageKey={residence.spaces.livingArea.imageKey}
                  aspectRatio="16:9"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                    Space 01 · Living Salon
                  </span>
                  <h4 className="font-serif text-2xl text-[#141312]">
                    {residence.spaces.livingArea.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                    {residence.spaces.livingArea.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {residence.spaces.livingArea.features.map((f, i) => (
                      <div key={i} className="text-xs text-[#2A2826] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BEDROOM */}
              <div className="space-y-6">
                <SobhaImage
                  imageKey={residence.spaces.bedroom.imageKey}
                  aspectRatio="16:9"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                    Space 02 · Sleeping Chamber
                  </span>
                  <h4 className="font-serif text-2xl text-[#141312]">
                    {residence.spaces.bedroom.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                    {residence.spaces.bedroom.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {residence.spaces.bedroom.features.map((f, i) => (
                      <div key={i} className="text-xs text-[#2A2826] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* KITCHEN */}
              {residence.spaces.kitchen && (
                <div className="space-y-6">
                  <SobhaImage
                    imageKey={residence.spaces.kitchen.imageKey}
                    aspectRatio="16:9"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                      Space 03 · Kitchenette & Refreshments
                    </span>
                    <h4 className="font-serif text-2xl text-[#141312]">
                      {residence.spaces.kitchen.title}
                    </h4>
                    <p className="text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                      {residence.spaces.kitchen.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {residence.spaces.kitchen.features.map((f, i) => (
                        <div key={i} className="text-xs text-[#2A2826] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* BATHROOM */}
              <div className="space-y-6">
                <SobhaImage
                  imageKey={residence.spaces.bathroom.imageKey}
                  aspectRatio="16:9"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                    Space 04 · Marble En-Suite Spa
                  </span>
                  <h4 className="font-serif text-2xl text-[#141312]">
                    {residence.spaces.bathroom.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                    {residence.spaces.bathroom.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {residence.spaces.bathroom.features.map((f, i) => (
                      <div key={i} className="text-xs text-[#2A2826] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BALCONY */}
              <div className="space-y-6">
                <SobhaImage
                  imageKey={residence.spaces.balcony.imageKey}
                  aspectRatio="16:9"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C5A880] font-medium">
                    Space 05 · Covered Sunset Balcony
                  </span>
                  <h4 className="font-serif text-2xl text-[#141312]">
                    {residence.spaces.balcony.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                    {residence.spaces.balcony.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {residence.spaces.balcony.features.map((f, i) => (
                      <div key={i} className="text-xs text-[#2A2826] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="border-t border-[#E2DDD5] pt-16 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] block">
                  Included Privileges
                </span>
                <h3 className="font-serif text-3xl text-[#141312] font-light mt-1">
                  Residence Amenities
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {residence.amenities.map((cat, i) => (
                  <div key={i} className="bg-white p-6 border border-[#E2DDD5]">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#141312] mb-4">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#635C56] flex items-center gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Reservation Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-[#E2DDD5] p-6 md:p-8 shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                  Reserve This Suite
                </span>
                <p className="text-xs text-[#8C827A] uppercase tracking-wider mt-1.5 font-medium">Starting From</p>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="font-serif text-3xl text-[#141312] font-bold">
                    Rs. 5,500
                  </span>
                  <span className="text-xs text-[#8C827A]">for 4 hours</span>
                </div>
              </div>

              {/* Slot selection */}
              <div className="space-y-3 border-t border-[#EFECE6] pt-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#8C827A] block mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#D8D2C7] text-xs text-[#141312]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#8C827A] block mb-1">
                    Stay Duration
                  </label>
                  <select
                    value={slotDuration}
                    onChange={(e) => setSlotDuration(Number(e.target.value))}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#D8D2C7] text-xs text-[#141312]"
                  >
                    <option value={4}>4 Hours (Rs. 5,500)</option>
                    <option value={8}>8 Hours (Rs. 11,000)</option>
                    <option value={12}>12 Hours (Rs. 16,500)</option>
                    <option value={24}>24 Hours / Full Day (Rs. 22,000)</option>
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-[#EFECE6] pt-4 space-y-2 text-xs text-[#635C56]">
                <div className="flex justify-between">
                  <span>Rate (Rs. 5,500 × {blockCount} block{blockCount > 1 ? 's' : ''})</span>
                  <span className="font-medium text-[#141312]">Rs. {basePriceLKR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hospitality & Service Fee</span>
                  <span className="font-medium text-[#141312]">Rs. {serviceFeeLKR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-[#EFECE6] pt-2 text-sm font-semibold text-[#141312]">
                  <span>Total Payable</span>
                  <span className="font-serif text-lg font-bold">Rs. {totalStayPriceLKR.toLocaleString()}</span>
                </div>
              </div>

              {/* Reserve CTA */}
              <button
                onClick={() => openReservationModal(residence.slug)}
                className="w-full py-4 bg-[#141312] text-white uppercase text-xs tracking-[0.2em] font-semibold hover:bg-[#C5A880] transition-colors shadow-md text-center"
              >
                Reserve Single Suite
              </button>

              <div className="space-y-1.5 text-[11px] text-[#8C827A] pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Direct Sobha Realty reservation guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Complimentary fiber Wi-Fi & Pool privileges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5] border-t border-[#E2DDD5] p-4 flex items-center justify-between md:hidden shadow-lg">
        <div>
          <span className="text-[10px] text-[#8C827A] uppercase tracking-wider block">Reservation</span>
          <span className="font-serif text-lg text-[#141312] font-semibold">Starting from Rs. 5,500 for 4 hrs</span>
        </div>
        <button
          onClick={() => openReservationModal(residence.slug)}
          className="px-6 py-3 bg-[#141312] text-white uppercase text-xs tracking-wider font-semibold"
        >
          Reserve Suite
        </button>
      </div>
    </div>
  );
};
