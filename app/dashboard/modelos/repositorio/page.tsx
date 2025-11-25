import PageLayout from '@/components/layout/PageLayout';

export default function RepositorioModelosPage() {
  const modelos = [
    { 
      id: 1, 
      nombre: 'Carretera_LimaHuacho_Arquitectura_v3.2.rvt', 
      disciplina: 'Arquitectura', 
      lod: 300, 
      tamano: '125 MB', 
      actualizado: '22/11/2024',
      autor: 'Ana García'
    },
    { 
      id: 2, 
      nombre: 'Puente_Nanay_Estructuras_v2.8.rvt', 
      disciplina: 'Estructuras', 
      lod: 350, 
      tamano: '89 MB', 
      actualizado: '20/11/2024',
      autor: 'Pedro López'
    },
    { 
      id: 3, 
      nombre: 'IntercambioVial_MEP_v1.5.rvt', 
      disciplina: 'MEP', 
      lod: 300, 
      tamano: '67 MB', 
      actualizado: '18/11/2024',
      autor: 'Luis Ramírez'
    },
  ];

  const disciplinas = ['Todas', 'Arquitectura', 'Estructuras', 'MEP', 'Civil'];

  return (
    <PageLayout
      title="Repositorio de Modelos BIM"
      description="Gestión centralizada de modelos BIM del proyecto"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Modelos BIM', href: '/dashboard/modelos' },
        { label: 'Repositorio' },
      ]}
      requiredPermissions={['crearModelos']}
    >
      <div className="space-y-6">
        {/* Filtros y búsqueda */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-2">
            {disciplinas.map((disc) => (
              <button
                key={disc}
                className={`px-4 py-2 rounded-lg ${
                  disc === 'Todas' 
                    ? 'bg-blue-600 text-white' 
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {disc}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Buscar modelos..."
              className="px-4 py-2 border border-gray-300 rounded-lg w-64"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Subir Modelo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Modelos</div>
            <div className="text-3xl font-bold text-blue-600">{modelos.length}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Tamaño Total</div>
            <div className="text-3xl font-bold text-green-600">281 MB</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">LOD Promedio</div>
            <div className="text-3xl font-bold text-indigo-600">317</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Última Actualización</div>
            <div className="text-lg font-bold text-gray-600">Hace 2 días</div>
          </div>
        </div>

        {/* Lista de Modelos */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre del Modelo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Disciplina</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">LOD</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tamaño</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Autor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Última Modificación</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {modelos.map((modelo) => (
                <tr key={modelo.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-blue-600 font-bold">📐</span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{modelo.nombre}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                      {modelo.disciplina}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                    LOD {modelo.lod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {modelo.tamano}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {modelo.autor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {modelo.actualizado}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">Descargar</button>
                    <button className="text-indigo-600 hover:text-indigo-900">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
