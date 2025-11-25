import PageLayout from '@/components/layout/PageLayout';

export default function EmpresaPage() {
  return (
    <PageLayout
      title="Datos de Empresa"
      description="Información de la organización"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Configuración' },
        { label: 'Empresa' },
      ]}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-6">Información Corporativa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Razón Social</label>
              <input
                type="text"
                defaultValue="BIM PERÚ INGENIERÍA S.A.C."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">RUC</label>
              <input
                type="text"
                defaultValue="20601234567"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Empresa</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Constructora</option>
                <option>Consultora</option>
                <option selected>Mixta</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input
                type="text"
                defaultValue="Av. Javier Prado Este 5268, Santiago de Surco, Lima"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input
                type="text"
                defaultValue="+51 1 234-5678"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Corporativo</label>
              <input
                type="email"
                defaultValue="contacto@bimperu.pe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">Capacidades BIM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de Madurez BIM</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Nivel 0</option>
                <option>Nivel 1</option>
                <option selected>Nivel 2</option>
                <option>Nivel 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Certificaciones BIM</label>
              <input
                type="text"
                defaultValue="ISO 19650, Plan BIM Perú"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Guardar Cambios
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
