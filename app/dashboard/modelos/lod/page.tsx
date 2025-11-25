import PageLayout from '@/components/layout/PageLayout';

export default function LODPage() {
  const elementos = [
    { categoria: 'Muros Exteriores', lodActual: 350, lodRequerido: 350, elementos: 245, cumplimiento: 100 },
    { categoria: 'Vigas Principales', lodActual: 300, lodRequerido: 350, elementos: 189, cumplimiento: 75 },
    { categoria: 'Instalaciones Eléctricas', lodActual: 250, lodRequerido: 300, elementos: 432, cumplimiento: 60 },
  ];

  return (
    <PageLayout
      title="Control de LOD"
      description="Nivel de Desarrollo (Level of Development) de elementos BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'LOD' },
      ]}
      requiredPermissions={['validarModelos']}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">LOD Promedio</div>
            <div className="text-3xl font-bold text-blue-600">300</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Categorías Evaluadas</div>
            <div className="text-3xl font-bold text-indigo-600">3</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Elementos</div>
            <div className="text-3xl font-bold text-purple-600">866</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Cumplimiento Global</div>
            <div className="text-3xl font-bold text-green-600">78%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Matriz de LOD por Categoría</h2>
          <div className="space-y-4">
            {elementos.map((elem, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{elem.categoria}</h3>
                    <p className="text-sm text-gray-500">{elem.elementos} elementos</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500">LOD Actual</p>
                      <p className="text-lg font-bold text-blue-600">{elem.lodActual}</p>
                    </div>
                    <div className="text-2xl text-gray-300">→</div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">LOD Requerido</p>
                      <p className="text-lg font-bold text-green-600">{elem.lodRequerido}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        elem.cumplimiento === 100 ? 'bg-green-600' :
                        elem.cumplimiento >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${elem.cumplimiento}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 min-w-[60px] text-right">
                    {elem.cumplimiento}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">📊 Niveles LOD Explicados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
            <div><strong>LOD 200:</strong> Elementos representados genéricamente</div>
            <div><strong>LOD 300:</strong> Elementos definidos con geometría precisa</div>
            <div><strong>LOD 350:</strong> Elementos con información para coordinación</div>
            <div><strong>LOD 400:</strong> Elementos con detalles de fabricación</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
