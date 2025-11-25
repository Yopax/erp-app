import PageLayout from '@/components/layout/PageLayout';

export default function BitacoraPage() {
  const registros = [
    { id: 1, fecha: '24/11/2024 08:30', responsable: 'Juan Rodríguez', actividad: 'Vaciado de concreto - Zapata Z-15', ubicacion: 'Km 12+350', clima: 'Soleado' },
    { id: 2, fecha: '24/11/2024 14:00', responsable: 'María Torres', actividad: 'Instalación de encofrado - Muro M-08', ubicacion: 'Km 13+120', clima: 'Nublado' },
    { id: 3, fecha: '23/11/2024 10:15', responsable: 'Pedro Díaz', actividad: 'Colocación de acero de refuerzo', ubicacion: 'Km 12+800', clima: 'Lluvioso' },
  ];

  return (
    <PageLayout
      title="Bitácora de Obra"
      description="Registro diario de actividades en campo"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Obra y Campo', href: '/dashboard/obra' },
        { label: 'Bitácora' },
      ]}
      requiredPermissions={['registroBitacora']}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + Nuevo Registro
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Exportar PDF
            </button>
          </div>
          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-lg"
            defaultValue="2024-11-24"
          />
        </div>

        <div className="space-y-4">
          {registros.map((registro) => (
            <div key={registro.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{registro.actividad}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span>📅 {registro.fecha}</span>
                    <span>📍 {registro.ubicacion}</span>
                    <span>👤 {registro.responsable}</span>
                    <span>🌤️ {registro.clima}</span>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800">Editar</button>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 text-sm">
                  Trabajo ejecutado según planificación. Se verificó calidad del concreto premezclado. 
                  Personal: 8 operarios, 1 oficial, 2 ayudantes. Equipos: 1 mixer, 1 vibrador.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
