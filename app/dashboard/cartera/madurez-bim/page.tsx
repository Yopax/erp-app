import PageLayout from '@/components/layout/PageLayout';

export default function MadurezBIMPage() {
  const niveles = [
    { nivel: 0, descripcion: 'CAD 2D', proyectos: 0, porcentaje: 0 },
    { nivel: 1, descripcion: 'Modelos 3D aislados', proyectos: 0, porcentaje: 0 },
    { nivel: 2, descripcion: 'Colaboración basada en modelos', proyectos: 2, porcentaje: 67 },
    { nivel: 3, descripcion: 'Integración total con IFC', proyectos: 1, porcentaje: 33 },
  ];

  return (
    <PageLayout
      title="Madurez BIM"
      description="Nivel de implementación BIM según Plan BIM Perú"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Cartera', href: '/dashboard/cartera' },
        { label: 'Madurez BIM' },
      ]}
      requiredPermissions={['gestionCartera']}
    >
      <div className="grid gap-6">
        <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Nivel de Madurez BIM Corporativo</h2>
          <div className="text-5xl font-bold mb-2">Nivel 2.3</div>
          <p className="text-blue-100">Colaboración basada en modelos (en transición a Nivel 3)</p>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Distribución por Nivel de Madurez</h3>
          <div className="space-y-4">
            {niveles.map((nivel) => (
              <div key={nivel.nivel} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-bold text-lg">Nivel {nivel.nivel}</span>
                    <span className="text-gray-600 ml-2">- {nivel.descripcion}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    {nivel.proyectos} proyecto{nivel.proyectos !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${nivel.porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Objetivos Plan BIM Perú (MEF)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold text-gray-900">Meta 2025</p>
              <p className="text-sm text-gray-600">100% de proyectos en Nivel 2</p>
              <p className="text-xs text-green-600 mt-1">✓ En camino (67% actual)</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">Meta 2030</p>
              <p className="text-sm text-gray-600">80% de proyectos en Nivel 3</p>
              <p className="text-xs text-blue-600 mt-1">→ Iniciando transición (33% actual)</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
