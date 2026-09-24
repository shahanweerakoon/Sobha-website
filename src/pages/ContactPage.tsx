/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Spec #20 & #21: Contact & Private Inquiries Page
 * Route: /contact
 */

import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { MapPin, Phone, Mail, Clock, Check, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { openReservationModal } = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    residenceType: 'Apartment Suites',
    stayDuration: 'Short Stay (1–14 Nights)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Where is the property situated in Colombo?',
      a: 'Sobha Sri Lanka is located frontline on Marine Drive in Colombo 03 (Kollupitiya), overlooking the Indian Ocean. It is 5 minutes from Galle Face Green and One Galle Face Mall, and 35 minutes from Bandaranaike International Airport (CMB) via the elevated expressway.'
    },
    {
      q: 'What is the difference between Apartment Suites and Apartment Bedroom Suites?',
      a: 'Apartment Suites are expansive, fully equipped full private residences (1 to 3 bedrooms) featuring grand living salons, full chef kitchens, and private dining verandas. Apartment Bedroom Suites are private en-suite bedroom sanctuaries within the residential offering, complete with marble bathrooms and access to all residential amenities.'
    },
    {
      q: 'Is airport chauffeur transfer included?',
      a: 'Yes, all guests booking directly with Sobha receive complimentary VIP airport chauffeur transfer to and from Bandaranaike International Airport in luxury executive vehicles.'
    },
    {
      q: 'What are the check-in and check-out times?',
      a: 'Standard check-in is from 3:00 PM onwards, and check-out is by 11:00 AM. Early arrival or late departure requests are accommodated whenever feasible through your personal concierge.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pt-20 sm:pt-24 md:pt-28 pb-36">
      {/* Title */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-medium block">
            Residential Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#141312] font-light tracking-tight">
            Private Inquiries
          </h1>
          <p className="text-base text-[#635C56] font-light leading-relaxed">
            Our dedicated residential team is at your disposal for reservations, custom stay arrangements, and private property viewings.
          </p>
        </div>
      </section>

      {/* Main Layout: Contact Information & Form */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Estate Contacts */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-white p-8 md:p-10 border border-[#E2DDD5] space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-[#141312] mb-1">
                  Sobha Realty Sri Lanka
                </h3>
                <p className="text-xs text-[#8C827A] uppercase tracking-wider">
                  Marine Drive Residences · Colombo 03
                </p>
              </div>

              <div className="space-y-6 text-sm text-[#2A2826]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#8C827A]">Address</span>
                    <p className="mt-0.5">Marine Drive, Kollupitiya, Colombo 03, Western Province, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#8C827A]">Direct Concierge</span>
                    <p className="mt-0.5">+94 11 740 8800</p>
                    <p className="text-xs text-[#8C827A] mt-0.5">Available 24 hours daily</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#8C827A]">Reservations & Inquiries</span>
                    <p className="mt-0.5">reservations@sobhasrilanka.com</p>
                    <p className="mt-0.5">inquiries@sobhasrilanka.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#8C827A]">Concierge Desk</span>
                    <p className="mt-0.5">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFECE6]">
                <button
                  onClick={() => openReservationModal()}
                  className="w-full py-3.5 bg-[#141312] text-white uppercase text-xs tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
                >
                  Direct Online Reservation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Private Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#E2DDD5]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-[#141312] text-[#C5A880] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-[#141312]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#635C56] font-light max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Sobha Sri Lanka. A private residential manager will contact you at <span className="font-medium text-[#141312]">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[#FAF8F5] border border-[#D8D2C7] text-xs uppercase tracking-wider text-[#141312] hover:bg-[#141312] hover:text-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
                    Send an Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#141312]">
                    Connect with Residential Relations
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alistair@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 or international code"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                      Accommodation Interest
                    </label>
                    <select
                      value={formData.residenceType}
                      onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                    >
                      <option value="Apartment Suites">Apartment Suites (Full Residences)</option>
                      <option value="Apartment Bedroom Suites">Apartment Bedroom Suites</option>
                      <option value="Grand Ocean Penthouse">The Grand Ocean Penthouse</option>
                      <option value="Long Term Lease">Extended Corporate Lease (30+ Days)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                    Proposed Stay Duration & Dates
                  </label>
                  <select
                    value={formData.stayDuration}
                    onChange={(e) => setFormData({ ...formData, stayDuration: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                  >
                    <option value="Short Stay (1–7 Nights)">Short Stay (1–7 Nights)</option>
                    <option value="Medium Stay (8–29 Nights)">Medium Stay (8–29 Nights)</option>
                    <option value="Extended Lease (1–6 Months)">Extended Lease (1–6 Months)</option>
                    <option value="Annual Residence (12+ Months)">Annual Residence (12+ Months)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8C827A] block mb-1.5 font-medium">
                    Message or Special Inquiries
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about your guest count, preferred arrival date, dietary preferences, or corporate requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#D8D2C7] text-xs focus:outline-none focus:border-[#141312]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#141312] text-white uppercase text-xs tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
                  >
                    Send Private Inquiry
                  </button>
                  <p className="text-[10px] text-center text-[#8C827A] mt-2">
                    Inquiries are confidential and reviewed directly by the Sobha Sri Lanka residential office.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-32 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8C827A] font-medium block">
              Essential Information
            </span>
            <h3 className="font-serif text-3xl text-[#141312] font-light">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-[#E2DDD5] bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg text-[#141312]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8C827A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8C827A] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#635C56] font-light leading-relaxed border-t border-[#FAF8F5] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
