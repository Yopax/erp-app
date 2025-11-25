import PageLayout from '@/components/layout/PageLayout';

export default function AvanceFisicoPage() {
  const partidas = [
    { codigo: '01.01', descripcion: 'Excavación Masiva', programado: 100, ejecutado: 95, unidad: 'm³' },
    { codigo: '01.02', descripcion: 'Relleno Compactado', programado: 80, ejecutado: 85, unidad: 'm³' },
    { codigo: '02.01', descripcion: 'Concreto f\'c=280 kg/cm²', programado: 60, ejecutado: 45, unidad: 'm³' },
    { codigo: '02.02', descripcion: 'Acero de Refuerzo fy=4200', programado: 50, ejecutado: 55, unidad: 'kg' },
  ];

  const avanceTotal = 70;

  return (
    <PageLayout
      title="Avance Físico de Obra"
      description="Control de avance de partidas y metrados"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Obra y Campo', href: '/dashboard/obra' },
        { label: 'Avance' },
      ]}
      requiredPermissions={['accesoMovil']}
    >
      <div className="space-y-6">
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Avance General del Proyecto</h2>
              <p className="text-blue-100">Carretera Lima-Huacho - Tramo 1</p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold">{avanceTotal}%</div>
              <p className="text-blue-100 mt-1">Completado</p>
            </div>
          </div>
          <div className="mt-4 bg-white/20 rounded-full h-4">
            <div className="bg-white h-4 rounded-full" style={{ width: `${avanceTotal}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Código</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Partida</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Programado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ejecutado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">% Avance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partidas.map((partida, index) => {
                const porcentaje = Math.round((partida.ejecutado / partida.programado) * 100);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{partida.codigo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{partida.descripcion}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{partida.programado}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{partida.ejecutado}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{partida.unidad}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className={`h-2 rounded-full ${porcentaje >= 100 ? 'bg-green-600' : porcentaje >= 80 ? 'bg-blue-600' : 'bg-yellow-500'}`}
                            style={{ width: `${Math.min(porcentaje, 100)}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm font-semibold min-w-[50px] ${
                          porcentaje >= 100 ? 'text-green-600' : porcentaje >= 80 ? 'text-blue-600' : 'text-yellow-600'
                        }`}>
                          {porcentaje}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
