import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // 1. Honeypot Curse Check — Zero-compute bot blocking
  if (request.cookies.has('phantom_curse')) {
    return new NextResponse(null, {
      status: 403,
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  // 2. API Protection — Block direct API access from scrapers
  if (url.startsWith('/api/') && !url.includes('/system-core/abyss')) {
    const referer = request.headers.get('referer') || '';
    if (!referer.includes('nshtare.com') && process.env.NODE_ENV === 'production') {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }

  // 3. Continue to Next.js
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
