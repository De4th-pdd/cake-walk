'use client';

import { useLocation } from '@/context/LocationContext';
import { business } from '@/data/business';

export const lahoreAreas = [
  'DHA Phase 8 – Ex Air Avenue',
  'DHA Phase 5 & 6',
  'DHA Phase 1, 2, 3 & 4',
  'DHA Phase 7',
  'Gulberg (I, II, III)',
  'Lahore Cantt & Cavalry Ground',
  'Askari 10 & 11',
  'Model Town & Garden Town',
  'Johar Town & Faisal Town',
  'WAPDA Town & Valencia',
  'Bahria Town Lahore',
  'Lake City',
  'Other Lahore Area (Specify in Address)',
];

export default function LocationModal() {
  const {
    orderType,
    setOrderType,
    city,
    setCity,
    area,
    setArea,
    streetAddress,
    setStreetAddress,
    pickupBranch,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    isModalOpen,
    closeLocationModal,
    confirmLocation,
  } = useLocation();

  if (!isModalOpen) return null;

  const handleSave = () => {
    confirmLocation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-cocoa-deep/70 backdrop-blur-md transition-opacity"
        onClick={closeLocationModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden z-10 animate-fade-in-up"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLocationModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-cream hover:bg-cream-dark text-cocoa flex items-center justify-center transition-colors text-sm font-bold z-20"
          aria-label="Close location selector"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="pt-8 pb-5 px-6 text-center border-b border-border/50 bg-gradient-to-b from-cream-light to-white">
          <div className="inline-flex flex-col items-center mb-2">
            <span className="font-display text-2xl font-bold tracking-tight text-cocoa-deep">
              Cake Walk
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-purple-700 font-bold">
              by Aysha · Lahore
            </span>
          </div>
          <h2 id="location-modal-title" className="font-display text-xl text-cocoa-deep font-bold mt-1">
            Where should we send your treats?
          </h2>
          <p className="text-xs text-muted font-body mt-1">
            Select doorstep delivery across Lahore or store pickup from DHA Phase 8.
          </p>
        </div>

        {/* Order Type Toggle */}
        <div className="px-6 pt-5">
          <label className="block text-[0.7rem] font-bold text-muted uppercase tracking-wider mb-2 text-center">
            Fulfilment Method
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-cream rounded-2xl border border-border/70">
            <button
              type="button"
              onClick={() => setOrderType('delivery')}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                orderType === 'delivery'
                  ? 'bg-purple-900 text-white shadow-md'
                  : 'text-cocoa hover:text-purple-900'
              }`}
            >
              <span>🚗</span> Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setOrderType('pickup')}
              className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                orderType === 'pickup'
                  ? 'bg-purple-900 text-white shadow-md'
                  : 'text-cocoa hover:text-purple-900'
              }`}
            >
              <span>🏪</span> Store Pickup
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {orderType === 'delivery' ? (
            <>
              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold text-cocoa-deep uppercase tracking-wider mb-1.5">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-cream-light text-cocoa-deep text-sm font-body focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  placeholder="Lahore"
                />
              </div>

              {/* Area / Society Selection */}
              <div>
                <label className="block text-xs font-bold text-cocoa-deep uppercase tracking-wider mb-1.5">
                  General Area / Society
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa-deep text-sm font-body focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                >
                  {lahoreAreas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* Street / House Address */}
              <div>
                <label className="block text-xs font-bold text-cocoa-deep uppercase tracking-wider mb-1.5">
                  Delivery Street Address <span className="text-purple-700 font-normal">(Optional now; required at checkout)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. House 14, Street 3, Sector..."
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa-deep text-sm font-body focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                />
              </div>

              {/* Delivery Disclaimer Notice */}
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-200/60 text-left">
                <p className="text-[0.75rem] text-purple-950 leading-relaxed">
                  <span className="font-bold">ℹ️ Delivery Notice:</span> Orders are prepared and dispatched from our kitchen at {business.address.area}. Delivery availability and rider delivery charges across Lahore will be confirmed directly with you via WhatsApp.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Pickup Branch Info */}
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="font-display font-bold text-sm text-purple-950">
                      {pickupBranch.name}
                    </p>
                    <p className="text-xs text-purple-900/80 font-body mt-0.5 leading-relaxed">
                      {pickupBranch.address}
                    </p>
                    <p className="text-[0.7rem] text-purple-700 font-bold mt-1.5">
                      Hours: {business.hours.weekday.time} (Mon–Thu) · {business.hours.weekend.time} (Fri–Sun)
                    </p>
                  </div>
                </div>
              </div>

              {/* Pickup Date */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-cocoa-deep uppercase tracking-wider mb-1.5">
                    Pickup Day
                  </label>
                  <select
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-cocoa-deep text-xs sm:text-sm font-body focus:outline-none focus:border-purple-600"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Scheduled Later">Scheduled for Later</option>
                  </select>
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="block text-xs font-bold text-cocoa-deep uppercase tracking-wider mb-1.5">
                    Preferred Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5:00 PM"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-cocoa-deep text-xs sm:text-sm font-body focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              {/* Pickup Note */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-left">
                <p className="text-[0.72rem] text-amber-900 leading-relaxed">
                  <span className="font-bold">⏰ Preparation Notice:</span> Fresh churros and bakes are made to order. Exact pickup readiness time will be confirmed by Cake Walk upon WhatsApp order request.
                </p>
              </div>
            </>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSave}
              className="w-full py-3.5 px-6 rounded-2xl bg-purple-900 hover:bg-purple-950 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Confirm & Browse Menu</span>
              <span>→</span>
            </button>
            <p className="text-center text-[0.7rem] text-muted font-body mt-2">
              You can change your fulfilment method or location anytime from the header.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
