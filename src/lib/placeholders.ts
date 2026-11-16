/**
 * Generate product placeholder SVGs as data URIs.
 * These provide a tasteful fallback when actual product photos are unavailable.
 */

const categoryEmojis: Record<string, string> = {
  churros: '🥨',
  cakes: '🎂',
  'signature-cakes': '🎂',
  specialties: '⭐',
  cookies: '🍪',
  cupcakes: '🧁',
  beverages: '☕',
};

export function getPlaceholderSvg(
  name: string,
  category: string,
  width = 400,
  height = 300
): string {
  const emoji = categoryEmojis[category] || '🍰';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#EDE5D8"/>
        <stop offset="100%" style="stop-color:#F7F1E8"/>
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <text x="50%" y="40%" text-anchor="middle" font-size="48" dominant-baseline="central">${emoji}</text>
    <text x="50%" y="60%" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="#8B7D6B" dominant-baseline="central">${escapeXml(name)}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
