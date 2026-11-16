/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { business } from '@/data/business';

export default function CustomCakes() {
  const [occasion, setOccasion] = useState('Birthday');
  const [targetDate, setTargetDate] = useState('');
  const [servingSize, setServingSize] = useState('2-3 lbs (8-12 servings)');
  const [flavor, setFlavor] = useState('Double Chocolate Fudge');
  const [designIdea, setDesignIdea] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [
      '🎂 *CAKE WALK — Custom Cake Design Enquiry*',
      '',
      `👤 *Client Name:* ${clientName || 'Not provided'}`,
      `📞 *Contact Number:* ${clientPhone || 'Not provided'}`,
      `🎉 *Occasion:* ${occasion}`,
      `📅 *Target Date:* ${targetDate || 'Flexible / To be discussed'}`,
      `⚖️ *Estimated Size:* ${servingSize}`,
      `🍰 *Preferred Flavour:* ${flavor}`,
    ];

    if (designIdea.trim()) {
      lines.push(`🎨 *Design Notes & Theme:* ${designIdea.trim()}`);
    }

    lines.push(
      '',
      '_I will send my design inspiration/reference photo here in WhatsApp._',
      '',
      'Please advise on design availability and pricing estimate! 🙏'
    );

    const message = lines.join('\n');
    const waUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const galleryItems = [
    {
      title: 'Tiered Floral Elegance',
      tag: 'Weddings & Engagements',
      img: '/images/custom/birthday-floral.webp',
      desc: 'Multi-tiered buttercream sculptures with natural florals, gold leaf, and custom acrylic toppers.',
    },
    {
      title: 'Vintage Lambeth Piping',
      tag: 'Classic Milestone Cakes',
      img: '/images/custom/lambeth-vintage.webp',
      desc: 'Intricate retro ruffles, delicate pearl beading, and vibrant cocktail cherries.',
    },
    {
      title: 'Kids & Themed Creations',
      tag: 'Birthdays & Fantasy',
      img: '/images/custom/character-kids.webp',
      desc: 'Custom cartoon, superhero, safari, and princess sculpted tiers handcrafted to your theme.',
    },
    {
      title: 'Artisan Drip & Chocochino',
      tag: 'Contemporary Chic',
      img: '/images/custom/drip-chocochino.webp',
      desc: 'Luscious caramel drips, French macarons, chocolate curls, and customized celebratory lettering.',
    },
  ];

  return (
    <section id="custom-cakes" className="section-padding bg-cocoa-deep text-white scroll-mt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-300 text-xs sm:text-sm uppercase tracking-[0.25em] font-body font-bold mb-3">
            Bespoke Celebration Studio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
            Custom Cakes for Special Moments
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto font-body leading-relaxed">
            Every celebration deserves a centerpiece as unique as your story. Aysha Salman brings her background in design and baking to sculpt custom masterpieces in Lahore.
          </p>
          <div className="divider-ornament max-w-xs mx-auto mt-4">
            <span className="text-purple-400 text-lg">✦</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((g, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-1.5"
            >
              <div className="aspect-square relative overflow-hidden bg-purple-950/40">
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-cocoa-deep/80 backdrop-blur-md text-purple-200 text-[0.65rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {g.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white mb-1.5">
                  {g.title}
                </h3>
                <p className="text-white/60 text-xs font-body leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Cake Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-bold block mb-1">
              Start Your Design Consultation
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Enquire About Your Custom Cake
            </h3>
            <p className="text-white/70 text-xs sm:text-sm font-body mt-1">
              Fill in your vision below. We will open WhatsApp with your specifications pre-filled so you can easily send reference photos.
            </p>
          </div>

          <form onSubmit={handleEnquirySubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-purple-300">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayesha Khan"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-300 focus:bg-white/20 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone <span className="text-purple-300">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0321 1234567"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-300 focus:bg-white/20 text-sm transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cocoa-deep border border-white/20 text-white text-sm focus:outline-none focus:border-purple-300"
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Wedding / Engagement">Wedding / Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Baby Shower / Gender Reveal">Baby Shower</option>
                  <option value="Graduation / Milestone">Graduation / Milestone</option>
                  <option value="Corporate Event">Corporate Event</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Target Event Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. 25th Nov 2026"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                  Estimated Weight
                </label>
                <select
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cocoa-deep border border-white/20 text-white text-sm focus:outline-none focus:border-purple-300"
                >
                  <option value="2 lbs (6-8 servings)">2 lbs (6–8 servings)</option>
                  <option value="3 lbs (10-12 servings)">3 lbs (10–12 servings)</option>
                  <option value="4-5 lbs (15-20 servings)">4–5 lbs (15–20 servings)</option>
                  <option value="6+ lbs / Multi-tiered">6+ lbs / Multi-tier</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                Flavour Preference
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-cocoa-deep border border-white/20 text-white text-sm focus:outline-none focus:border-purple-300"
              >
                <option value="Double Chocolate Fudge">Double Chocolate Fudge</option>
                <option value="Chocochino (Coffee & Caramel)">Chocochino (Coffee & Caramel)</option>
                <option value="Vanilla Caramel Crunch">Vanilla Caramel Crunch</option>
                <option value="Cadbury Malt">Cadbury Malt</option>
                <option value="Lotus Tres Leches / Milk Cake">Lotus Tres Leches</option>
                <option value="Red Velvet with Cream Cheese">Red Velvet Cream Cheese</option>
                <option value="Custom / Surprise Me">Custom / Baker&apos;s Choice</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/90 uppercase tracking-wider mb-1.5">
                Design Idea / Theme Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe your desired theme, colour palette, topper text, or special elements..."
                value={designIdea}
                onChange={(e) => setDesignIdea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-300 text-sm"
              />
            </div>

            <div className="p-3 bg-white/10 rounded-xl text-xs text-purple-200 leading-relaxed border border-white/10">
              📸 <strong>Reference Photo Sharing:</strong> Once you tap the button below, WhatsApp will open with your details. You can then attach any cake photos, sketches, or color palettes directly to our chat.
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Custom Cake Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
