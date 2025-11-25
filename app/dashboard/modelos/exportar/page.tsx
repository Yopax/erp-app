import PageLayout from '@/components/layout/PageLayout';

export default function ExportarIFCPage() {
  return (
    <PageLayout
      title="Exportar Modelos IFC"
      description="Exportación de modelos BIM a formato Industry Foundation Classes"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'Exportar IFC' },
      ]}
      requiredPermissions={['exportarModelos']}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
          <h2 className="text-xl font-semibold mb-6">Configuración de Exportación IFC</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seleccionar Modelo a Exportar *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Carretera_LimaHuacho_Arquitectura_v3.2.rvt</option>
                <option>Puente_Nanay_Estructuras_v2.8.rvt</option>
                <option>IntercambioVial_MEP_v1.5.rvt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Versión IFC *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
                  <input type="radio" name="ifcVersion" value="ifc4" className="mr-3" defaultChecked />
                  <div>
                    <div className="font-semibold text-gray-900">IFC 4</div>
                    <div className="text-xs text-gray-600">Recomendado - ISO 16739:2018</div>
                  </div>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
                  <input type="radio" name="ifcVersion" value="ifc2x3" className="mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">IFC 2x3</div>
                    <div className="text-xs text-gray-600">Compatibilidad extendida</div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MVD (Model View Definition) *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Coordination View 2.0</option>
                <option>Reference View</option>
                <option>Design Transfer View</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Opciones de Exportación
              </label>
              <div className="space-y-2">
                {[
                  { id: 'geometry', label: 'Incluir geometría 3D', checked: true },
                  { id: 'properties', label: 'Incluir propiedades de elementos', checked: true },
                  { id: 'quantities', label: 'Incluir cantidades (IfcQuantities)', checked: true },
                  { id: 'materials', label: 'Incluir información de materiales', checked: false },
                  { id: 'classification', label: 'Incluir sistemas de clasificación (Uniformat/Omniclass)', checked: true },
                ].map((option) => (
                  <label key={option.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <input type="checkbox" defaultChecked={option.checked} className="mr-3" />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel de Detalle
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>LOD 300 (Recomendado para coordinación)</option>
                <option>LOD 200 (Conceptual)</option>
                <option>LOD 350 (Coordinación detallada)</option>
                <option>LOD 400 (Fabricación)</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Cancelar
              </button>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Exportar IFC
              </button>
            </div>
          </form>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">✓ Compatibilidad Verificada</h4>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Compatible con Navisworks, Solibri, Tekla BIMsight</li>
            <li>• Cumple estándares ISO 19650 y Plan BIM Perú</li>
            <li>• Validación automática OpenBIM post-exportación</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
