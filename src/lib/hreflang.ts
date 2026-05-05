export function generateHreflang(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nshtare.com';
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return [
    { rel: 'alternate', hreflang: 'ar-SA', href: `${baseUrl}${normalizedPath}` },
    { rel: 'alternate', hreflang: 'en', href: `${baseUrl}/en${normalizedPath}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${baseUrl}${normalizedPath}` },
  ];
}
