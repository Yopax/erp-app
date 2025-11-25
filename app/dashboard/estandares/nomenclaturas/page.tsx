import PageLayout from '@/components/layout/PageLayout';

export default function NomenclaturasPage() {
  return (
    <PageLayout
      title="Nomenclaturas y Codificación"
      description="Estándares de nomenclatura según ISO 19650"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Estándares y Datos' },
        { label: 'Nomenclaturas' },
      ]}
      requiredPermissions={['gestionEstandares']}
    >
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Estructura de Nomenclatura ISO 19650</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="font-mono text-sm text-blue-900">
              [PROYECTO]-[ORIGEN]-[ZONA]-[NIVEL]-[TIPO]-[DISCIPLINA]-[NUMERO]
            </p>
          </div>
          <div className="space-y-3">
            {[
              { campo: 'PROYECTO', ejemplo: 'LH', descripcion: 'Código del proyecto (Lima-Huacho)' },
              { campo: 'ORIGEN', ejemplo: 'BIM', descripcion: 'Origen del archivo (BIM, CAD, DOC)' },
              { campo: 'ZONA', ejemplo: 'Z01', descripcion: 'Zona del proyecto' },
              { campo: 'NIVEL', ejemplo: 'L02', descripcion: 'Nivel o piso' },
              { campo: 'TIPO', ejemplo: 'M', descripcion: 'Tipo de elemento (M=Muro, V=Viga)' },
              { campo: 'DISCIPLINA', ejemplo: 'ARQ', descripcion: 'Disciplina (ARQ, EST, MEP, CIV)' },
              { campo: 'NUMERO', ejemplo: '001', descripcion: 'Número secuencial' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <span className="font-semibold text-gray-900">{item.campo}</span>
                  <span className="text-gray-500 ml-3 text-sm">{item.descripcion}</span>
                </div>
                <code className="px-3 py-1 bg-gray-100 text-gray-800 rounded font-mono text-sm">
                  {item.ejemplo}
                </code>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="font-semibold mb-3">Ejemplo Completo</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-mono text-lg text-gray-900 mb-2">LH-BIM-Z01-L02-M-ARQ-001</p>
            <p className="text-sm text-gray-600">
              Muro arquitectónico #001, nivel 2, zona 1 del proyecto Lima-Huacho
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
