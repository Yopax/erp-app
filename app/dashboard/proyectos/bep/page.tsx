import PageLayout from '@/components/layout/PageLayout';

export default function BEPPage() {
  return (
    <PageLayout
      title="Plan de Ejecución BIM (BEP)"
      description="Planificación y metodología BIM del proyecto"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Proyectos', href: '/dashboard/proyectos' },
        { label: 'BEP' },
      ]}
      requiredPermissions={['gestionProyectos']}
    >
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Documentos BEP Vigentes</h2>
          <div className="space-y-3">
            {[
              { nombre: 'BEP - Carretera Lima-Huacho v2.1', fecha: '10/11/2024', estado: 'Aprobado', version: '2.1' },
              { nombre: 'BEP - Puente Nanay v1.3', fecha: '05/09/2024', estado: 'En Revisión', version: '1.3' },
              { nombre: 'BEP - Intercambio Vial JP v3.0', fecha: '22/08/2024', estado: 'Aprobado', version: '3.0' },
            ].map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">📋</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{doc.nombre}</p>
                    <p className="text-sm text-gray-500">Actualizado: {doc.fecha}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    doc.estado === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {doc.estado}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Descargar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Usos BIM Definidos</h3>
            <ul className="space-y-2">
              {['Modelado 3D', 'Detección de Interferencias', 'Cuantificación Automática', 'Planificación 4D', 'Control de Costos 5D'].map((uso, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">{uso}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Roles BIM Asignados</h3>
            <ul className="space-y-2">
              {[
                { rol: 'Director BIM', responsable: 'Carlos Mendoza' },
                { rol: 'Coordinador BIM', responsable: 'Juan Rodríguez' },
                { rol: 'Modelador Civil', responsable: 'Ana García' },
              ].map((item, i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{item.rol}</span>
                  <span className="text-gray-600 text-sm">{item.responsable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
