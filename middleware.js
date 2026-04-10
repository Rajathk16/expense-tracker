import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register');
  const isApiRoute = pathname.startsWith('/api');
  const isStaticFile = pathname.startsWith('/_next') || pathname === '/favicon.ico' || pathname.endsWith('.svg');

  if (isStaticFile || isApiRoute) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to /register (as default flow for signup)
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/register', request.url));
  }

  // Redirect authenticated users away from auth pages to dashboard /
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
