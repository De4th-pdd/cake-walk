import { business } from '@/data/business';

/**
 * Generate WhatsApp URL with a pre-filled order message.
 */
export function generateWhatsAppOrderUrl(params: {
  customerName: string;
  phone: string;
  method: 'delivery' | 'pickup';
  address?: string;
  pickupTime?: string;
  notes?: string;
  items: { name: string; quantity: number; price: number; isFromPrice: boolean }[];
  subtotal: number;
}): string {
  const { customerName, phone, method, address, pickupTime, notes, items, subtotal } = params;

  const lines: string[] = [
    '🍰 *CAKE WALK — New Order Request*',
    '',
    `👤 *Customer:* ${customerName}`,
    `📞 *Phone:* ${phone}`,
    `📦 *Method:* ${method === 'delivery' ? '🚗 Delivery' : '🏪 Pickup'}`,
  ];

  if (method === 'delivery' && address) {
    lines.push(`📍 *Address:* ${address}`);
  }

  if (method === 'pickup' && pickupTime) {
    lines.push(`🕐 *Preferred Pickup Time:* ${pickupTime}`);
  }

  lines.push('', '─────────────────', '*Order Items:*', '');

  items.forEach((item, index) => {
    const priceLabel = item.isFromPrice ? `from Rs. ${item.price.toLocaleString('en-PK')}` : `Rs. ${item.price.toLocaleString('en-PK')}`;
    lines.push(`${index + 1}. ${item.name} × ${item.quantity} — ${priceLabel} each`);
  });

  lines.push(
    '',
    '─────────────────',
    `💰 *Subtotal:* Rs. ${subtotal.toLocaleString('en-PK')}`,
    '',
  );

  if (notes) {
    lines.push(`📝 *Notes:* ${notes}`, '');
  }

  lines.push(
    '_Prices as listed on website. Final amount to be confirmed by Cake Walk._',
    '',
    'Thank you! 🙏'
  );

  const message = lines.join('\n');
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
