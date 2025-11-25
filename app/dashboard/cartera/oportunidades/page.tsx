import PageLayout from '@/components/layout/PageLayout';

export default function OportunidadesPage() {
  const oportunidades = [
    { id: 1, nombre: 'Ampliación Aeropuerto Jorge Chávez', cliente: 'MTC', probabilidad: 75, valor: 'S/ 120,000,000', fase: 'Negociación' },
    { id: 2, nombre: 'Mejoramiento Vía Expresa Sur', cliente: 'MML', probabilidad: 60, valor: 'S/ 85,000,000', fase: 'Propuesta' },
    { id: 3, nombre: 'Puente Billinghurst', cliente: 'GRL', probabilidad: 40, valor: 'S/ 32,000,000', fase: 'Prospección' },
  ];

  return (
    <PageLayout
      title="Oportunidades de Negocio"
      description="Pipeline de proyectos potenciales y licitaciones"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Cartera', href: '/dashboard/cartera' },
        { label: 'Oportunidades' },
      ]}
      requiredPermissions={['gestionCartera']}
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Oportunidades Activas</div>
            <div className="text-3xl font-bold text-blue-600">{oportunidades.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Valor Total Pipeline</div>
            <div className="text-3xl font-bold text-green-600">S/ 237M</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Probabilidad Promedio</div>
            <div className="text-3xl font-bold text-purple-600">58%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proyecto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor Estimado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Probabilidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fase</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {oportunidades.map((oportunidad) => (
                <tr key={oportunidad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{oportunidad.nombre}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{oportunidad.cliente}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{oportunidad.valor}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${oportunidad.probabilidad}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{oportunidad.probabilidad}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {oportunidad.fase}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">Gestionar</button>
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
