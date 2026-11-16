import { business } from '@/data/business';

/**
 * Validates Pakistani mobile phone numbers.
 * Accepts:
 *  - 03XXXXXXXXX (11 digits)
 *  - +923XXXXXXXXX (13 characters)
 *  - 923XXXXXXXXX (12 digits)
 *  - Supports hyphens and spaces (e.g. 0321-7805555)
 */
export function isValidPakistaniPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s-()]/g, '');
  // Matches: optional (+92 or 92 or 0092), followed by 3 and 9 digits
  // OR starts with 03 followed by 9 digits
  return /^((\+92)|(0092)|(92))?3[0-9]{9}$/.test(cleaned) || /^03[0-9]{9}$/.test(cleaned);
}

/**
 * Generate WhatsApp URL with a pre-filled, compliant order request message.
 * Formats starting prices and delivery/pickup information accurately.
 */
export function generateWhatsAppOrderUrl(params: {
  customerName: string;
  phone: string;
  method: 'delivery' | 'pickup';
  address?: string;
  city?: string;
  area?: string;
  pickupBranch?: string;
  pickupTime?: string;
  notes?: string;
  items: { name: string; quantity: number; price: number; isFromPrice: boolean }[];
  subtotal: number;
}): string {
  const {
    customerName,
    phone,
    method,
    address,
    city,
    area,
    pickupBranch,
    pickupTime,
    notes,
    items,
    subtotal,
  } = params;

  const hasFromPrices = items.some((item) => item.isFromPrice);

  const lines: string[] = [
    '🍰 *CAKE WALK — Order Request*',
    '_(Order Request only. Cake Walk will confirm availability, delivery fee, and preparation time.)_',
    '',
    `👤 *Customer Name:* ${customerName}`,
    `📞 *Phone Number:* ${phone}`,
    `📦 *Fulfilment Method:* ${method === 'delivery' ? '🚗 Home Delivery' : '🏪 Store Pickup'}`,
  ];

  if (method === 'delivery') {
    lines.push(
      `📍 *Delivery Street Address:* ${address || 'To be specified'}`,
      `🏙️ *Area & City:* ${area || 'DHA Phase 8'}, ${city || 'Lahore'}`,
      `ℹ️ _Delivery charges from DHA Phase 8 kitchen will be confirmed._`
    );
  } else {
    lines.push(
      `📍 *Pickup Branch:* ${pickupBranch || 'DHA Phase 8 Kitchen (96 Q Street 10, Lahore)'}`,
      `⏰ *Requested Pickup Time:* ${pickupTime || 'Today / As ready'}`,
      `ℹ️ _Pickup readiness time will be confirmed upon order acceptance._`
    );
  }

  lines.push('', '─────────────────', '*Requested Items:*', '');

  items.forEach((item, index) => {
    const pricePrefix = item.isFromPrice ? 'from ' : '';
    const formattedItemPrice = `${pricePrefix}Rs. ${item.price.toLocaleString('en-PK')}`;
    const lineTotal = item.price * item.quantity;
    const formattedLineTotal = `${pricePrefix}Rs. ${lineTotal.toLocaleString('en-PK')}`;

    lines.push(
      `${index + 1}. *${item.name}* × ${item.quantity}`,
      `   Unit: ${formattedItemPrice} | Line Total: ${formattedLineTotal}`
    );
  });

  lines.push('', '─────────────────');

  if (hasFromPrices) {
    lines.push(
      `💰 *Estimated Starting Subtotal:* Rs. ${subtotal.toLocaleString('en-PK')}`,
      `_(Includes items with starting prices. Final total confirmed upon flavor/portion selection.)_`
    );
  } else {
    lines.push(`💰 *Estimated Subtotal:* Rs. ${subtotal.toLocaleString('en-PK')}`);
  }

  if (notes) {
    lines.push('', `📝 *Customer Notes / Instructions:*`, `"${notes}"`);
  }

  lines.push(
    '',
    '─────────────────',
    '_Payment arranged on delivery/pickup or bank transfer as confirmed by Cake Walk._',
    '',
    'Please confirm availability and order total! 🙏'
  );

  const message = lines.join('\n');
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
