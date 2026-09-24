/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #15: Amenities Page
 * Heading: "EVERY DETAIL, CONSIDERED"
 * Residence · Lifestyle · Convenience
 */

import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { AMENITIES_DATA } from '../data/amenities';
import { Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const AmenitiesPage: React.FC = () => {
  const { openReservationModal } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredData =
    activeCategory === 'all'
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((c) => c.id === activeCategory);

  return (
    <div className="bg-[#FAF8F5] pt-24 md:pt-32 pb-36">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            Five-Star Residential Infrastructure
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance">
            Every Detail, Considered
          </h1>
          <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
            From the precision of backward-integrated interior engineering to cantilevered ocean infinity pools and 24/7 private concierge care.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 flex justify-center">
        <div className="inline-flex p-1 bg-white border border-[#E2DDD5]">
          {[
            { id: 'all', label: 'All Amenities' },
            { id: 'residence', label: 'Residence' },
            { id: 'lifestyle', label: 'Lifestyle & Wellness' },
            { id: 'convenience', label: 'Convenience & Service' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors ${
                activeCategory === tab.id
                  ? 'bg-[#141312] text-white'
                  : 'text-[#635C56] hover:text-[#141312]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Showcase with Large Supporting Photography */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-32">
        {filteredData.map((category, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <section
              key={category.id}
              className="bg-white border border-[#E2DDD5] p-8 md:p-14 lg:p-20 shadow-sm"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Large Supporting Photography */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <SobhaImage
                    imageKey={category.imageKey}
                    aspectRatio="16:9"
                    className="w-full h-[360px] md:h-[480px] object-cover"
                  />
                </div>

                {/* Amenities List */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
                      Amenity Dimension 0{idx + 1}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
                      {category.name}
                    </h2>
                    <p className="text-sm md:text-base text-[#635C56] font-light mt-2 leading-relaxed">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#EFECE6]">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <span className="w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#C5A880] text-[#C5A880] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                          ✓
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-[#141312]">
                              {item.title}
                            </h4>
                            {item.highlight && (
                              <span className="text-[10px] text-[#8C827A] tracking-wider uppercase">
                                · {item.highlight}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#635C56] mt-0.5 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Reservation Prompt */}
      <section className="mt-32 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <div className="bg-[#EFECE6] p-12 md:p-16 border border-[#E2DDD5] max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C827A]">
            Elevated Living In Colombo
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#141312]">
            Experience Sobha’s Considered Living
          </h3>
          <p className="text-sm text-[#635C56] font-light max-w-md mx-auto">
            Book your stay and enjoy privileged access to our entire suite of five-star residential amenities.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openReservationModal()}
              className="px-8 py-3.5 bg-[#141312] text-white uppercase text-xs tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
            >
              Reserve Your Stay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
