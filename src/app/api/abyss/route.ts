import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // This is a Honeypot trap endpoint designed for malicious scrapers
  // that ignore the robots.txt disallow rule.
  
  // Set a "phantom_curse" cookie to identify this scraper in future requests
  // Next.js middleware (if implemented later) can instantly block any request with this cookie.
  const response = new NextResponse(
    JSON.stringify({ error: "Access Denied", code: "PHANTOM_CURSE" }),
    { 
      status: 403, 
      headers: { 'Content-Type': 'application/json' } 
    }
  );

  response.cookies.set({
    name: 'phantom_curse',
    value: '1',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  return response;
}
