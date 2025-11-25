import PageLayout from '@/components/layout/PageLayout';

export default function RendimientoPage() {
  return (
    <PageLayout
      title="Análisis de Rendimiento"
      description="Productividad y eficiencia del equipo BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Reportes' },
        { label: 'Rendimiento' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Horas Productivas</div>
            <div className="text-3xl font-bold text-blue-600">1,248 h</div>
            <div className="text-sm text-gray-500 mt-1">Este mes</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Eficiencia Promedio</div>
            <div className="text-3xl font-bold text-green-600">82%</div>
            <div className="text-sm text-gray-500 mt-1">Meta: 80%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Tiempo de Coordinación</div>
            <div className="text-3xl font-bold text-indigo-600">18%</div>
            <div className="text-sm text-gray-500 mt-1">Del total de horas</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Rendimiento por Disciplina</h3>
          <div className="space-y-3">
            {[
              { disciplina: 'Arquitectura', elementos: 2840, horas: 320, rendimiento: 8.9 },
              { disciplina: 'Estructuras', elementos: 1950, horas: 280, rendimiento: 7.0 },
              { disciplina: 'MEP', elementos: 3752, horas: 450, rendimiento: 8.3 },
              { disciplina: 'Civil', elementos: 2100, horas: 198, rendimiento: 10.6 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{item.disciplina}</p>
                  <p className="text-sm text-gray-500">{item.elementos} elementos en {item.horas}h</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">{item.rendimiento}</p>
                  <p className="text-xs text-gray-500">elem/hora</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
