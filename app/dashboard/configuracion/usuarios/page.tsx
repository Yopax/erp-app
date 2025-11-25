import PageLayout from '@/components/layout/PageLayout';

export default function UsuariosPage() {
  return (
    <PageLayout
      title="Gestión de Usuarios"
      description="Administración de usuarios del sistema BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Configuración' },
        { label: 'Usuarios' },
      ]}
      requiredPermissions={['gestionUsuarios']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Nuevo Usuario
          </button>
          <input
            type="search"
            placeholder="Buscar usuarios..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-64"
          />
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usuario</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { nombre: 'Carlos Mendoza', email: 'cmendoza@bimperu.pe', rol: 'Director BIM', activo: true },
                { nombre: 'Juan Rodríguez', email: 'jrodriguez@bimperu.pe', rol: 'Coordinador BIM', activo: true },
                { nombre: 'Ana García', email: 'agarcia@bimperu.pe', rol: 'Modelador BIM Civil', activo: true },
              ].map((usuario, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{usuario.nombre}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{usuario.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {usuario.rol}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      usuario.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {usuario.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Desactivar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
