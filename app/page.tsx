'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // Si está autenticado, ir al dashboard
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
    // Si no está autenticado, ir al login
    else if (status === 'unauthenticated') {
      router.push('/login');
    }
    // Si está loading, esperar
  }, [status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">
          {status === 'loading' ? 'Verificando sesión...' : 'Redirigiendo...'}
        </p>
      </div>
    </div>
  );
}

