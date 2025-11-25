import PageLayout from '@/components/layout/PageLayout';

export default function ACVPage() {
  return (
    <PageLayout
      title="Análisis de Ciclo de Vida (ACV)"
      description="Evaluación de impacto ambiental del proyecto completo"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Sostenibilidad' },
        { label: 'ACV' },
      ]}
    >
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Fases del Ciclo de Vida</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { fase: 'Extracción', impacto: 25, color: 'blue' },
              { fase: 'Construcción', impacto: 35, color: 'indigo' },
              { fase: 'Operación', impacto: 30, color: 'purple' },
              { fase: 'Fin de Vida', impacto: 10, color: 'pink' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{item.fase}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{item.impacto}%</div>
                <div className={`w-full h-2 bg-${item.color}-600 rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-3">Indicadores Ambientales</h3>
            <div className="space-y-3">
              {[
                { indicador: 'Potencial de Calentamiento Global', valor: '1,245 tCO₂eq' },
                { indicador: 'Consumo Energía Primaria', valor: '18,500 MJ' },
                { indicador: 'Consumo de Agua', valor: '2,340 m³' },
                { indicador: 'Generación de Residuos', valor: '850 ton' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">{item.indicador}</span>
                  <span className="font-semibold text-gray-900">{item.valor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-3">Mejoras Propuestas</h3>
            <div className="space-y-2">
              {[
                'Uso de concreto con ceniza volante (-15% CO₂)',
                'Optimización de rutas de transporte (-8% CO₂)',
                'Reutilización de material excavado (-5% CO₂)',
                'Equipos de construcción eléctricos (-12% CO₂)',
              ].map((mejora, i) => (
                <div key={i} className="flex items-start gap-2 p-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-sm text-gray-700">{mejora}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
