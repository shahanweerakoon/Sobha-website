/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUp, Camera, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openReservationModal, openImageManager } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-[#FAF8F5] pt-24 md:pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-3xl md:text-4xl tracking-[0.25em] uppercase text-white font-light">
                SOBHA
              </span>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C5A880]">
                SRI LANKA
              </p>
            </div>
            <p className="text-sm md:text-base text-[#8C827A] font-light leading-relaxed max-w-md">
              A bespoke convergence of international architectural mastery, five-star hospitality, and the timeless tropical elegance of Sri Lanka’s coastal capital.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#C5A880] tracking-widest uppercase">
              <span>Colombo 03</span>
              <span>·</span>
              <span>Indian Ocean</span>
              <span>·</span>
              <span>Private Residences</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Residences Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-6 font-medium">
                Accommodations
              </p>
              <ul className="space-y-3 text-sm text-[#8C827A]">
                <li>
                  <button onClick={() => navigate('/apartment-suites')} className="hover:text-white transition-colors text-left">
                    Apartment Suites
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/bedroom-suites')} className="hover:text-white transition-colors text-left">
                    Apartment Bedroom Suites
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/apartment-suites/grand-ocean-penthouse')} className="hover:text-white transition-colors text-left">
                    Grand Ocean Penthouse
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/bedroom-suites/royal-oceanfront-master-suite')} className="hover:text-white transition-colors text-left">
                    Royal Oceanfront Suite
                  </button>
                </li>
                <li>
                  <button onClick={() => openReservationModal()} className="text-white hover:text-[#C5A880] transition-colors text-left font-medium">
                    Reserve Residence →
                  </button>
                </li>
              </ul>
            </div>

            {/* Experience Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-6 font-medium">
                The Estate
              </p>
              <ul className="space-y-3 text-sm text-[#8C827A]">
                <li>
                  <button onClick={() => navigate('/experience')} className="hover:text-white transition-colors text-left">
                    The Experience
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/amenities')} className="hover:text-white transition-colors text-left">
                    Amenities & Wellness
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/gallery')} className="hover:text-white transition-colors text-left">
                    Architectural Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/location')} className="hover:text-white transition-colors text-left">
                    Location & Distances
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/about')} className="hover:text-white transition-colors text-left">
                    About Sobha
                  </button>
                </li>
              </ul>
            </div>

            {/* Inquiries & Address */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-6 font-medium">
                Private Concierge
              </p>
              <div className="space-y-3 text-xs md:text-sm text-[#8C827A] leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Marine Drive, Kollupitiya, Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>+94 11 740 8800</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>inquiries@sobhasrilanka.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#635C56]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} Sobha Realty Sri Lanka. All rights reserved.</span>
            <span>·</span>
            <span>Prestige · Refined Living · Architecture · Comfort</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Spec #25 Image Asset Management Tool button */}
            <button
              onClick={openImageManager}
              className="inline-flex items-center gap-1.5 text-xs text-[#8C827A] hover:text-[#C5A880] transition-colors py-1 px-2 border border-white/10 hover:border-[#C5A880]/40"
              title="View and manage image placeholder mapping"
            >
              <Camera className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Image Placeholder System</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 border border-white/10 hover:border-white/30 text-[#FAF8F5] transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
