import PageLayout from '@/components/layout/PageLayout';

export default function CoordinacionPage() {
  const reuniones = [
    { id: 1, titulo: 'Reunión de Coordinación Semanal #12', fecha: '25/11/2024 10:00', participantes: 8, estado: 'Programada' },
    { id: 2, titulo: 'Revisión de Interferencias - Fase 2', fecha: '20/11/2024 15:00', participantes: 5, estado: 'Completada' },
    { id: 3, titulo: 'Validación de Modelos Estructurales', fecha: '18/11/2024 14:00', participantes: 6, estado: 'Completada' },
  ];

  return (
    <PageLayout
      title="Coordinación BIM"
      description="Gestión de coordinación y reuniones del equipo BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Proyectos', href: '/dashboard/proyectos' },
        { label: 'Coordinación' },
      ]}
      requiredPermissions={['gestionProyectos']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Reuniones de Coordinación</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Nueva Reunión
          </button>
        </div>

        <div className="grid gap-4">
          {reuniones.map((reunion) => (
            <div key={reunion.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{reunion.titulo}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      reunion.estado === 'Programada' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {reunion.estado}
                    </span>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600 mt-3">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{reunion.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>👥</span>
                      <span>{reunion.participantes} participantes</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    {reunion.estado === 'Programada' ? 'Unirse' : 'Ver Acta'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Temas Pendientes de Coordinación</h3>
            <ul className="space-y-3">
              {[
                'Resolución de interferencias MEP-Estructuras',
                'Definición de LOD para elementos especiales',
                'Validación de nomenclatura de elementos',
                'Integración de modelos de subcontratas',
              ].map((tema, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">⚠️</span>
                  <span className="text-gray-700">{tema}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Acuerdos Recientes</h3>
            <ul className="space-y-3">
              {[
                { acuerdo: 'Usar IFC 4 para todos los modelos', fecha: '20/11/2024' },
                { acuerdo: 'Reuniones de coordinación cada lunes 10:00', fecha: '18/11/2024' },
                { acuerdo: 'Validación semanal de interferencias', fecha: '15/11/2024' },
              ].map((item, i) => (
                <li key={i} className="border-l-4 border-green-500 pl-3 py-2">
                  <p className="text-gray-900 font-medium">{item.acuerdo}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.fecha}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
