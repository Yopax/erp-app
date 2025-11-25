import PageLayout from '@/components/layout/PageLayout';

export default function ExportarDatosPage() {
  return (
    <PageLayout
      title="Exportación de Datos"
      description="Exportar información BIM a diferentes formatos"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Estándares y Datos' },
        { label: 'Exportar' },
      ]}
      requiredPermissions={['exportarDatos']}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Seleccionar Tipo de Exportación</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { formato: 'Excel (.xlsx)', descripcion: 'Cuantificaciones y metrados', icon: '📊' },
              { formato: 'CSV (.csv)', descripcion: 'Datos tabulares para análisis', icon: '📄' },
              { formato: 'PDF (.pdf)', descripcion: 'Reportes y documentación', icon: '📑' },
              { formato: 'IFC (.ifc)', descripcion: 'Modelo completo OpenBIM', icon: '🏗️' },
              { formato: 'BCF (.bcfzip)', descripcion: 'Incidencias y comentarios', icon: '💬' },
            ].map((tipo, i) => (
              <button
                key={i}
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{tipo.icon}</span>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{tipo.formato}</p>
                    <p className="text-sm text-gray-600">{tipo.descripcion}</p>
                  </div>
                </div>
                <span className="text-blue-600">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">✓ Formatos Soportados</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Todos los formatos mantienen trazabilidad con origen BIM</li>
            <li>• Exportaciones cumplen con ISO 19650-2</li>
            <li>• Incluye metadatos de proyecto y versión</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
