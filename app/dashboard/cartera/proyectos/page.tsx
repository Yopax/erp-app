import PageLayout from '@/components/layout/PageLayout';

export default function ProyectosActivosPage() {
  const proyectos = [
    { id: 1, nombre: 'Carretera Lima-Huacho', etapa: 'Ejecución', madurezBIM: 2, presupuesto: 'S/ 45,000,000', avance: 65 },
    { id: 2, nombre: 'Puente Nanay', etapa: 'Diseño', madurezBIM: 3, presupuesto: 'S/ 28,500,000', avance: 40 },
    { id: 3, nombre: 'Intercambio Vial Javier Prado', etapa: 'Validación', madurezBIM: 2, presupuesto: 'S/ 18,200,000', avance: 85 },
  ];

  return (
    <PageLayout
      title="Proyectos Activos"
      description="Cartera de proyectos de infraestructura en ejecución"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Cartera', href: '/dashboard/cartera' },
        { label: 'Proyectos Activos' },
      ]}
      requiredPermissions={['gestionCartera']}
    >
      <div className="grid gap-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Proyectos</div>
            <div className="text-3xl font-bold text-blue-600">{proyectos.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Inversión Total</div>
            <div className="text-3xl font-bold text-green-600">S/ 91.7M</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Avance Promedio</div>
            <div className="text-3xl font-bold text-indigo-600">63%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Madurez BIM Promedio</div>
            <div className="text-3xl font-bold text-purple-600">2.3</div>
          </div>
        </div>

        {/* Tabla de Proyectos */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Proyecto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Etapa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Madurez BIM
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Presupuesto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {proyectos.map((proyecto) => (
                <tr key={proyecto.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{proyecto.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {proyecto.etapa}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Nivel {proyecto.madurezBIM}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {proyecto.presupuesto}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${proyecto.avance}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{proyecto.avance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Ver</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Editar</button>
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
