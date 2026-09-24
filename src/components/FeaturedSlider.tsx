/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #9: Single Bedroom Apartment Suite Showcase Slider
 * Ultra-Smooth Transitions & Edge-to-Edge Image Presentation (No black bars)
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SobhaImage } from './SobhaImage';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const FeaturedSlider: React.FC = () => {
  const { navigate, openReservationModal } = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: 'Grand Living Salon & Work Desk',
      category: 'Single Bedroom Suite',
      subtitle: 'Double-height living space with ocean breeze verandas, fiber Wi-Fi, and 55" Smart 4K display.',
      imageKey: '[APARTMENT_SUITE_IMAGE]',
      tag: 'Living Pavilion'
    },
    {
      title: 'Master Bedroom Chamber',
      category: 'Single Bedroom Suite',
      subtitle: 'Acoustically soundproofed bedroom with plush king bedding, organic linens, and blackout drapes.',
      imageKey: '[BEDROOM_SUITE_IMAGE]',
      tag: 'Sleeping Sanctuary'
    },
    {
      title: 'Private Ocean Sunset Balcony',
      category: 'Single Bedroom Suite',
      subtitle: 'Direct front-row seating for Colombo’s famous Indian Ocean sunsets and coastal breezes.',
      imageKey: '[BALCONY_IMAGE]',
      tag: 'Veranda'
    },
    {
      title: 'Italian Marble Spa Bathroom',
      category: 'Single Bedroom Suite',
      subtitle: 'En-suite Statuario marble bath with freestanding tub and thermostatic rain shower.',
      imageKey: '[BATHROOM_IMAGE]',
      tag: 'En-Suite Spa'
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play timer: 6 seconds
  useEffect(() => {
    if (isHovered || isDragging) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered, isDragging, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -60) nextSlide();
    else if (dragOffset > 60) prevSlide();
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -80) nextSlide();
    else if (dragOffset > 80) prevSlide();
    setDragOffset(0);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="py-16 sm:py-24 md:py-36 bg-[#FAF8F5] border-t border-[#E2DDD5]/60 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handleMouseUp();
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#8C827A] mb-2 sm:mb-3">
              Residence Spaces Showcase
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141312] font-light tracking-tight">
              Single Bedroom Suite
            </h2>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-[#8C827A]">
              0{currentIndex + 1} / 0{totalSlides}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-[#D8D2C7] flex items-center justify-center hover:bg-[#141312] hover:text-white hover:border-[#141312] transition-all duration-300 active:scale-95"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 border border-[#D8D2C7] flex items-center justify-center hover:bg-[#141312] hover:text-white hover:border-[#141312] transition-all duration-300 active:scale-95"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Slider Container */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Image Column: 100% Edge-to-Edge Frame (No Black Bars) */}
            <div className="lg:col-span-8 overflow-hidden relative h-[250px] sm:h-[380px] md:h-[480px] lg:h-[540px] group shadow-sm border border-[#E2DDD5]">
              {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive
                        ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                    style={{
                      transform: isActive ? `translateX(${dragOffset * 0.3}px) scale(1)` : 'scale(1.05)',
                    }}
                  >
                    <SobhaImage
                      imageKey={slide.imageKey}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-[#141312]/80 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C5A880] border border-[#C5A880]/30 font-medium">
                      {slide.tag}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Information Column */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-6 lg:pl-4 min-h-[260px]">
              <div
                key={currentIndex}
                className="space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-500 ease-out"
              >
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A880] font-medium block">
                  Single Bedroom Suite
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#141312] font-light leading-snug">
                  {currentSlide.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#635C56] font-light leading-relaxed">
                  {currentSlide.subtitle}
                </p>

                {/* Specifications Matrix */}
                <div className="py-3 sm:py-4 border-y border-[#E2DDD5] grid grid-cols-2 gap-3 sm:gap-4 text-xs mt-4">
                  <div>
                    <span className="text-[#8C827A] uppercase tracking-wider block text-[9px] sm:text-[10px]">Type</span>
                    <span className="font-medium text-[#141312] text-xs sm:text-sm mt-0.5 block">
                      Single Bedroom Suite
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] uppercase tracking-wider block text-[9px] sm:text-[10px]">Area</span>
                    <span className="font-medium text-[#141312] text-xs sm:text-sm mt-0.5 block">
                      850 sq ft (79 m²)
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] uppercase tracking-wider block text-[9px] sm:text-[10px]">Occupancy</span>
                    <span className="font-medium text-[#141312] text-xs sm:text-sm mt-0.5 block">
                      Up to 2 Guests
                    </span>
                  </div>
                  <div>
                    <span className="text-[#8C827A] uppercase tracking-wider block text-[9px] sm:text-[10px]">View</span>
                    <span className="font-medium text-[#141312] text-xs sm:text-sm mt-0.5 block">
                      Ocean & Skyline
                    </span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => openReservationModal()}
                    className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-[#141312] text-white uppercase text-xs tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-[#C5A880] transition-colors text-center"
                  >
                    Reserve Suite
                  </button>
                  <button
                    onClick={() => navigate('/apartment-suites/single-bedroom-apartment-suite')}
                    className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium text-[#141312] hover:text-[#C5A880] transition-colors py-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C5A880]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 sm:mt-12 w-full h-[2px] bg-[#E2DDD5] overflow-hidden relative">
            <div
              className="h-full bg-[#141312] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
