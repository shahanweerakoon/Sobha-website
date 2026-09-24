/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoLight from '../assets/images/logo/sobha-logo-light.png';
import logoDark from '../assets/images/logo/sobha-logo-dark.png';

export const Header: React.FC = () => {
  const { currentPath, navigate, openReservationModal } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const isTopHero = !isScrolled && (
    currentPath === '/' ||
    currentPath === '/apartment-suites' ||
    currentPath === '/bedroom-suites' ||
    currentPath.includes('/apartment-suites/') ||
    currentPath.includes('/bedroom-suites/')
  );

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Apartment Suites', path: '/apartment-suites' },
    { label: 'Bedroom Suites', path: '/bedroom-suites' },
    { label: 'Experience', path: '/experience' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Location', path: '/location' },
    { label: 'About', path: '/about' },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Header element */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding,box-shadow] duration-500 ${
          !isTopHero
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DDD5]/80 py-3.5 sm:py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
            : 'py-5 sm:py-6 md:py-8 border-b border-transparent'
        }`}
      >
        {/* Dedicated Background Layer: Light black to transparent gradient under text and logo (Home Page top hero only) */}
        {isTopHero && (
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/75 via-black/40 to-transparent transition-opacity duration-500" />
        )}

        {/* Content Layer: Logo, navigation text, and buttons strictly on z-10 above the gradient */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Small Sized Logo (Light vs Dark mode) */}
          <button
            onClick={() => handleNavClick('/')}
            className="group flex items-center focus:outline-none focus-visible:outline-none transition-transform duration-300 hover:opacity-90 shrink-0"
            aria-label="Sobha Realty Sri Lanka Homepage"
          >
            <img
              src={isTopHero ? logoDark : logoLight}
              alt="Sobha Realty Sri Lanka"
              className="h-6 sm:h-7 md:h-8 max-w-[140px] sm:max-w-[170px] md:max-w-[190px] w-auto object-contain shrink-0 transition-opacity duration-300"
              style={{ maxHeight: '60px' }}
            />
          </button>

          {/* Zone 2: Primary Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.14em] uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative py-1 transition-colors duration-300 focus:outline-none focus-visible:outline-none ${isTopHero
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-[#141312] font-semibold'
                      : 'text-[#635C56] hover:text-[#141312]'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Action Buttons & Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => openReservationModal()}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 focus:outline-none focus-visible:outline-none ${isTopHero
                ? 'bg-white text-[#141312] hover:bg-[#C5A880] hover:text-white shadow-lg'
                : 'bg-[#141312] text-white hover:bg-[#C5A880] hover:text-white shadow-sm'
                }`}
            >
              <span>Reserve</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors focus:outline-none ${isTopHero ? 'text-white hover:text-[#C5A880]' : 'text-[#141312] hover:text-[#8C827A]'
                }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:hidden overflow-y-auto animate-in fade-in duration-300 pt-24 sm:pt-28">
          <div>
            <div className="mb-6 flex items-center justify-between pb-4 border-b border-[#E2DDD5]/80">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C827A] font-medium">
                Menu
              </span>
            </div>
            <nav className="flex flex-col space-y-4 sm:space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left font-serif text-xl sm:text-2xl tracking-wide transition-colors ${currentPath === link.path
                    ? 'text-[#C5A880]'
                    : 'text-[#141312] hover:text-[#8C827A]'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E2DDD5] mt-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openReservationModal();
              }}
              className="w-full py-3.5 text-center text-xs uppercase tracking-[0.2em] font-medium bg-[#141312] text-white hover:bg-[#C5A880] transition-colors mb-4"
            >
              Reserve Single Bedroom Suite
            </button>
            <div className="text-[11px] sm:text-xs text-[#8C827A] space-y-1">
              <p>Marine Drive, Colombo 03, Sri Lanka</p>
              <p>Concierge: +94 11 740 8800 · reservations@sobhasrilanka.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
