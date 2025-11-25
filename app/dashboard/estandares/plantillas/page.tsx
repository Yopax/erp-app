import PageLayout from '@/components/layout/PageLayout';

export default function PlantillasPage() {
  return (
    <PageLayout
      title="Plantillas BIM"
      description="Templates estandarizados para nuevos proyectos"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Estándares y Datos' },
        { label: 'Plantillas' },
      ]}
      requiredPermissions={['gestionEstandares']}
    >
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { nombre: 'Plantilla Infraestructura Vial', software: 'Revit 2024', disciplina: 'Civil' },
            { nombre: 'Plantilla Puentes', software: 'Revit 2024', disciplina: 'Estructuras' },
            { nombre: 'Plantilla Obras de Arte', software: 'Civil 3D 2024', disciplina: 'Civil' },
            { nombre: 'Plantilla MEP Infraestructura', software: 'Revit 2024', disciplina: 'MEP' },
          ].map((plantilla, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{plantilla.nombre}</h3>
                    <p className="text-sm text-gray-500 mt-1">{plantilla.software}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {plantilla.disciplina}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  Usar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
