import PageLayout from '@/components/layout/PageLayout';

export default function ReporteEjecutivoPage() {
  return (
    <PageLayout
      title="Dashboard Ejecutivo"
      description="Reportes estratégicos y KPIs corporativos"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Reportes' },
        { label: 'Ejecutivo' },
      ]}
      requiredPermissions={['accesoReportesEstrategicos']}
    >
      <div className="space-y-6">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Vista Ejecutiva - Noviembre 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-blue-100 mb-1">Proyectos Activos</div>
              <div className="text-3xl font-bold">3</div>
            </div>
            <div>
              <div className="text-sm text-blue-100 mb-1">Inversión Total</div>
              <div className="text-3xl font-bold">S/ 91.7M</div>
            </div>
            <div>
              <div className="text-sm text-blue-100 mb-1">ROI Promedio</div>
              <div className="text-3xl font-bold">33%</div>
            </div>
            <div>
              <div className="text-sm text-blue-100 mb-1">Madurez BIM</div>
              <div className="text-3xl font-bold">Nivel 2.3</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Estado de Cartera</h3>
            <div className="space-y-3">
              {[
                { estado: 'En Ejecución', cantidad: 1, color: 'blue' },
                { estado: 'En Diseño', cantidad: 1, color: 'indigo' },
                { estado: 'En Validación', cantidad: 1, color: 'purple' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{item.estado}</span>
                  <span className={`font-bold text-${item.color}-600 text-xl`}>{item.cantidad}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <h3 className="font-semibold mb-4">Indicadores Clave</h3>
            <div className="space-y-3">
              {[
                { indicador: 'Cumplimiento de Plazos', valor: '85%', meta: '90%' },
                { indicador: 'Satisfacción del Cliente', valor: '92%', meta: '85%' },
                { indicador: 'Eficiencia BIM', valor: '78%', meta: '80%' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-700">{item.indicador}</span>
                    <span className="font-semibold">{item.valor} / {item.meta}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: item.valor }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
