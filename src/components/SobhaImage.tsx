/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { getImage, ImageKey } from '../data/images';

interface SobhaImageProps {
  imageKey?: ImageKey | string;
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1' | '21:9' | 'auto';
  showPlaceholderTag?: boolean;
  priority?: boolean;
}

export const SobhaImage: React.FC<SobhaImageProps> = ({
  imageKey,
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'auto',
  showPlaceholderTag = false,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Determine source from imageKey registry or direct src
  const asset = imageKey ? getImage(imageKey) : null;
  const imageSrc = src || asset?.url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85';
  const imageAlt = alt || asset?.alt || 'Sobha Realty Sri Lanka residence';

  // Aspect ratio classes
  const aspectClassMap = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
    '1:1': 'aspect-square',
    '21:9': 'aspect-[21/9]',
    'auto': '',
  };

  const aspectClass = aspectClassMap[aspectRatio] || '';

  return (
    <div
      className={`relative overflow-hidden bg-[#EFECE6] ${aspectClass} ${
        containerClassName || 'w-full h-full'
      }`}
      data-placeholder-id={imageKey || 'CUSTOM_IMAGE'}
    >
      {/* Fallback architectural gradient container in case of network block */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#2A2826] via-[#1E1D1B] to-[#141312] text-[#FAF8F5]">
          <div className="w-12 h-12 mb-4 border border-[#C5A880]/40 flex items-center justify-center">
            <span className="font-serif text-lg text-[#C5A880]">S</span>
          </div>
          <p className="font-serif text-xl tracking-wide text-center text-[#FAF8F5] mb-2">
            Sobha Realty Sri Lanka
          </p>
          <p className="text-xs uppercase tracking-widest text-[#C5A880]/80 text-center font-sans">
            {imageKey || 'Architectural Residence'}
          </p>
          <p className="text-xs text-[#8C827A] mt-2 max-w-xs text-center font-sans">
            {asset?.label || 'Contemporary Tropical Luxury Residence'}
          </p>
        </div>
      ) : (
        <>
          {/* Subtle shimmer during load */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#E8E4DC] animate-pulse" />
          )}

          <img
            src={imageSrc}
            alt={imageAlt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${className}`}
          />
        </>
      )}

      {/* Optional developer/manager placeholder badge */}
      {showPlaceholderTag && imageKey && (
        <div className="absolute bottom-2 left-2 z-10 pointer-events-none bg-black/75 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono tracking-wider text-[#C5A880] border border-[#C5A880]/30 rounded-none">
          {imageKey}
        </div>
      )}
    </div>
  );
};
