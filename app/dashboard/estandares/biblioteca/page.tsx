import PageLayout from '@/components/layout/PageLayout';

export default function BibliotecaPage() {
  return (
    <PageLayout
      title="Biblioteca de Objetos BIM"
      description="Familias y componentes BIM estandarizados"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Estándares y Datos' },
        { label: 'Biblioteca' },
      ]}
      requiredPermissions={['gestionEstandares']}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Familias</div>
            <div className="text-3xl font-bold text-blue-600">248</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Categorías</div>
            <div className="text-3xl font-bold text-indigo-600">12</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Descargas Este Mes</div>
            <div className="text-3xl font-bold text-green-600">87</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Actualizadas</div>
            <div className="text-3xl font-bold text-purple-600">15</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Familias Más Utilizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { nombre: 'Muro de Contención Tipo A', categoria: 'Estructuras', version: '2.1' },
              { nombre: 'Baranda Metálica Estándar', categoria: 'Arquitectura', version: '1.8' },
              { nombre: 'Luminaria LED Vial', categoria: 'MEP', version: '3.0' },
              { nombre: 'Señalización Vertical Tipo I', categoria: 'Vial', version: '1.5' },
            ].map((familia, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{familia.nombre}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {familia.categoria} • Versión {familia.version}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
