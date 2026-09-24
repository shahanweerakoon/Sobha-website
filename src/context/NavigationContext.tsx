/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isReservationModalOpen: boolean;
  selectedResidenceSlug: string | null;
  openReservationModal: (residenceSlug?: string) => void;
  closeReservationModal: () => void;
  isImageManagerOpen: boolean;
  openImageManager: () => void;
  closeImageManager: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname && pathname !== '' ? pathname : '/';
    }
    return '/';
  });

  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [selectedResidenceSlug, setSelectedResidenceSlug] = useState<string | null>(null);
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openReservationModal = (residenceSlug?: string) => {
    setSelectedResidenceSlug(residenceSlug || null);
    setIsReservationModalOpen(true);
  };

  const closeReservationModal = () => {
    setIsReservationModalOpen(false);
    setSelectedResidenceSlug(null);
  };

  const openImageManager = () => setIsImageManagerOpen(true);
  const closeImageManager = () => setIsImageManagerOpen(false);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isReservationModalOpen,
        selectedResidenceSlug,
        openReservationModal,
        closeReservationModal,
        isImageManagerOpen,
        openImageManager,
        closeImageManager,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
