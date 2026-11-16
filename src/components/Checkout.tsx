'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useLocation, lahorePopularAreas } from '@/context/LocationContext';
import { generateWhatsAppOrderUrl, isValidPakistaniPhone } from '@/lib/whatsapp';
import { formatPrice } from '@/data/menu';
import { business } from '@/data/business';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
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
  } = useLocation();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // Sync streetAddress from location context if available
  const [localAddress, setLocalAddress] = useState(streetAddress);
  useEffect(() => {
    if (streetAddress && !localAddress) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocalAddress(streetAddress);
    }
  }, [streetAddress, localAddress]);

  const validateStep1 = () => {
    if (items.length === 0) {
      setErrorMsg('Your cart is empty. Please select your favorite treats from the menu first!');
      return false;
    }
    if (orderType === 'delivery') {
      if (!localAddress.trim()) {
        setErrorMsg('Please enter your complete street / house address for delivery in Lahore.');
        return false;
      }
    } else {
      if (!pickupDate || !pickupTime.trim()) {
        setErrorMsg('Please specify your preferred pickup day and time.');
        return false;
      }
    }
    setErrorMsg('');
    return true;
  };

  const validateStep2 = () => {
    if (!customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return false;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your contact phone number.');
      return false;
    }
    if (!isValidPakistaniPhone(phone.trim())) {
      setErrorMsg('Please enter a valid Pakistani mobile number (e.g. 0321-7805555 or +923217805555).');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setStreetAddress(localAddress);
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
      }
    }
  };

  const handleBack = () => {
    setErrorMsg('');
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as 1 | 2);
    }
  };

  const handleFinalOrderSubmit = () => {
    const whatsappUrl = generateWhatsAppOrderUrl({
      customerName: customerName.trim(),
      phone: phone.trim(),
      method: orderType,
      address: orderType === 'delivery' ? localAddress.trim() : undefined,
      city: orderType === 'delivery' ? city : undefined,
      area: orderType === 'delivery' ? area : undefined,
      pickupBranch: orderType === 'pickup' ? business.address.full : undefined,
      pickupTime: orderType === 'pickup' ? `${pickupDate} (${pickupTime})` : undefined,
      notes: notes.trim() || (email ? `Email: ${email.trim()}` : undefined),
      items: items.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        price: i.product.price,
        isFromPrice: i.product.isFromPrice,
      })),
      subtotal,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="checkout" className="section-padding bg-cream-light/70 border-t border-border/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-purple-700 text-xs sm:text-sm uppercase tracking-[0.25em] font-body font-bold mb-2">
            Order Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-cocoa-deep font-bold mb-3">
            Review & Complete Checkout
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-lg mx-auto font-body">
            Direct online handoff with Cake Walk DHA Phase 8. Review your items and submit with zero payment hassle.
          </p>

          {/* Stepper Header */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 max-w-md mx-auto">
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep >= 1 ? 'text-purple-900' : 'text-muted'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-purple-900 text-white' : 'bg-border text-muted'}`}>
                1
              </span>
              <span>Fulfilment</span>
            </div>
            <div className="w-8 sm:w-12 h-0.5 bg-border" />
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep >= 2 ? 'text-purple-900' : 'text-muted'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-purple-900 text-white' : 'bg-border text-muted'}`}>
                2
              </span>
              <span>Contact</span>
            </div>
            <div className="w-8 sm:w-12 h-0.5 bg-border" />
            <div className={`flex items-center gap-1.5 text-xs font-bold ${currentStep === 3 ? 'text-purple-900' : 'text-muted'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep === 3 ? 'bg-purple-900 text-white' : 'bg-border text-muted'}`}>
                3
              </span>
              <span>Final Review</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-border/80 overflow-hidden">
          {errorMsg && (
            <div className="p-4 bg-red-50 border-b border-red-200 text-red-700 text-sm font-medium flex items-center gap-2">
              <span>⚠️</span> {errorMsg}
            </div>
          )}

          {/* STEP 1: FULFILMENT & LOCATION */}
          {currentStep === 1 && (
            <div className="p-6 sm:p-10 space-y-6">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2">
                  1. How would you like your treats?
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-cream rounded-2xl border border-border">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
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
                    className={`py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      orderType === 'pickup'
                        ? 'bg-purple-900 text-white shadow-md'
                        : 'text-cocoa hover:text-purple-900'
                    }`}
                  >
                    <span>🏪</span> Takeaway / Pickup
                  </button>
                </div>
              </div>

              {orderType === 'delivery' ? (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                        City
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700 font-medium"
                      >
                        <option value="Lahore">Lahore</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                        Area / Sector in Lahore
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700 font-medium"
                      >
                        {lahorePopularAreas.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                      Complete Street & House Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g. House 54, Street 8, Phase 5, near Commercial Broadway..."
                      value={localAddress}
                      onChange={(e) => setLocalAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700"
                    />
                  </div>

                  <div className="p-3.5 bg-purple-50/70 rounded-xl border border-purple-200 text-xs text-purple-900 leading-relaxed">
                    ℹ️ <strong>Delivery notice:</strong> Surcharge and rider ETA depend on exact distance from our DHA Phase 8 branch and will be confirmed when Cake Walk receives your WhatsApp request.
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-purple-800 block mb-1">
                      Pickup Branch
                    </span>
                    <p className="font-display text-sm font-bold text-cocoa-deep mb-1">
                      {business.address.full}
                    </p>
                    <p className="text-xs text-muted">
                      Opening Hours: Mon–Thu 1PM–11PM · Fri–Sun 1PM–12AM
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                        Pickup Day
                      </label>
                      <select
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700"
                      >
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This Weekend">This Weekend</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                        Target Pickup Time
                      </label>
                      <input
                        type="text"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        placeholder="e.g. 5:30 PM (Freshly prepared to order)"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm focus:outline-none focus:border-purple-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Continue to Contact Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CUSTOMER CONTACT DETAILS */}
          {currentStep === 2 && (
            <div className="p-6 sm:p-10 space-y-6">
              <h3 className="font-display text-lg font-bold text-cocoa-deep mb-2">
                2. Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Tariq"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0321 7805555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. customer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-1.5">
                  Order Instructions or Cake Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please write 'Happy 25th Birthday Ali' on cake, extra cinnamon dip on churros..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-cocoa text-sm placeholder:text-muted/60 focus:outline-none focus:border-purple-700"
                />
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3 justify-between items-center">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs text-muted hover:text-purple-900 font-bold py-2"
                >
                  ← Back to Fulfilment
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Continue to Order Review →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FINAL REVIEW & WHATSAPP SUBMIT */}
          {currentStep === 3 && (
            <div className="p-6 sm:p-10 space-y-6">
              <h3 className="font-display text-lg font-bold text-cocoa-deep mb-2">
                3. Final Order Review
              </h3>

              {/* Order breakdown */}
              <div className="p-5 rounded-2xl bg-cream/50 border border-border/70 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted pb-2 border-b border-border/50">
                  <span>Item & Quantity</span>
                  <span>Price</span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {items.map((i) => (
                    <div key={i.product.id} className="flex justify-between items-center text-sm py-1 border-b border-border/30 last:border-0">
                      <div className="flex flex-col">
                        <span className="font-semibold text-cocoa-deep">{i.product.name}</span>
                        <span className="text-xs text-muted">
                          Qty: {i.quantity} × {formatPrice(i.product.price, i.product.isFromPrice)}
                        </span>
                      </div>
                      <span className="font-bold text-cocoa">
                        {i.product.isFromPrice ? 'from ' : ''}Rs. {(i.product.price * i.quantity).toLocaleString('en-PK')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <div>
                    <span className="font-display text-base font-bold text-cocoa-deep">
                      {items.some((i) => i.product.isFromPrice) ? 'Estimated Starting Subtotal:' : 'Estimated Subtotal:'}
                    </span>
                    {items.some((i) => i.product.isFromPrice) && (
                      <p className="text-[0.65rem] text-muted italic">
                        Includes items with starting prices. Final amount confirmed by Cake Walk.
                      </p>
                    )}
                  </div>
                  <span className="font-display text-xl font-extrabold text-purple-900">
                    {items.some((i) => i.product.isFromPrice) ? 'from ' : ''}Rs. {subtotal.toLocaleString('en-PK')}
                  </span>
                </div>
              </div>

              {/* Verified Contact & Fulfilment Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
                <div className="p-4 rounded-xl bg-cream-light border border-border">
                  <span className="font-bold text-muted uppercase tracking-wider block mb-1">
                    Customer Info
                  </span>
                  <p className="font-semibold text-cocoa text-sm">{customerName}</p>
                  <p className="text-muted">{phone}</p>
                  {email && <p className="text-muted">{email}</p>}
                </div>

                <div className="p-4 rounded-xl bg-cream-light border border-border">
                  <span className="font-bold text-muted uppercase tracking-wider block mb-1">
                    {orderType === 'delivery' ? 'Delivery Address' : 'Pickup Schedule'}
                  </span>
                  {orderType === 'delivery' ? (
                    <p className="font-semibold text-cocoa text-sm">
                      {area}, Lahore — {localAddress}
                    </p>
                  ) : (
                    <p className="font-semibold text-cocoa text-sm">
                      DHA Phase 8 — {pickupDate} ({pickupTime})
                    </p>
                  )}
                </div>
              </div>

              {notes && (
                <div className="p-3 bg-cream rounded-xl border border-border text-xs text-cocoa">
                  <strong>Notes:</strong> {notes}
                </div>
              )}

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
                ℹ️ <strong>Submission confirmation:</strong> Tapping the button below opens WhatsApp directly with this pre-formatted order request. Cake Walk will confirm product availability, distance delivery fees, and order dispatch time.
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3 justify-between items-center">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs text-muted hover:text-purple-900 font-bold py-2"
                >
                  ← Edit Contact Details
                </button>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="px-4 py-3 rounded-xl border border-border text-xs font-bold text-muted hover:text-red-600 transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button
                    type="button"
                    onClick={handleFinalOrderSubmit}
                    className="btn-whatsapp flex-1 sm:flex-none justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send Order Request on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
