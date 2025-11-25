import PageLayout from '@/components/layout/PageLayout';

export default function CalidadPage() {
  return (
    <PageLayout
      title="Control de Calidad"
      description="Inspecciones y ensayos de calidad en obra"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Obra y Campo' },
        { label: 'Control de Calidad' },
      ]}
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Inspecciones Realizadas</div>
            <div className="text-3xl font-bold text-blue-600">24</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Ensayos de Laboratorio</div>
            <div className="text-3xl font-bold text-indigo-600">15</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Tasa de Aprobación</div>
            <div className="text-3xl font-bold text-green-600">92%</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Últimas Inspecciones</h2>
          <div className="space-y-3">
            {[
              { tipo: 'Resistencia Concreto', resultado: 'Aprobado', fecha: '23/11/2024' },
              { tipo: 'Compactación Suelo', resultado: 'Aprobado', fecha: '22/11/2024' },
              { tipo: 'Prueba de Slump', resultado: 'Rechazado', fecha: '21/11/2024' },
            ].map((inspeccion, i) => (
              <div key={i} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{inspeccion.tipo}</p>
                  <p className="text-sm text-gray-500">{inspeccion.fecha}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  inspeccion.resultado === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {inspeccion.resultado}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
