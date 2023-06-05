import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard/main', request.url));
    }

    if (request.nextUrl.pathname === '/dashboard') {
        return NextResponse.redirect(new URL('/dashboard/main', request.url));
    }
}



export const config = {
    matcher: ['/', '/dashboard/:path*'],
}