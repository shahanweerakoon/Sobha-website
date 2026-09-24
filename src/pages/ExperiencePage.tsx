/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #18: The Experience - Editorial Storytelling Page
 * Arrive · Unwind · Live · Discover
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from '../components/SobhaImage';
import { ArrowRight } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();

  const chapters = [
    {
      num: '01',
      title: 'ARRIVE',
      headline: 'Begin your stay in an environment designed to impress.',
      imageKey: '[EXPERIENCE_ARRIVE_IMAGE]',
      narrative: 'From the moment your private chauffeur brings you past the grand landscaped porte-cochère, the frantic pulse of the city dissolves. Greeted by your personal concierge in the soaring limestone arrival lobby, every detail of your registration is handled discreetly and seamlessly.',
      quote: 'An arrival experience rooted in quiet grandeur and Sri Lankan warmth.'
    },
    {
      num: '02',
      title: 'UNWIND',
      headline: 'Find your own rhythm in beautifully considered spaces.',
      imageKey: '[EXPERIENCE_UNWIND_IMAGE]',
      narrative: 'Ascend to the rooftop ocean deck, where a 25-meter infinity pool appears to merge effortlessly with the distant horizon of the Indian Ocean. Recline in a private cabana with fresh king coconut water, or retreat to the eucalyptus steam suites for private revitalization.',
      quote: 'Stillness is not merely an absence of noise; it is architectural intention.'
    },
    {
      num: '03',
      title: 'STAY',
      headline: 'Enjoy the freedom, privacy, and comfort of a private residence.',
      imageKey: '[EXPERIENCE_LIVE_IMAGE]',
      narrative: 'Unlike conventional luxury hotels, a Sobha residence offers uncompromised spatial freedom. Host an intimate dinner prepared by a private chef in your show kitchen, sip Ceylon silver tips tea on your deep covered ocean terrace, or sink into plush organic linens in sound-isolated bedrooms.',
      quote: 'True luxury is having the space to stay entirely on your own terms.'
    },
    {
      num: '04',
      title: 'DISCOVER',
      headline: 'Experience the best of Sri Lankan urban living from an exceptional address.',
      imageKey: '[EXPERIENCE_DISCOVER_IMAGE]',
      narrative: 'Positioned frontline on Marine Drive in prestigious Colombo 03, your address places you within arm’s reach of South Asia’s most captivating coastal capital. Stroll the historic sunset lawns of Galle Face Green, dine on world-renowned mud crabs at the Dutch Hospital, and explore vibrant art galleries in Cinnamon Gardens.',
      quote: 'Colombo’s cosmopolitan future and tropical soul, right at your doorstep.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pt-20 sm:pt-40 md:pt-28 pb-36">
      {/* Editorial Title */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            The Sobha Residential Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance">
            The Living Experience
          </h1>
          <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
            A thoughtfully curated choreography of arrival, quiet restoration, residential dignity, and coastal exploration.
          </p>
        </div>
      </section>

      {/* Chapters (Spec #18) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-36 md:space-y-48">
        {chapters.map((ch, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={ch.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Image */}
              <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="overflow-hidden relative group">
                  <SobhaImage
                    imageKey={ch.imageKey}
                    aspectRatio="16:9"
                    className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-6 left-6 bg-[#141312]/85 text-[#C5A880] text-xs font-mono tracking-widest px-3.5 py-1.5 uppercase">
                    Chapter {ch.num}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-5 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
                    {ch.title}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#141312] font-light leading-snug">
                    {ch.headline}
                  </h2>
                </div>

                <p className="text-base text-[#635C56] font-light leading-relaxed">
                  {ch.narrative}
                </p>

                <div className="p-6 bg-white border border-[#E2DDD5] italic font-serif text-base text-[#141312] leading-relaxed">
                  “{ch.quote}”
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA at Bottom of Story */}
      <section className="mt-32 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <div className="bg-[#141312] text-white p-12 md:p-20 space-y-6 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880]">
            Experience Sobha Sri Lanka
          </span>
          <h3 className="font-serif text-3xl sm:text-5xl font-light">
            Begin Your Stay with Us
          </h3>
          <p className="text-sm md:text-base text-white/70 max-w-lg mx-auto font-light">
            Select from our expansive apartment suites or intimate bedroom suites.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openReservationModal()}
              className="px-8 py-3.5 bg-white text-[#141312] uppercase text-xs tracking-widest font-semibold hover:bg-[#C5A880] hover:text-white transition-colors"
            >
              Reserve Residence
            </button>
            <button
              onClick={() => navigate('/apartment-suites')}
              className="px-8 py-3.5 border border-white/30 text-white uppercase text-xs tracking-widest font-medium hover:bg-white/10 transition-colors"
            >
              Explore Accommodations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
