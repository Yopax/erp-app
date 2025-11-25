import PageLayout from '@/components/layout/PageLayout';

export default function InterferenciasPage() {
  const interferencias = [
    { id: 1, tipo: 'Duro', disciplinas: 'Estructuras vs MEP', ubicacion: 'Eje 15 - Grid C3', severidad: 'Alta', estado: 'Pendiente' },
    { id: 2, tipo: 'Blando', disciplinas: 'Arquitectura vs MEP', ubicacion: 'Nivel 2 - Zona Norte', severidad: 'Media', estado: 'Resuelto' },
    { id: 3, tipo: 'Duro', disciplinas: 'Civil vs Estructuras', ubicacion: 'Km 12+500', severidad: 'Crítica', estado: 'En Revisión' },
  ];

  return (
    <PageLayout
      title="Detección de Interferencias"
      description="Clash Detection y resolución de conflictos entre modelos BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'Interferencias' },
      ]}
      requiredPermissions={['validarModelos']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Ejecutar Nueva Detección
          </button>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Todas las Severidades</option>
              <option>Crítica</option>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Todos los Estados</option>
              <option>Pendiente</option>
              <option>En Revisión</option>
              <option>Resuelto</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Interferencias</div>
            <div className="text-3xl font-bold text-blue-600">{interferencias.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Críticas</div>
            <div className="text-3xl font-bold text-red-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Altas</div>
            <div className="text-3xl font-bold text-orange-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Resueltas</div>
            <div className="text-3xl font-bold text-green-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Tasa Resolución</div>
            <div className="text-3xl font-bold text-purple-600">33%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Disciplinas</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ubicación</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {interferencias.map((clash) => (
                <tr key={clash.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">CLH-{clash.id.toString().padStart(3, '0')}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      clash.tipo === 'Duro' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {clash.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{clash.disciplinas}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{clash.ubicacion}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      clash.severidad === 'Crítica' ? 'bg-red-600 text-white' :
                      clash.severidad === 'Alta' ? 'bg-orange-500 text-white' :
                      'bg-yellow-400 text-gray-900'
                    }`}>
                      {clash.severidad}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      clash.estado === 'Resuelto' ? 'bg-green-100 text-green-800' :
                      clash.estado === 'En Revisión' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {clash.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Ver 3D</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Resolver</button>
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
