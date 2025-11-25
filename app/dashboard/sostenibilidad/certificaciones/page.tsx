import PageLayout from '@/components/layout/PageLayout';

export default function CertificacionesPage() {
  return (
    <PageLayout
      title="Certificaciones Ambientales"
      description="Seguimiento de certificaciones y estándares sostenibles"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Sostenibilidad' },
        { label: 'Certificaciones' },
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { nombre: 'LEED v4 BD+C', nivel: 'Gold', progreso: 75, estado: 'En Proceso' },
            { nombre: 'EDGE Certification', nivel: 'Certified', progreso: 100, estado: 'Aprobado' },
            { nombre: 'ISO 14001', nivel: '-', progreso: 60, estado: 'En Proceso' },
            { nombre: 'Plan BIM Perú Sostenible', nivel: 'Cumple', progreso: 85, estado: 'En Proceso' },
          ].map((cert, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{cert.nombre}</h3>
                  <p className="text-sm text-gray-500 mt-1">Nivel: {cert.nivel}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.estado === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {cert.estado}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${cert.progreso === 100 ? 'bg-green-600' : 'bg-blue-600'}`}
                    style={{ width: `${cert.progreso}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-600">{cert.progreso}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">🌿 Requisitos de Sostenibilidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Reducción del 20% en consumo de agua',
              'Uso del 30% de materiales reciclados',
              'Eficiencia energética mínima del 25%',
              'Plan de gestión de residuos aprobado',
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-2 text-green-800">
                <span className="text-green-600">✓</span>
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
