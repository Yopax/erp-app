import PageLayout from '@/components/layout/PageLayout';

export default function EnergiaPage() {
  return (
    <PageLayout
      title="Eficiencia Energética"
      description="Análisis y optimización del consumo energético"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Sostenibilidad' },
        { label: 'Energía' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Consumo Mensual</div>
            <div className="text-3xl font-bold text-blue-600">18,500 kWh</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Ahorro vs Baseline</div>
            <div className="text-3xl font-bold text-green-600">22%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Energía Renovable</div>
            <div className="text-3xl font-bold text-yellow-600">12%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Costo Mensual</div>
            <div className="text-3xl font-bold text-purple-600">S/ 9,250</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Distribución de Consumo por Uso</h3>
          <div className="space-y-3">
            {[
              { uso: 'Maquinaria Pesada', consumo: '8,500 kWh', porcentaje: 46 },
              { uso: 'Iluminación Temporal', consumo: '4,200 kWh', porcentaje: 23 },
              { uso: 'Oficinas de Obra', consumo: '3,800 kWh', porcentaje: 20 },
              { uso: 'Equipos Menores', consumo: '2,000 kWh', porcentaje: 11 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.uso}</span>
                  <span className="text-sm text-gray-600">{item.consumo}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">⚡ Medidas de Eficiencia Implementadas</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Paneles solares para iluminación de obra (12% energía renovable)</li>
            <li>• Luminarias LED en todas las áreas de trabajo (-30% consumo)</li>
            <li>• Equipos clase A+ de alta eficiencia energética</li>
            <li>• Sistema de gestión energética ISO 50001</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
