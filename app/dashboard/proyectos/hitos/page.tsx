import PageLayout from '@/components/layout/PageLayout';

export default function HitosPage() {
  const hitos = [
    { id: 1, nombre: 'Entrega Modelo Arquitectónico LOD 300', fecha: '15/12/2024', estado: 'Pendiente', progreso: 75 },
    { id: 2, nombre: 'Validación de Interferencias Fase 2', fecha: '20/11/2024', estado: 'Completado', progreso: 100 },
    { id: 3, nombre: 'Exportación IFC para Coordinación', fecha: '25/10/2024', estado: 'Completado', progreso: 100 },
    { id: 4, nombre: 'Revisión BEP con Cliente', fecha: '10/01/2025', estado: 'Programado', progreso: 0 },
  ];

  return (
    <PageLayout
      title="Hitos y Entregables"
      description="Cronograma de hitos BIM y entregables del proyecto"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Proyectos', href: '/dashboard/proyectos' },
        { label: 'Hitos' },
      ]}
      requiredPermissions={['gestionProyectos']}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Hitos</div>
            <div className="text-3xl font-bold text-blue-600">{hitos.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Completados</div>
            <div className="text-3xl font-bold text-green-600">2</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">En Progreso</div>
            <div className="text-3xl font-bold text-yellow-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Programados</div>
            <div className="text-3xl font-bold text-gray-600">1</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Línea de Tiempo de Hitos</h2>
            <div className="space-y-4">
              {hitos.map((hito) => (
                <div key={hito.id} className="relative pl-8 pb-6 border-l-2 border-gray-300 last:border-0 last:pb-0">
                  <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${
                    hito.estado === 'Completado' ? 'bg-green-500 border-green-500' :
                    hito.estado === 'Pendiente' ? 'bg-yellow-500 border-yellow-500' :
                    'bg-gray-300 border-gray-300'
                  }`}></div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{hito.nombre}</h3>
                        <p className="text-sm text-gray-600 mt-1">Fecha límite: {hito.fecha}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        hito.estado === 'Completado' ? 'bg-green-100 text-green-800' :
                        hito.estado === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {hito.estado}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              hito.progreso === 100 ? 'bg-green-600' :
                              hito.progreso > 0 ? 'bg-yellow-500' : 'bg-gray-300'
                            }`}
                            style={{ width: `${hito.progreso}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600 min-w-[50px] text-right">
                          {hito.progreso}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
