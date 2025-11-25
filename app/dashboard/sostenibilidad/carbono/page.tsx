import PageLayout from '@/components/layout/PageLayout';

export default function CarbonoPage() {
  return (
    <PageLayout
      title="Huella de Carbono"
      description="Cálculo y seguimiento de emisiones CO₂ del proyecto"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Sostenibilidad' },
        { label: 'Huella de Carbono' },
      ]}
    >
      <div className="space-y-6">
        <div className="bg-linear-to-r from-green-600 to-teal-600 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Emisiones Totales del Proyecto</h2>
          <div className="text-5xl font-bold mb-2">1,245 tCO₂eq</div>
          <p className="text-green-100">Carretera Lima-Huacho - Estimado a la fecha</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Materiales</div>
            <div className="text-3xl font-bold text-gray-700">687 tCO₂</div>
            <div className="text-sm text-gray-500 mt-1">55% del total</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Transporte</div>
            <div className="text-3xl font-bold text-gray-700">398 tCO₂</div>
            <div className="text-sm text-gray-500 mt-1">32% del total</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Maquinaria</div>
            <div className="text-3xl font-bold text-gray-700">160 tCO₂</div>
            <div className="text-sm text-gray-500 mt-1">13% del total</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Emisiones por Categoría</h3>
          <div className="space-y-3">
            {[
              { categoria: 'Concreto', cantidad: '450 tCO₂', porcentaje: 36 },
              { categoria: 'Acero', cantidad: '237 tCO₂', porcentaje: 19 },
              { categoria: 'Transporte de Materiales', cantidad: '298 tCO₂', porcentaje: 24 },
              { categoria: 'Combustibles', cantidad: '160 tCO₂', porcentaje: 13 },
              { categoria: 'Otros', cantidad: '100 tCO₂', porcentaje: 8 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.categoria}</span>
                    <span className="text-sm text-gray-600">{item.cantidad}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${item.porcentaje}%` }}
                    ></div>
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
