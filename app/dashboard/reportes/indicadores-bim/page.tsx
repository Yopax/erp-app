import PageLayout from '@/components/layout/PageLayout';

export default function IndicadoresBIMPage() {
  return (
    <PageLayout
      title="Indicadores BIM"
      description="Métricas de adopción y eficiencia BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Reportes' },
        { label: 'Indicadores BIM' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Modelos Activos</div>
            <div className="text-3xl font-bold text-blue-600">12</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Validaciones Exitosas</div>
            <div className="text-3xl font-bold text-green-600">87%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Interferencias Detectadas</div>
            <div className="text-3xl font-bold text-yellow-600">45</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Elementos Modelados</div>
            <div className="text-3xl font-bold text-purple-600">8,542</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Métricas de Calidad BIM</h3>
          <div className="space-y-4">
            {[
              { metrica: 'Cumplimiento de Nomenclatura ISO 19650', valor: 95 },
              { metrica: 'Modelos con LOD Adecuado', valor: 88 },
              { metrica: 'Elementos con Clasificación Uniformat', valor: 92 },
              { metrica: 'Exportaciones IFC Exitosas', valor: 100 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.metrica}</span>
                  <span className="text-sm font-semibold text-gray-900">{item.valor}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${item.valor >= 90 ? 'bg-green-600' : item.valor >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${item.valor}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
