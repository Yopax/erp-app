"use client";

import { RoleBIM } from "@/lib/types/auth";

interface DashboardSoporteProps {
  role: RoleBIM;
  userName: string;
}

export default function DashboardSoporte({ role, userName }: DashboardSoporteProps) {
  const isEspecialistaDatos = role === RoleBIM.ESPECIALISTA_BIM_DATOS;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Bienvenido, {userName}
        </h1>
        <p className="text-purple-100">
          {isEspecialistaDatos ? "Especialista BIM en Datos" : "Coordinador BIM de Sostenibilidad"} - Nivel Soporte
        </p>
      </div>

      {/* KPIs de Soporte */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isEspecialistaDatos ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Estándares Activos</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">ISO 19650 compliance</p>
                </div>
                <div className="bg-purple-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Validaciones</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">Esta semana</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Exportaciones</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-green-600 text-xs mt-1">IFC, COBie generados</p>
                </div>
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Análisis Energético</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">Proyectos evaluados</p>
                </div>
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Certificaciones</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">LEED, EDGE, BREEAM</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Huella Carbono</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0 kg</p>
                  <p className="text-yellow-600 text-xs mt-1">CO2 equivalente</p>
                </div>
                <div className="bg-yellow-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Reportes</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-indigo-600 text-xs mt-1">Generados</p>
            </div>
            <div className="bg-indigo-100 rounded-full p-3">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Específico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isEspecialistaDatos ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Gestión de Estándares</h2>
              <div className="space-y-3">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">ISO 19650</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Activo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Gestión de información en BIM</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Plan BIM Perú</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Activo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Hoja de ruta nacional</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">RNE</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      Monitoreando
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Reglamento Nacional de Edificaciones</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Validación de Datos</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <div>
                    <p className="font-semibold text-gray-900">Modelos Aprobados</p>
                    <p className="text-sm text-gray-600">Cumplimiento 100%</p>
                  </div>
                  <span className="text-2xl font-bold text-green-600">0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div>
                    <p className="font-semibold text-gray-900">En Revisión</p>
                    <p className="text-sm text-gray-600">Pendientes de validar</p>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <div>
                    <p className="font-semibold text-gray-900">Rechazados</p>
                    <p className="text-sm text-gray-600">Requieren corrección</p>
                  </div>
                  <span className="text-2xl font-bold text-red-600">0</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Análisis de Sostenibilidad</h2>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Eficiencia Energética</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <p className="text-xs text-gray-600">Meta: Reducción 30% vs convencional</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Consumo de Agua</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <p className="text-xs text-gray-600">Meta: Reducción 25% vs convencional</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Materiales Sostenibles</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <p className="text-xs text-gray-600">Meta: 40% materiales reciclados/locales</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Certificaciones Ambientales</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-700 font-bold text-sm">LEED</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LEED BD+C</p>
                      <p className="text-xs text-gray-500">Leadership in Energy</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">No iniciado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-sm">EDGE</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">EDGE Certified</p>
                      <p className="text-xs text-gray-500">Excellence in Design</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">No iniciado</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Acciones de Soporte */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Especializadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {isEspecialistaDatos ? (
            <>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Validar Modelo</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Exportar IFC</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Gestionar Estándares</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
                <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Generar Reporte</span>
              </button>
            </>
          ) : (
            <>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Análisis Energético</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Huella de Carbono</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors">
                <svg className="w-8 h-8 text-yellow-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Certificaciones</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Reporte Sostenibilidad</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
