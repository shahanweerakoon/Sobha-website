/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #16: Architectural Gallery Page
 * Categories: Architecture, Apartments, Bedrooms, Living Spaces, Kitchens, Bathrooms, Amenities, Views, Lifestyle
 * Fullscreen Lightbox & Masonry Layout
 */

import React, { useState, useEffect } from 'react';
import { SobhaImage } from '../components/SobhaImage';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // Lightbox navigation
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="bg-[#FAF8F5] pt-20 sm:pt-24 md:pt-28 pb-36">
      {/* Title */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            Visual Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#141312] font-light tracking-tight text-balance">
            Architectural Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#635C56] font-light leading-relaxed">
            Explore the spatial geometry, material textures, and natural daylight of Sobha Sri Lanka residences.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#141312] text-white'
                  : 'bg-white text-[#635C56] hover:text-[#141312] border border-[#E2DDD5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid (Spec #16: Allow every image to feel important) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer bg-white border border-[#E2DDD5] p-4 hover:border-[#C5A880] transition-all duration-300 shadow-sm"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <SobhaImage
                  imageKey={item.imageKey}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#141312]/80 text-[#C5A880] text-[10px] uppercase tracking-widest px-2.5 py-1">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="pt-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block">
                  {item.location}
                </span>
                <h3 className="font-serif text-xl text-[#141312] group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#635C56] font-light leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <span className="text-xs text-[#C5A880] uppercase tracking-widest block">
                {filteredItems[lightboxIndex].categoryLabel} · {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h2 className="font-serif text-2xl text-white">
                {filteredItems[lightboxIndex].title}
              </h2>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 border border-white/20 hover:bg-white hover:text-[#141312] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image with Prev / Next Controls */}
          <div className="relative flex-1 flex items-center justify-center my-6 max-h-[75vh]">
            <button
              onClick={prevLightbox}
              className="absolute left-2 md:left-6 z-10 p-3 bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <SobhaImage
              imageKey={filteredItems[lightboxIndex].imageKey}
              className="max-h-[70vh] max-w-full w-auto object-contain mx-auto shadow-2xl"
            />

            <button
              onClick={nextLightbox}
              className="absolute right-2 md:right-6 z-10 p-3 bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-white/80 max-w-xl mx-auto space-y-1">
            <p className="text-sm font-light">
              {filteredItems[lightboxIndex].caption}
            </p>
            <p className="text-xs text-[#C5A880] tracking-widest uppercase">
              {filteredItems[lightboxIndex].location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
