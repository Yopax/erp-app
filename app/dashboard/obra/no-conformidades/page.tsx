import PageLayout from '@/components/layout/PageLayout';

export default function NoConformidadesPage() {
  const noConformidades = [
    { id: 'NC-001', titulo: 'Concreto fuera de especificación', severidad: 'Alta', estado: 'Abierta', fecha: '22/11/2024', responsable: 'Juan Rodríguez' },
    { id: 'NC-002', titulo: 'Armadura con espaciamiento incorrecto', severidad: 'Media', estado: 'En Corrección', fecha: '20/11/2024', responsable: 'Pedro Díaz' },
    { id: 'NC-003', titulo: 'Falta de curado en losa', severidad: 'Baja', estado: 'Cerrada', fecha: '18/11/2024', responsable: 'María Torres' },
  ];

  return (
    <PageLayout
      title="No Conformidades"
      description="Registro y seguimiento de no conformidades en obra"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Obra y Campo', href: '/dashboard/obra' },
        { label: 'No Conformidades' },
      ]}
      requiredPermissions={['reporteNoConformidades']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            + Reportar No Conformidad
          </button>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Todas las Severidades</option>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Todos los Estados</option>
              <option>Abierta</option>
              <option>En Corrección</option>
              <option>Cerrada</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total NCs</div>
            <div className="text-3xl font-bold text-blue-600">{noConformidades.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Abiertas</div>
            <div className="text-3xl font-bold text-red-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">En Corrección</div>
            <div className="text-3xl font-bold text-yellow-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Cerradas</div>
            <div className="text-3xl font-bold text-green-600">1</div>
          </div>
        </div>

        <div className="space-y-4">
          {noConformidades.map((nc) => (
            <div key={nc.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-semibold text-gray-600">{nc.id}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{nc.titulo}</h3>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span>📅 {nc.fecha}</span>
                    <span>👤 {nc.responsable}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    nc.severidad === 'Alta' ? 'bg-red-100 text-red-800' :
                    nc.severidad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {nc.severidad}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    nc.estado === 'Abierta' ? 'bg-red-100 text-red-800' :
                    nc.estado === 'En Corrección' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {nc.estado}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm">
                  Ver Detalles
                </button>
                {nc.estado !== 'Cerrada' && (
                  <button className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg text-sm">
                    Actualizar Estado
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
