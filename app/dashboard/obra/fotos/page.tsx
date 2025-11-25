import PageLayout from '@/components/layout/PageLayout';

export default function FotosPage() {
  return (
    <PageLayout
      title="Registro Fotográfico"
      description="Documentación visual del avance de obra"
      breadcrumbs={[
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Obra y Campo' },
        { label: 'Fotos' },
      ]}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Subir Fotos
          </button>
          <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Excavación - Km 12+350', 'Encofrado Muro M-08', 'Vaciado de Concreto'].map((titulo, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-6xl">📷</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{titulo}</h3>
                <p className="text-sm text-gray-500 mt-1">24/11/2024 - 10:30 AM</p>
                <div className="mt-3 flex gap-2">
                  <button className="text-blue-600 text-sm hover:underline">Ver</button>
                  <button className="text-gray-600 text-sm hover:underline">Descargar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
