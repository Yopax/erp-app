import PageLayout from '@/components/layout/PageLayout';

export default function ListadoProyectosPage() {
  const proyectos = [
    { id: 1, codigo: 'PRJ-2024-001', nombre: 'Carretera Lima-Huacho', responsable: 'Carlos Mendoza', estado: 'En Ejecución', inicio: '15/01/2024' },
    { id: 2, codigo: 'PRJ-2024-002', nombre: 'Puente Nanay', responsable: 'Juan Rodríguez', estado: 'Diseño', inicio: '20/03/2024' },
    { id: 3, codigo: 'PRJ-2024-003', nombre: 'Intercambio Vial Javier Prado', responsable: 'María Torres', estado: 'Validación', inicio: '10/11/2023' },
  ];

  return (
    <PageLayout
      title="Mis Proyectos"
      description="Proyectos asignados y en gestión activa"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Proyectos', href: '/dashboard/proyectos' },
        { label: 'Listado' },
      ]}
      requiredPermissions={['gestionProyectos']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Nuevo Proyecto
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{proyecto.nombre}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                      {proyecto.codigo}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mt-4">
                    <div>
                      <p className="text-gray-600">Responsable BIM</p>
                      <p className="font-medium text-gray-900">{proyecto.responsable}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Estado</p>
                      <span className="inline-flex px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                        {proyecto.estado}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600">Fecha Inicio</p>
                      <p className="font-medium text-gray-900">{proyecto.inicio}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    Ver Detalles
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                    ⋮
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
