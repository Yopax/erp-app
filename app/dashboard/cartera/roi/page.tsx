import PageLayout from '@/components/layout/PageLayout';

export default function ROIPage() {
  const proyectos = [
    { nombre: 'Carretera Lima-Huacho', inversion: 45000000, retornoEstimado: 58500000, roi: 30, periodo: '5 años' },
    { nombre: 'Puente Nanay', inversion: 28500000, retornoEstimado: 39900000, roi: 40, periodo: '4 años' },
    { nombre: 'Intercambio Vial Javier Prado', inversion: 18200000, retornoEstimado: 23660000, roi: 30, periodo: '6 años' },
  ];

  return (
    <PageLayout
      title="Análisis de ROI"
      description="Retorno de inversión y viabilidad económica de proyectos"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Cartera', href: '/dashboard/cartera' },
        { label: 'Análisis ROI' },
      ]}
      requiredPermissions={['gestionCartera']}
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">ROI Promedio</div>
            <div className="text-3xl font-bold text-green-600">33.3%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Inversión Total</div>
            <div className="text-3xl font-bold text-blue-600">S/ 91.7M</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Retorno Proyectado</div>
            <div className="text-3xl font-bold text-purple-600">S/ 122.1M</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Análisis por Proyecto</h2>
          <div className="space-y-4">
            {proyectos.map((proyecto, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{proyecto.nombre}</h3>
                    <p className="text-sm text-gray-500">Periodo: {proyecto.periodo}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    ROI: {proyecto.roi}%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Inversión Inicial</p>
                    <p className="font-semibold text-gray-900">
                      S/ {(proyecto.inversion / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Retorno Estimado</p>
                    <p className="font-semibold text-green-600">
                      S/ {(proyecto.retornoEstimado / 1000000).toFixed(1)}M
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
