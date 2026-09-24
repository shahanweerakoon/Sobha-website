/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #25: Image Placeholder & Asset Management System
 */

import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { INITIAL_IMAGE_REGISTRY, ImageKey, ImageAsset } from '../data/images';
import { X, Copy, Check, ExternalLink, RefreshCw, Sparkles, Image as ImageIcon } from 'lucide-react';

export const ImageManagerModal: React.FC = () => {
  const { isImageManagerOpen, closeImageManager } = useNavigation();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isImageManagerOpen) return null;

  const entries = Object.entries(INITIAL_IMAGE_REGISTRY) as [ImageKey, ImageAsset][];

  const filteredEntries = entries.filter(([key, asset]) => {
    const matchesCat = filterCategory === 'all' || asset.category === filterCategory;
    const matchesSearch =
      key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#141312] border border-[#E2DDD5] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5] px-6 md:px-10 py-5 border-b border-[#E2DDD5] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              Spec #25 Image Placeholder Directory
            </span>
            <h2 className="font-serif text-2xl text-[#141312] font-light">
              Sobha Asset & Placeholder Management
            </h2>
            <p className="text-xs text-[#8C827A] mt-0.5">
              Easily audit and replace placeholder tokens with authentic Sobha Realty property photography.
            </p>
          </div>
          <button
            onClick={closeImageManager}
            className="p-2 border border-[#E2DDD5] hover:bg-[#141312] hover:text-white transition-colors"
            aria-label="Close image manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters & Search */}
        <div className="px-6 md:px-10 py-4 bg-[#EFECE6] border-b border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto text-xs">
            {['all', 'architecture', 'apartments', 'bedrooms', 'living', 'amenities', 'views', 'lifestyle'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 uppercase tracking-wider text-[11px] font-medium transition-colors ${
                  filterCategory === cat
                    ? 'bg-[#141312] text-white'
                    : 'bg-white text-[#635C56] hover:text-[#141312] border border-[#D8D2C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search placeholder token..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 bg-white border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
            />
          </div>
        </div>

        {/* Directory Grid */}
        <div className="p-6 md:p-10 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEntries.map(([key, asset]) => (
              <div
                key={key}
                className="p-4 bg-white border border-[#E2DDD5] flex gap-4 hover:border-[#C5A880] transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-28 h-24 bg-[#EFECE6] shrink-0 overflow-hidden relative border border-[#E2DDD5]">
                  <img
                    src={asset.url}
                    alt={asset.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] font-mono text-white px-1 py-0.5">
                    {asset.aspectRatio}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-[#141312] bg-[#EFECE6] px-1.5 py-0.5 border border-[#D8D2C7]">
                        {key}
                      </span>
                      <button
                        onClick={() => handleCopy(key, key)}
                        className="text-[11px] text-[#8C827A] hover:text-[#141312] flex items-center gap-1"
                        title="Copy placeholder token"
                      >
                        {copiedKey === key ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedKey === key ? 'Copied' : 'Copy Token'}</span>
                      </button>
                    </div>

                    <p className="text-xs font-medium text-[#141312] mt-1.5 truncate">
                      {asset.label}
                    </p>
                    <p className="text-[11px] text-[#8C827A] line-clamp-1 mt-0.5">
                      {asset.alt}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#8C827A] border-t border-[#EFECE6] mt-2">
                    <span className="uppercase tracking-wider">{asset.category}</span>
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#141312] flex items-center gap-1 text-[#C5A880]"
                    >
                      <span>Preview Raw Image</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#EFECE6] border border-[#E2DDD5] text-xs text-[#635C56] flex items-center justify-between">
            <p>
              All image mappings are centralized in <code className="font-mono bg-white px-1.5 py-0.5 border border-[#D8D2C7]">src/data/images.ts</code> for instant production asset swapping.
            </p>
            <button
              onClick={() => handleCopy(JSON.stringify(INITIAL_IMAGE_REGISTRY, null, 2), 'registry_json')}
              className="px-3 py-1.5 bg-[#141312] text-white uppercase text-[10px] tracking-wider hover:bg-[#C5A880] transition-colors shrink-0"
            >
              {copiedKey === 'registry_json' ? 'Copied JSON' : 'Copy Entire Registry JSON'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
