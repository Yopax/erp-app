'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { RoleBIM, PERMISOS_POR_ROL } from '@/lib/types/auth';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  requiredPermissions?: (keyof typeof PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM])[];
}

/**
 * Layout reutilizable para páginas del dashboard
 * Incluye breadcrumbs, título, descripción y verificación de permisos
 */
export default function PageLayout({
  children,
  title,
  description,
  breadcrumbs = [],
  requiredPermissions = [],
}: PageLayoutProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirigir si no está autenticado
    if (status === 'unauthenticated') {
      router.push('/login');
    }

    // Verificar permisos si están especificados
    if (status === 'authenticated' && requiredPermissions.length > 0) {
      const userRole = session?.user?.role as RoleBIM | undefined;
      
      if (userRole) {
        const userPermissions = PERMISOS_POR_ROL[userRole];
        const hasPermission = requiredPermissions.some(
          permission => userPermissions[permission]
        );

        if (!hasPermission) {
          router.push('/dashboard');
        }
      }
    }
  }, [status, session, requiredPermissions, router]);

  // Mostrar loading mientras se verifica la sesión
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  // No renderizar nada si no está autenticado (evita flash de contenido)
  if (status === 'unauthenticated') {
    return null;
  }

  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="mb-4 text-sm">
          <ol className="flex items-center space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="text-blue-600 hover:text-blue-800">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gray-600">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Encabezado de página */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>

      {/* Contenido de la página */}
      <div>{children}</div>
    </div>
  );
}
