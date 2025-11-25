import PageLayout from '@/components/layout/PageLayout';

export default function NuevoModeloPage() {
  return (
    <PageLayout
      title="Crear Nuevo Modelo BIM"
      description="Configuración inicial de modelo según estándares BIM"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'Nuevo Modelo' },
      ]}
      requiredPermissions={['crearModelos']}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
          <form className="space-y-6">
            {/* Información General */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
                Información General
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del Modelo *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: Carretera_LimaHuacho_Arquitectura"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proyecto *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Seleccionar proyecto</option>
                    <option>Carretera Lima-Huacho</option>
                    <option>Puente Nanay</option>
                    <option>Intercambio Vial Javier Prado</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Configuración BIM */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
                Configuración BIM
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Disciplina *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Seleccionar disciplina</option>
                    <option>Arquitectura</option>
                    <option>Estructuras</option>
                    <option>MEP</option>
                    <option>Civil</option>
                    <option>Vial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nivel de Desarrollo (LOD) *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>LOD 200 - Desarrollo Conceptual</option>
                    <option>LOD 300 - Diseño Detallado</option>
                    <option>LOD 350 - Coordinación</option>
                    <option>LOD 400 - Fabricación</option>
                    <option>LOD 500 - As-Built</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Software BIM *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Autodesk Revit 2024</option>
                    <option>Autodesk Civil 3D 2024</option>
                    <option>Tekla Structures</option>
                    <option>ArchiCAD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Versión IFC *
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>IFC 4</option>
                    <option>IFC 2x3</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Plantilla */}
            <div>
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200">
                Plantilla y Estándares
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plantilla Base
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Plantilla Estándar BIM Perú - Infraestructura Vial</option>
                    <option>Plantilla Estándar BIM Perú - Puentes</option>
                    <option>Plantilla Personalizada del Proyecto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sistema de Coordenadas
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>WGS84 UTM Zona 18S (Perú)</option>
                    <option>PSAD56 (Perú)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Crear Modelo
              </button>
            </div>
          </form>
        </div>

        {/* Información Adicional */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">ℹ️ Información Importante</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• El modelo se creará siguiendo los estándares del Plan BIM Perú (MEF)</li>
            <li>• Se aplicarán automáticamente las nomenclaturas ISO 19650</li>
            <li>• El sistema configurará los parámetros compartidos predefinidos</li>
            <li>• Se habilitará el control de versiones automático</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
