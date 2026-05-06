import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Bot detection endpoint — blocks scrapers that ignore robots.txt rules.
  
  // Set a tracking cookie to identify repeat offenders
  const response = new NextResponse(
    JSON.stringify({ error: "Access Denied", code: "BOT_DETECTED" }),
    { 
      status: 403, 
      headers: { 'Content-Type': 'application/json' } 
    }
  );

  response.cookies.set({
    name: 'bot_flag',
    value: '1',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });

  return response;
}
