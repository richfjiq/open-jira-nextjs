import mongoose from 'mongoose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //   if (req.page.name === '/api/entries') return NextResponse.next();

  const id = req.page.params?.id || '';

  const checkMongoIdRegExp = new RegExp('^[0-9a-fA-F]{24}$');

  if (!checkMongoIdRegExp.test(String(id))) {
    return new Response(
      JSON.stringify({ message: 'El id no es válido ' + id }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return NextResponse.next();
}
