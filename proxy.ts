import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy para protección de rutas basado en roles BIM
 * Verifica autenticación mediante cookies de NextAuth
 */
export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rutas públicas que no requieren autenticación
  const publicRoutes = ['/login', '/'];
  
  // Rutas de API y recursos estáticos siempre permitidos
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    publicRoutes.includes(pathname)
  ) {
    return NextResponse.next();
  }

  // Verificar si hay cookie de sesión de NextAuth
  const sessionToken = request.cookies.get('next-auth.session-token') || 
                      request.cookies.get('__Secure-next-auth.session-token');

  console.log(`[PROXY] ${pathname} - Session token:`, sessionToken ? 'EXISTS' : 'MISSING');

  // Si no hay sesión y está intentando acceder a ruta protegida del dashboard
  if (!sessionToken && pathname.startsWith('/dashboard')) {
    console.log(`[PROXY] Redirecting to /login - No session token`);
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado, permitir acceso
  return NextResponse.next();
}
