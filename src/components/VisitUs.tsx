'use client';

import { business } from '@/data/business';

export default function VisitUs() {
  return (
    <section id="visit" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-caramel text-sm uppercase tracking-[0.25em] font-body font-semibold mb-3">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cocoa-deep mb-4">
            Visit Cake Walk
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-caramel text-lg">✦</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map placeholder & directions */}
          <div className="space-y-6">
            {/* Google Maps embed area */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=31.50328070,74.44607080`}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[4/3] rounded-2xl bg-cream-dark overflow-hidden relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-dark to-cream">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <svg className="w-8 h-8 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="font-display text-lg text-cocoa-deep mb-1">Open in Google Maps</p>
                  <p className="text-muted text-sm font-body">Get directions to Cake Walk</p>
                </div>
              </div>
            </a>
          </div>

          {/* Business info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                <svg className="w-6 h-6 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base text-cocoa-deep mb-1">Address</h3>
                <p className="text-muted text-sm font-body leading-relaxed">
                  {business.address.full}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                <svg className="w-6 h-6 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base text-cocoa-deep mb-1">Phone</h3>
                <a
                  href={`tel:${business.phone}`}
                  className="text-caramel text-sm font-body hover:underline"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                <svg className="w-6 h-6 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base text-cocoa-deep mb-2">Opening Hours</h3>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-body gap-8">
                    <span className="text-muted">{business.hours.weekday.days}</span>
                    <span className="text-cocoa font-medium">{business.hours.weekday.time}</span>
                  </div>
                  <div className="flex justify-between text-sm font-body gap-8">
                    <span className="text-muted">{business.hours.weekend.days}</span>
                    <span className="text-cocoa font-medium">{business.hours.weekend.time}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">
                <svg className="w-6 h-6 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-base text-cocoa-deep mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {['Delivery', 'Takeaway', 'Outdoor Seating', 'Parking', 'Kid-Friendly'].map((feature) => (
                    <span
                      key={feature}
                      className="inline-block bg-cream px-3 py-1 rounded-full text-xs font-body text-cocoa font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${business.phone}`}
                className="btn-primary flex-1 justify-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Us
              </a>
              <a
                href={`${business.whatsappLink}?text=${encodeURIComponent('Hi Cake Walk! 👋')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
