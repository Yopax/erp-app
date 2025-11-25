import PageLayout from '@/components/layout/PageLayout';

export default function ValidacionModelosPage() {
  const validaciones = [
    { id: 1, modelo: 'Carretera_LimaHuacho_Arquitectura_v3.2', estado: 'Aprobado', errores: 0, advertencias: 3, fecha: '22/11/2024' },
    { id: 2, modelo: 'Puente_Nanay_Estructuras_v2.8', estado: 'Con Observaciones', errores: 2, advertencias: 7, fecha: '20/11/2024' },
    { id: 3, modelo: 'IntercambioVial_MEP_v1.5', estado: 'Rechazado', errores: 15, advertencias: 8, fecha: '18/11/2024' },
  ];

  return (
    <PageLayout
      title="Validación de Modelos BIM"
      description="Control de calidad y cumplimiento de estándares BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'Validación' },
      ]}
      requiredPermissions={['validarModelos']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Nueva Validación
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Configurar Reglas
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Validaciones</div>
            <div className="text-3xl font-bold text-blue-600">{validaciones.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Aprobados</div>
            <div className="text-3xl font-bold text-green-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Con Observaciones</div>
            <div className="text-3xl font-bold text-yellow-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Rechazados</div>
            <div className="text-3xl font-bold text-red-600">1</div>
          </div>
        </div>

        {/* Lista de Validaciones */}
        <div className="space-y-4">
          {validaciones.map((validacion) => (
            <div key={validacion.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{validacion.modelo}</h3>
                  <p className="text-sm text-gray-500">Validado el {validacion.fecha}</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  validacion.estado === 'Aprobado' ? 'bg-green-100 text-green-800' :
                  validacion.estado === 'Con Observaciones' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {validacion.estado}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="text-sm text-red-600 font-medium mb-1">Errores Críticos</div>
                  <div className="text-2xl font-bold text-red-700">{validacion.errores}</div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="text-sm text-yellow-600 font-medium mb-1">Advertencias</div>
                  <div className="text-2xl font-bold text-yellow-700">{validacion.advertencias}</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium mb-1">Cumplimiento</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {validacion.errores === 0 ? '100%' : '72%'}
                  </div>
                </div>
              </div>

              {/* Reglas Evaluadas */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Reglas Evaluadas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">✓ Nomenclatura ISO 19650</span>
                    <span className="text-green-600 font-medium">Cumple</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">✓ LOD según BEP</span>
                    <span className="text-green-600 font-medium">Cumple</span>
                  </div>
                  {validacion.errores > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">✗ Elementos sin clasificación Uniformat</span>
                      <span className="text-red-600 font-medium">No Cumple</span>
                    </div>
                  )}
                  {validacion.advertencias > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">⚠ Familias sin parámetros requeridos</span>
                      <span className="text-yellow-600 font-medium">Advertencia</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-medium">
                  Ver Reporte Detallado
                </button>
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                  Descargar PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
