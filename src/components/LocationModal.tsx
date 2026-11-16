'use client';

import { useState } from 'react';
import { useLocation, lahorePopularAreas } from '@/context/LocationContext';
import { business } from '@/data/business';

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
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    isModalOpen,
    closeLocationModal,
    confirmLocation,
    requestCurrentLocation,
  } = useLocation();

  const [isDetecting, setIsDetecting] = useState(false);
  const [detectStatus, setDetectStatus] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleDetect = async () => {
    setIsDetecting(true);
    setDetectStatus('Detecting location...');
    const success = await requestCurrentLocation();
    setIsDetecting(false);
    if (success) {
      setDetectStatus('Location detected! Please add street or house details.');
    } else {
      setDetectStatus('Location permission denied or unavailable. Please choose your area below.');
    }
  };

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
            <span className="text-[0.65rem] uppercase tracking-[0.25em] font-medium text-purple-700">
              by Aysha · Lahore
            </span>
          </div>
          <h2 id="location-modal-title" className="font-display text-xl text-cocoa-deep font-semibold mt-1">
            Where should we send your treats?
          </h2>
          <p className="text-xs text-muted font-body mt-1">
            Choose delivery or pickup to see tailored ordering options.
          </p>
        </div>

        {/* Order Type Toggle */}
        <div className="px-6 pt-5">
          <label className="block text-[0.7rem] font-bold text-muted uppercase tracking-wider mb-2 text-center">
            Select Your Order Type
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-cream rounded-2xl border border-border/70">
            <button
              type="button"
              onClick={() => setOrderType('delivery')}
              className={`py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                orderType === 'delivery'
                  ? 'bg-purple-900 text-white shadow-md scale-[1.01]'
                  : 'text-cocoa hover:text-purple-900'
              }`}
            >
              <span>🚗</span> Home Delivery
            </button>
            <button
              type="button"
              onClick={() => setOrderType('pickup')}
              className={`py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                orderType === 'pickup'
                  ? 'bg-purple-900 text-white shadow-md scale-[1.01]'
                  : 'text-cocoa hover:text-purple-900'
              }`}
            >
              <span>🏪</span> Takeaway / Pickup
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {orderType === 'delivery' ? (
            <>
              {/* Geolocation Button */}
              <button
                type="button"
                onClick={handleDetect}
                disabled={isDetecting}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4 text-purple-700 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 9v6m-3-3h6" />
                </svg>
                {isDetecting ? 'Detecting Your Location...' : 'Use Current Location'}
              </button>

              {detectStatus && (
                <p className="text-[0.75rem] text-center text-purple-800 bg-purple-50/60 p-2 rounded-lg border border-purple-100">
                  {detectStatus}
                </p>
              )}

              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Select City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
                >
                  <option value="Lahore">Lahore (Home of Cake Walk)</option>
                  <option value="Karachi">Karachi (Advance Event / Courier Booking)</option>
                  <option value="Islamabad">Islamabad / Rawalpindi (Advance Event Booking)</option>
                </select>
              </div>

              {/* Lahore Area Selection */}
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Select Area / Neighbourhood
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
                >
                  {lahorePopularAreas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              {/* Complete Street Address */}
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Street / House Address (Optional now, required at checkout)
                </label>
                <input
                  type="text"
                  placeholder="e.g. House 42, Street 12, Sector Q..."
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div className="p-3 bg-cream/70 rounded-xl border border-border text-[0.75rem] text-muted leading-relaxed">
                ℹ️ <strong>Delivery coverage:</strong> Cake Walk bakes fresh daily in DHA Phase 8, Lahore. Distance-based delivery fee and rider timing are confirmed when you place your order via WhatsApp.
              </div>
            </>
          ) : (
            <>
              {/* Pickup Branch Info Card */}
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="text-[0.65rem] uppercase tracking-wider font-bold text-purple-800 block mb-1">
                  Cake Walk Studio & Bakery
                </span>
                <p className="font-display text-sm text-cocoa-deep font-bold mb-1">
                  {business.address.street}, {business.address.area}
                </p>
                <p className="text-xs text-muted mb-2">{business.address.city}, Punjab</p>
                <div className="text-[0.75rem] text-purple-900 border-t border-purple-200/60 pt-2 space-y-0.5 font-medium">
                  <p>🕒 Mon–Thu: {business.hours.weekday.time}</p>
                  <p>🕒 Fri–Sun: {business.hours.weekend.time}</p>
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Preferred Pickup Day
                </label>
                <select
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
                >
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend">This Weekend</option>
                  <option value="Later this week">Later this week</option>
                </select>
              </div>

              {/* Pickup Time */}
              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Estimated Pickup Time
                </label>
                <input
                  type="text"
                  placeholder="e.g. 5:30 PM (Freshly prepared to order)"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-[0.75rem] text-purple-900 leading-relaxed">
                ✨ <strong>Freshness Promise:</strong> Hot churros and warm specialties are fried and finished upon arrival or scheduled time for peak crispness!
              </div>
            </>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-6 pt-2 border-t border-border/50 bg-cream-light/40 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={handleSave}
            className="w-full py-3.5 px-6 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
          >
            Confirm & Browse Menu
          </button>
          <button
            type="button"
            onClick={closeLocationModal}
            className="text-xs text-muted hover:text-purple-900 text-center font-medium py-1 transition-colors"
          >
            I&apos;ll choose later · Browse menu first
          </button>
        </div>
      </div>
    </div>
  );
}
