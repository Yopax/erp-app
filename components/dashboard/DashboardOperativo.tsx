"use client";

import { RoleBIM } from "@/lib/types/auth";

interface DashboardOperativoProps {
  role: RoleBIM;
  userName: string;
}

export default function DashboardOperativo({ role, userName }: DashboardOperativoProps) {
  const isModelador = role === RoleBIM.MODELADOR_BIM_CIVIL;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-teal-600 to-teal-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Bienvenido, {userName}
        </h1>
        <p className="text-teal-100">
          {isModelador ? "Modelador BIM Civil" : "Ejecutor BIM de Obra"} - Nivel Operativo
        </p>
      </div>

      {/* KPIs Operativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isModelador ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Elementos Modelados</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">Esta semana</p>
                </div>
                <div className="bg-teal-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Modelos Activos</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">En progreso</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Registros Hoy</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
                  <p className="text-gray-400 text-xs mt-1">Bitácora digital</p>
                </div>
                <div className="bg-teal-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Avance Físico</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">0%</p>
                  <p className="text-gray-400 text-xs mt-1">vs planificado</p>
                </div>
                <div className="bg-blue-100 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Tareas Completadas</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-green-600 text-xs mt-1">Esta semana</p>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Pendientes</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-yellow-600 text-xs mt-1">Requieren atención</p>
            </div>
            <div className="bg-yellow-100 rounded-full p-3">
              <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones Específicas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isModelador ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Mis Modelos BIM</h2>
              <div className="space-y-3">
                <div className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Modelo Civil - Carretera</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Activo
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">LOD 300 - Diseño Detallado</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                  <p className="text-sm">No hay modelos asignados</p>
                  <button className="mt-2 text-teal-600 hover:text-teal-800 text-sm font-medium">
                    + Solicitar asignación
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Biblioteca BIM</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Familias Viales</span>
                  </div>
                  <span className="text-xs text-gray-500">15 elementos</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Estructuras</span>
                  </div>
                  <span className="text-xs text-gray-500">8 elementos</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Drenaje</span>
                  </div>
                  <span className="text-xs text-gray-500">12 elementos</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Bitácora Digital</h2>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm mb-2">No hay registros hoy</p>
                  <button className="mt-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                    + Nuevo Registro
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Control de Calidad</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <div>
                    <p className="font-semibold text-gray-900">Aprobadas</p>
                    <p className="text-sm text-gray-600">Esta semana</p>
                  </div>
                  <span className="text-2xl font-bold text-green-600">0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <div>
                    <p className="font-semibold text-gray-900">No Conformidades</p>
                    <p className="text-sm text-gray-600">Requieren atención</p>
                  </div>
                  <span className="text-2xl font-bold text-red-600">0</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Acciones Operativas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {isModelador ? (
            <>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
                <svg className="w-8 h-8 text-teal-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Nuevo Modelo</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Subir Versión</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                <svg className="w-8 h-8 text-purple-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Biblioteca</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Validar</span>
              </button>
            </>
          ) : (
            <>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
                <svg className="w-8 h-8 text-teal-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Nueva Bitácora</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                <svg className="w-8 h-8 text-blue-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Capturar Foto</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                <svg className="w-8 h-8 text-red-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Reportar No Conformidad</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="font-medium text-gray-700 text-sm text-center">Control Calidad</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
