// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  // TODO: validate and forward to email/CRM provider
  console.log('Contact submission:', body);
  return NextResponse.json({ ok: true });
}
