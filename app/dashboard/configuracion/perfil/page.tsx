import PageLayout from '@/components/layout/PageLayout';

export default function PerfilPage() {
  return (
    <PageLayout
      title="Mi Perfil"
      description="Información personal y configuración de cuenta"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Configuración' },
        { label: 'Mi Perfil' },
      ]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-6">Información Personal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombres</label>
              <input
                type="text"
                defaultValue="Carlos"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
              <input
                type="text"
                defaultValue="Mendoza"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue="cmendoza@bimperu.pe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
              <input
                type="text"
                defaultValue="Director BIM"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                disabled
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Guardar Cambios
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Seguridad</h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              Cambiar Contraseña
            </button>
            <button className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
              Configurar Autenticación de Dos Factores (2FA)
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
