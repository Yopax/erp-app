import PageLayout from '@/components/layout/PageLayout';

export default function ReporteProyectoPage() {
  return (
    <PageLayout
      title="Reportes de Proyecto"
      description="Informes detallados por proyecto"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Reportes' },
        { label: 'Proyecto' },
      ]}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option>Carretera Lima-Huacho</option>
            <option>Puente Nanay</option>
            <option>Intercambio Vial Javier Prado</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Exportar Reporte
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { nombre: 'Reporte Mensual de Avance', fecha: '30/11/2024', tipo: 'PDF' },
            { nombre: 'Análisis de Interferencias', fecha: '25/11/2024', tipo: 'PDF' },
            { nombre: 'Cuantificación de Metrados', fecha: '20/11/2024', tipo: 'Excel' },
            { nombre: 'Validación de Modelos LOD 300', fecha: '15/11/2024', tipo: 'PDF' },
          ].map((reporte, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-900">{reporte.nombre}</h3>
                  <p className="text-sm text-gray-500 mt-1">Generado: {reporte.fecha}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {reporte.tipo}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">Descargar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
