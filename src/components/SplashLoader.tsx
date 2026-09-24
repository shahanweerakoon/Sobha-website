/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Initial Website Entry Splash Loader
 * Displays single-logo.png on a full white background, stays centered for ~2s,
 * then gracefully slides to the left and fades out to reveal the application.
 */

import React, { useState, useEffect } from 'react';
import singleLogo from '../assets/images/logo/single-logo.png';

export const SplashLoader: React.FC = () => {
  const [stage, setStage] = useState<'enter' | 'center' | 'slideLeft' | 'done'>('enter');

  useEffect(() => {
    // 1. Initial subtle fade-in / scale-in
    const timer1 = setTimeout(() => {
      setStage('center');
    }, 100);

    // 2. Stay centered for 2 seconds, then trigger smooth slide-left & fade-out
    const timer2 = setTimeout(() => {
      setStage('slideLeft');
    }, 1800);

    // 3. Complete animation & unmount after total ~2.4 seconds
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none transition-opacity duration-700 ease-out ${
        stage === 'slideLeft' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        <img
          src={singleLogo}
          alt="Sobha Monogram Logo"
          style={{ maxHeight: '96px' }}
          className={`h-20 sm:h-24 max-h-[96px] w-auto object-contain transition-all duration-700 ease-in-out transform ${
            stage === 'enter'
              ? 'opacity-0 scale-90 translate-x-0'
              : stage === 'center'
              ? 'opacity-100 scale-100 translate-x-0'
              : '-translate-x-36 sm:-translate-x-56 opacity-0 scale-95'
          }`}
        />
      </div>
    </div>
  );
};
