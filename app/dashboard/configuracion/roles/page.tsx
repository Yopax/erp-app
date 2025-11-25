import PageLayout from '@/components/layout/PageLayout';
import { PERMISOS_POR_ROL } from '@/lib/types/auth';

export default function RolesPage() {
  return (
    <PageLayout
      title="Roles y Permisos"
      description="Configuración de roles BIM y permisos del sistema"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Configuración' },
        { label: 'Roles' },
      ]}
      requiredPermissions={['gestionUsuarios']}
    >
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            Los roles están predefinidos según el Plan BIM Perú (MEF) e ISO 19650. 
            Los permisos se asignan automáticamente según la función de cada rol.
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(PERMISOS_POR_ROL).map(([rol, permisos]) => {
            const permisosActivos = Object.entries(permisos).filter(([, valor]) => valor);
            return (
              <div key={rol} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {rol.replace(/_/g, ' ')}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {permisosActivos.length} permisos activos
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Ver Detalles
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {permisosActivos.slice(0, 6).map(([permiso]) => (
                    <span
                      key={permiso}
                      className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium"
                    >
                      {permiso.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  ))}
                  {permisosActivos.length > 6 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{permisosActivos.length - 6} más
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
