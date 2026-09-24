/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sobha Realty Sri Lanka - Reservation Engine Modal
 * Highly Responsive Mobile & Desktop Layout
 */

import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SINGLE_BEDROOM_APARTMENT_SUITE, Residence } from '../data/residences';
import { X, Check, ShieldCheck, ArrowRight, Sparkles, Clock, Calendar } from 'lucide-react';

export const ReservationModal: React.FC = () => {
  const { isReservationModalOpen, closeReservationModal } = useNavigation();

  const currentResidence: Residence = SINGLE_BEDROOM_APARTMENT_SUITE;

  // Form states
  const [bookingDate, setBookingDate] = useState<string>(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });

  // Slot duration selection (4-hour blocks)
  const [slotDuration, setSlotDuration] = useState<number>(4);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('08:00 AM - 12:00 PM');
  const [guests, setGuests] = useState<number>(2);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [airportTransfer, setAirportTransfer] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isReservationModalOpen) return null;

  // Pricing calculation: starting from Rs. 5,500 for 4 hours
  const numberOf4HourBlocks = Math.max(1, Math.ceil(slotDuration / 4));
  const basePriceLKR = numberOf4HourBlocks * 5500;
  const serviceFeeLKR = Math.round(basePriceLKR * 0.05);
  const totalPriceLKR = basePriceLKR + serviceFeeLKR;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `SB-LK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const timeSlotOptions = [
    '08:00 AM - 12:00 PM (Morning Slot)',
    '12:00 PM - 04:00 PM (Afternoon Slot)',
    '04:00 PM - 08:00 PM (Evening Slot)',
    '08:00 PM - 12:00 AM (Night Slot)',
    '12:00 AM - 08:00 AM (Overnight 8-Hr Slot)',
    'Flexible Check-in (Contact Concierge)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[96vh] sm:max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#141312] border border-[#E2DDD5] shadow-2xl">
        {/* Top Header */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5] px-4 sm:px-6 md:px-10 py-4 sm:py-5 border-b border-[#E2DDD5] flex items-center justify-between">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A880] font-semibold block">
              Sobha Realty Sri Lanka
            </span>
            <h2 className="font-serif text-lg sm:text-2xl md:text-3xl text-[#141312] font-light leading-snug">
              Reserve Single Bedroom Suite
            </h2>
          </div>
          <button
            onClick={closeReservationModal}
            className="p-2 border border-[#E2DDD5] hover:bg-[#141312] hover:text-white transition-colors"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-10">
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center max-w-lg mx-auto space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#141312] text-[#C5A880] flex items-center justify-center">
                <Check className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C827A]">
                  Reservation Request Confirmed
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141312]">
                  Welcome to Sobha Living
                </h3>
              </div>
              <div className="p-4 sm:p-6 bg-[#EFECE6] border border-[#E2DDD5] text-left text-xs space-y-2.5">
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Reservation Ref:</span>
                  <span className="font-mono font-bold text-[#141312]">{confirmationCode}</span>
                </p>
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Residence:</span>
                  <span className="font-medium text-[#141312]">{currentResidence.name}</span>
                </p>
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Rate Basis:</span>
                  <span className="font-medium text-[#141312]">Starting from Rs. 5,500 for 4 hours</span>
                </p>
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Selected Duration:</span>
                  <span className="font-medium text-[#141312]">{slotDuration} Hours ({numberOf4HourBlocks} Block{numberOf4HourBlocks > 1 ? 's' : ''})</span>
                </p>
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Check-In Date & Slot:</span>
                  <span className="font-medium text-[#141312]">{bookingDate} ({selectedTimeSlot})</span>
                </p>
                <p className="flex justify-between flex-wrap gap-1">
                  <span className="text-[#8C827A]">Primary Guest:</span>
                  <span className="font-medium text-[#141312]">{guestName} ({guestPhone})</span>
                </p>
                <p className="flex justify-between border-t border-[#D8D2C7] pt-2 text-sm font-semibold">
                  <span>Total Payable:</span>
                  <span className="font-serif text-lg text-[#141312]">Rs. {totalPriceLKR.toLocaleString()}</span>
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#635C56] font-light leading-relaxed">
                Our Private Concierge will contact you within 15 minutes via WhatsApp or phone to confirm your arrival code and keycard handover.
              </p>
              <button
                onClick={closeReservationModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#141312] text-white uppercase text-xs tracking-[0.2em] font-medium hover:bg-[#C5A880] transition-colors"
              >
                Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                {/* Highlighted Price Notice */}
                <div className="p-3.5 sm:p-4 bg-[#EFECE6] border border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">
                      Single Bedroom Suite
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#141312]">
                      Exclusive Reservation
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8C827A] block">Starting From</span>
                    <span className="font-serif text-xl sm:text-2xl text-[#141312] font-semibold">
                      Rs. 5,500
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#8C827A] block">for 4 hours</span>
                  </div>
                </div>

                {/* Duration Picker */}
                <div>
                  <label className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8C827A] font-medium block mb-2">
                    Select Stay Duration
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { hours: 4, label: '4 Hours', price: 5500 },
                      { hours: 8, label: '8 Hours', price: 11000 },
                      { hours: 12, label: '12 Hours', price: 16500 },
                      { hours: 24, label: '24 Hours', price: 22000 },
                    ].map((opt) => (
                      <button
                        key={opt.hours}
                        type="button"
                        onClick={() => setSlotDuration(opt.hours)}
                        className={`p-2.5 sm:p-3 text-center border transition-all ${
                          slotDuration === opt.hours
                            ? 'bg-[#141312] text-white border-[#141312]'
                            : 'bg-white text-[#141312] border-[#D8D2C7] hover:border-[#141312]'
                        }`}
                      >
                        <span className="text-xs font-semibold block">{opt.label}</span>
                        <span className={`text-[10px] block mt-0.5 ${slotDuration === opt.hours ? 'text-[#C5A880]' : 'text-[#8C827A]'}`}>
                          Rs. {opt.price.toLocaleString()}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dates & Time Slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C827A] block mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full p-3 bg-white border border-[#D8D2C7] text-xs text-[#141312] focus:outline-none focus:border-[#141312]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C827A] block mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full p-3 bg-white border border-[#D8D2C7] text-xs text-[#141312] focus:outline-none focus:border-[#141312]"
                    >
                      {timeSlotOptions.map((slot, i) => (
                        <option key={i} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guest Details */}
                <div className="space-y-3 sm:space-y-4 pt-1">
                  <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#8C827A] font-medium">
                    Guest Information
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        required
                        className="w-full p-3 bg-white border border-[#D8D2C7] text-xs text-[#141312] placeholder:text-[#8C827A] focus:outline-none focus:border-[#141312]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp Number"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        required
                        className="w-full p-3 bg-white border border-[#D8D2C7] text-xs text-[#141312] placeholder:text-[#8C827A] focus:outline-none focus:border-[#141312]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        required
                        className="w-full p-3 bg-white border border-[#D8D2C7] text-xs text-[#141312] placeholder:text-[#8C827A] focus:outline-none focus:border-[#141312]"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-3 pt-1">
                  <label className="flex items-center gap-3 text-xs text-[#2A2826] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={airportTransfer}
                      onChange={(e) => setAirportTransfer(e.target.checked)}
                      className="accent-[#141312] w-4 h-4 shrink-0"
                    />
                    <span>Add Colombo Airport / City Pick-up Option</span>
                  </label>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 bg-[#EFECE6] p-5 sm:p-6 md:p-8 flex flex-col justify-between border border-[#E2DDD5]">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
                    Reservation Breakdown
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-[#141312] mb-1">
                    Single Bedroom Suite
                  </h4>
                  <p className="text-xs text-[#635C56] mb-4">
                    Floor 18 · Ocean & Skyline View
                  </p>

                  <div className="py-3.5 sm:py-4 border-y border-[#D8D2C7] space-y-2 text-xs text-[#635C56]">
                    <div className="flex justify-between flex-wrap gap-1">
                      <span>Rate Basis</span>
                      <span className="font-medium text-[#141312]">Starting at Rs. 5,500 / 4h</span>
                    </div>
                    <div className="flex justify-between flex-wrap gap-1">
                      <span>Duration</span>
                      <span className="font-medium text-[#141312]">{slotDuration} Hours ({numberOf4HourBlocks} block{numberOf4HourBlocks > 1 ? 's' : ''})</span>
                    </div>
                    <div className="flex justify-between flex-wrap gap-1">
                      <span>Base Rental Amount</span>
                      <span className="font-medium text-[#141312]">Rs. {basePriceLKR.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between flex-wrap gap-1">
                      <span>Service Fee</span>
                      <span className="font-medium text-[#141312]">Rs. {serviceFeeLKR.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-[#D8D2C7] pt-2.5 text-sm font-semibold text-[#141312]">
                      <span>Total Amount</span>
                      <span className="font-serif text-lg sm:text-xl text-[#141312]">Rs. {totalPriceLKR.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-[11px] text-[#8C827A]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>Instant confirmation & 100% private entrance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>Includes high-speed Wi-Fi & Pool privileges</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 sm:pt-6">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 bg-[#141312] text-white uppercase text-xs tracking-[0.2em] font-semibold hover:bg-[#C5A880] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#8C827A] mt-2">
                    Pay at check-in or online. Flexible time adjustments allowed.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
