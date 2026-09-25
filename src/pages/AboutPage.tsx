/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #19: About Page - The Sobha Legacy
 * Philosophy · Backward Integration · Craftsmanship · Contemporary Tropical Living with Text Reveal Scroll Animations
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { TextReveal } from '../components/TextReveal';
import { ShieldCheck, Sparkles, HeartHandshake, Star } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] pt-20 sm:pt-24 md:pt-28 pb-36">
      {/* Title */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <TextReveal variant="fadeUp" delay={0.1}>
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
              Craftsmanship & Heritage
            </span>
          </TextReveal>

          <TextReveal
            as="h1"
            variant="words"
            delay={0.2}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance"
          >
            The Sobha Legacy
          </TextReveal>

          <TextReveal variant="fadeUp" delay={0.4}>
            <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
              Founded on an uncompromising obsession with precision, engineering backward integration, and timeless architectural integrity.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-6">
            <TextReveal variant="fadeRight" delay={0.1}>
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
                The Philosophy
              </span>
            </TextReveal>

            <TextReveal
              as="h2"
              variant="words"
              delay={0.2}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-light leading-tight"
            >
              Quality Built from Within
            </TextReveal>

            <TextReveal variant="fadeUp" delay={0.3}>
              <p className="text-base text-[#635C56] font-light leading-relaxed">
                For decades across the globe, Sobha has been recognized for a singular architectural discipline: <strong className="font-medium text-[#141312]">complete backward integration</strong>. Unlike traditional accommodation providers who outsource critical craftsmanship to fragmented third parties, Sobha Realty Apartment controls every phase from architectural conception and interior craftsmanship to custom joinery, stone carving, and five-star suite management.
              </p>
            </TextReveal>

            <TextReveal variant="fadeUp" delay={0.4}>
              <p className="text-base text-[#635C56] font-light leading-relaxed">
                In Sri Lanka, this master craftsmanship meets the island’s rich tradition of tropical architecture. The result is residences that do not merely look luxurious in photography, but feel enduring, acoustically silent, and structurally immaculate to live in.
              </p>
            </TextReveal>

            <TextReveal variant="fadeUp" delay={0.5}>
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
            </TextReveal>
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

      {/* 4 Pillars of Sobha Stays & Hospitality */}
      <section className="bg-white border-y border-[#E2DDD5] py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <TextReveal variant="fadeUp" delay={0.1}>
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
                Hospitality & Comfort
              </span>
            </TextReveal>

            <TextReveal
              as="h2"
              variant="words"
              delay={0.2}
              className="font-serif text-3xl sm:text-4xl text-[#141312] font-light"
            >
              The Four Pillars of an Exceptional Stay
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Supreme Quality Stays',
                desc: 'Meticulously engineered suites designed for ultimate peace of mind, combining acoustic soundproofing, climate control, and refined luxury.'
              },
              {
                icon: Sparkles,
                title: 'Immaculate Cleanliness',
                desc: 'White-glove sanitization standards, deep cleaning protocols, and meticulous preparation ensuring every suite is pristine and spotless.'
              },
              {
                icon: ShieldCheck,
                title: 'Pure Comfort & Living',
                desc: 'Ergonomic furniture, ultra-plush premium linens, quiet ocean breezes, and serene interiors crafted for restful relaxation.'
              },
              {
                icon: HeartHandshake,
                title: 'Bespoke 24/7 Service',
                desc: 'Seamless residential operations with round-the-clock concierge support, valet assistance, and attentive housekeeping care.'
              },
            ].map((pillar, i) => (
              <TextReveal key={i} variant="fadeUp" delay={0.15 * i}>
                <div className="p-8 border border-[#E2DDD5] bg-[#FAF8F5] space-y-4 h-full">
                  <pillar.icon className="w-8 h-8 text-[#C5A880]" />
                  <h3 className="font-serif text-xl text-[#141312]">{pillar.title}</h3>
                  <p className="text-xs text-[#635C56] font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CTA */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-28 text-center">
        <TextReveal variant="fadeUp" delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880]">
              Experience Sobha in Person
            </span>
            <TextReveal
              as="h3"
              variant="words"
              delay={0.2}
              className="font-serif text-3xl sm:text-4xl text-[#141312] font-light"
            >
              Discover What Refined Living Feels Like
            </TextReveal>
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
        </TextReveal>
      </section>
    </div>
  );
};
