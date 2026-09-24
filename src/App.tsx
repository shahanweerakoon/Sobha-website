/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Ultra-Luxury Multi-Page Web Application
 * Includes Lenis Smooth Momentum Scrolling Integration
 */

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import { SplashLoader } from './components/SplashLoader';

// Pages
import { HomePage } from './pages/HomePage';
import { ApartmentSuitesPage } from './pages/ApartmentSuitesPage';
import { BedroomSuitesPage } from './pages/BedroomSuitesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { LocationPage } from './pages/LocationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath, openReservationModal } = useNavigation();

  // Initialize Lenis Smooth Scrolling engine for quiet luxury momentum scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle /book route opening reservation modal immediately
  useEffect(() => {
    if (currentPath === '/book' || currentPath === '/reserve') {
      openReservationModal();
    }
  }, [currentPath, openReservationModal]);

  // Route matching
  const renderCurrentPage = () => {
    // Check for property details: /apartment-suites/[slug]
    if (currentPath.startsWith('/apartment-suites/')) {
      const slug = currentPath.replace('/apartment-suites/', '');
      return <PropertyDetailPage slug={slug} />;
    }

    // Check for bedroom suite details: /bedroom-suites/[slug]
    if (currentPath.startsWith('/bedroom-suites/')) {
      const slug = currentPath.replace('/bedroom-suites/', '');
      return <PropertyDetailPage slug={slug} />;
    }

    // Top-level routes
    switch (currentPath) {
      case '/':
      case '/book':
      case '/reserve':
        return <HomePage />;
      case '/apartment-suites':
        return <ApartmentSuitesPage />;
      case '/bedroom-suites':
        return <BedroomSuitesPage />;
      case '/experience':
        return <ExperiencePage />;
      case '/amenities':
        return <AmenitiesPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/location':
        return <LocationPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141312] selection:bg-[#C5A880] selection:text-white font-sans antialiased">
      {/* 2-Second Initial Entry Splash Loader with single-logo.png */}
      <SplashLoader />

      {/* Universal Luxury Header */}
      <Header />

      {/* Main Page Area */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Universal Luxury Footer */}
      <Footer />

      {/* Reservation & Booking Engine Modal */}
      <ReservationModal />

      {/* Spec #25: Image Asset & Placeholder Manager Modal */}
      <ImageManagerModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
