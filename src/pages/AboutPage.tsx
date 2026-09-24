/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #19: About Page - The Sobha Legacy
 * Philosophy · Backward Integration · Craftsmanship · Contemporary Tropical Living
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { ShieldCheck, Award, Ruler, CheckCircle, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] pt-24 md:pt-32 pb-36">
      {/* Title */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            Craftsmanship & Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance">
            The Sobha Legacy
          </h1>
          <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
            Founded on an uncompromising obsession with precision, engineering backward integration, and timeless architectural integrity.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-light leading-tight">
              Quality Built from Within
            </h2>
            <p className="text-base text-[#635C56] font-light leading-relaxed">
              For decades across the globe, Sobha has been recognized for a singular architectural discipline: <strong className="font-medium text-[#141312]">complete backward integration</strong>. Unlike traditional real-estate developers who outsource critical craftsmanship to fragmented third parties, Sobha controls every phase from architectural conception and structural engineering to custom joinery, stone carving, and interior glazing.
            </p>
            <p className="text-base text-[#635C56] font-light leading-relaxed">
              In Sri Lanka, this master craftsmanship meets the island’s rich tradition of tropical architecture. The result is residences that do not merely look luxurious in photography, but feel enduring, acoustically silent, and structurally immaculate to live in.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E2DDD5]">
              <div>
                <span className="font-serif text-3xl text-[#141312] block">100%</span>
                <span className="text-xs text-[#8C827A] uppercase tracking-wider mt-1 block">In-House Quality Control</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#141312] block">Zero</span>
                <span className="text-xs text-[#8C827A] uppercase tracking-wider mt-1 block">Outsourced Precision Joinery</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SobhaImage
              imageKey="[LIVING_ROOM_IMAGE]"
              aspectRatio="4:3"
              className="w-full h-[420px] md:h-[500px] object-cover border border-[#E2DDD5]"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars of Sobha Engineering */}
      <section className="bg-white border-y border-[#E2DDD5] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
              Architectural Discipline
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
              The Four Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Ruler,
                title: 'German-Grade Engineering',
                desc: 'Strict structural tolerances, dual-membrane waterproofing, and acoustic isolation across all living partitions.'
              },
              {
                icon: ShieldCheck,
                title: 'Backward Integration',
                desc: 'In-house factories for bespoke woodwork, metal glazing, precast concrete, and marble craftsmanship.'
              },
              {
                icon: Award,
                title: 'Tropical Modernism',
                desc: 'Balancing deep shading verandas, natural ocean breezes, and botanical podiums with modern glass facades.'
              },
              {
                icon: CheckCircle,
                title: 'Five-Star Hospitality',
                desc: 'Seamless residential operations ensuring round-the-clock concierge, valet, and housekeeping care.'
              },
            ].map((pillar, i) => (
              <div key={i} className="p-8 border border-[#E2DDD5] bg-[#FAF8F5] space-y-4">
                <pillar.icon className="w-8 h-8 text-[#C5A880]" />
                <h3 className="font-serif text-xl text-[#141312]">{pillar.title}</h3>
                <p className="text-xs text-[#635C56] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-28 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880]">
            Experience Sobha in Person
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light">
            Discover What Refined Living Feels Like
          </h3>
          <p className="text-sm text-[#635C56] font-light">
            Whether for a short coastal reprieve or an extended residence in Colombo, reserve your private suite today.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => openReservationModal()}
              className="px-8 py-3.5 bg-[#141312] text-white uppercase text-xs tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
            >
              Reserve Residence
            </button>
            <button
              onClick={() => navigate('/apartment-suites')}
              className="px-8 py-3.5 border border-[#141312] text-[#141312] uppercase text-xs tracking-widest font-medium hover:bg-[#141312] hover:text-white transition-colors"
            >
              View Suites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
