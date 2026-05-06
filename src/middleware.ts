import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Nshtare Edge Middleware — Production-Grade Request Processing
 * 
 * Layer 1: Honeypot bot-trap enforcement
 * Layer 2: Legacy URL catch-all → redirect to homepage (SEO juice preservation)
 * Layer 3: Security headers injection
 * Layer 4: Canonical enforcement (trailing slash normalization)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ═══════════════════════════════════════════════════════════════
  // Layer 1: Honeypot Curse — Zero-compute bot blocking
  // ═══════════════════════════════════════════════════════════════
  if (request.cookies.has('phantom_curse')) {
    return new NextResponse(null, {
      status: 403,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // Layer 2: Trailing Slash Normalization (SEO canonical)
  // ═══════════════════════════════════════════════════════════════
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, '');
    return NextResponse.redirect(url, 301);
  }

  // ═══════════════════════════════════════════════════════════════
  // Layer 3: WooCommerce / WordPress Legacy Param Purge
  // Redirect any request with legacy e-commerce query params to clean URL
  // ═══════════════════════════════════════════════════════════════
  const legacyParams = ['orderby', 'min_price', 'max_price', 'add-to-cart', 'per_page', 'shop_view', 'per_row', 'rating', 'popularity', 'p', 'page_id', 'post_type', 'attachment_id', 'preview', 'wc-ajax'];
  const hasLegacyParam = legacyParams.some(p => request.nextUrl.searchParams.has(p));
  if (hasLegacyParam) {
    const url = request.nextUrl.clone();
    legacyParams.forEach(p => url.searchParams.delete(p));
    return NextResponse.redirect(url, 301);
  }

  // ═══════════════════════════════════════════════════════════════
  // Layer 4: WordPress / WooCommerce Legacy Path Catch-All
  // Anything that smells like old WordPress → 301 to homepage
  // ═══════════════════════════════════════════════════════════════
  const wpLegacyPatterns = [
    /^\/wp-content\//,
    /^\/wp-includes\//,
    /^\/wp-admin\//,
    /^\/wp-login/,
    /^\/wp-json\//,
    /^\/xmlrpc\.php/,
    /^\/feed\/?$/,
    /^\/comments\/feed\/?$/,
    /^\/trackback\/?$/,
    /^\/\.env/,
    /^\/wp-config/,
    /^\/readme\.html/,
    /^\/license\.txt/,
    /^\/wp-cron/,
    /^\/cart\/?$/,
    /^\/checkout\/?$/,
    /^\/my-account\/?/,
    /^\/shop\/?$/,
    /^\/store\/?$/,
    /^\/?page\/\d+/,
  ];
  
  if (wpLegacyPatterns.some(pattern => pattern.test(pathname))) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  // ═══════════════════════════════════════════════════════════════
  // Layer 5: API Protection — Block direct API access from scrapers
  // ═══════════════════════════════════════════════════════════════
  if (pathname.startsWith('/api/') && !pathname.includes('/abyss')) {
    const referer = request.headers.get('referer') || '';
    if (!referer.includes('nshtare.com') && process.env.NODE_ENV === 'production') {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  // ═══════════════════════════════════════════════════════════════
  // Layer 6: Security & Performance Response Headers
  // ═══════════════════════════════════════════════════════════════
  const response = NextResponse.next();
  
  // X-Robots-Tag for non-indexable paths
  if (pathname.startsWith('/order') || pathname.startsWith('/en/order') || pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon)
     * - Static assets (.png, .jpg, .webp, .svg, .css, .js, .woff2, etc.)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff|woff2|ttf|eot|mp4|webm)).*)',
  ],
};
