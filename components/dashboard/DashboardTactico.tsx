"use client";

import { RoleBIM } from "@/lib/types/auth";

interface DashboardTacticoProps {
  role: RoleBIM;
  userName: string;
}

export default function DashboardTactico({ role, userName }: DashboardTacticoProps) {
  const isCoordinador = role === RoleBIM.COORDINADOR_BIM;

  return (
    <div className="space-y-6">
      {/* KPIs Tácticos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Modelos en Coordinación</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-gray-400 text-xs mt-1">Disciplinas activas</p>
            </div>
            <div className="bg-indigo-100 rounded-full p-3">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Interferencias</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-red-600 text-xs mt-1">Detección automática</p>
            </div>
            <div className="bg-red-100 rounded-full p-3">
              <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Validaciones</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-green-600 text-xs mt-1">Aprobadas esta semana</p>
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
              <p className="text-gray-500 text-sm font-medium">Entregables</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-yellow-600 text-xs mt-1">Esta semana</p>
            </div>
            <div className="bg-yellow-100 rounded-full p-3">
              <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Coordinación Multidisciplinaria */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Detección de Interferencias</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border-l-4 border-red-500 bg-red-50 rounded">
              <div>
                <p className="font-semibold text-gray-900">Críticas</p>
                <p className="text-sm text-gray-600">MEP vs Estructuras</p>
              </div>
              <span className="text-2xl font-bold text-red-600">0</span>
            </div>
            <div className="flex items-center justify-between p-4 border-l-4 border-yellow-500 bg-yellow-50 rounded">
              <div>
                <p className="font-semibold text-gray-900">Moderadas</p>
                <p className="text-sm text-gray-600">Arquitectura vs Instalaciones</p>
              </div>
              <span className="text-2xl font-bold text-yellow-600">0</span>
            </div>
            <div className="flex items-center justify-between p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <div>
                <p className="font-semibold text-gray-900">Informativas</p>
                <p className="text-sm text-gray-600">Revisión general</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">0</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Niveles de Desarrollo (LOD)</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">LOD 100 - Conceptual</span>
                <span className="text-sm font-bold text-gray-900">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">LOD 200 - Diseño Preliminar</span>
                <span className="text-sm font-bold text-gray-900">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">LOD 300 - Diseño Detallado</span>
                <span className="text-sm font-bold text-gray-900">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">LOD 400 - Construcción</span>
                <span className="text-sm font-bold text-gray-900">0%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones Tácticas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones de Coordinación</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center p-4 border-2 border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
            <svg className="w-8 h-8 text-indigo-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <span className="font-medium text-gray-700 text-sm text-center">Validar Modelo</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            <svg className="w-8 h-8 text-red-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-medium text-gray-700 text-sm text-center">Detectar Interferencias</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
            <svg className="w-8 h-8 text-green-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-gray-700 text-sm text-center">Aprobar Cambios</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border-2 border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors">
            <svg className="w-8 h-8 text-yellow-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="font-medium text-gray-700 text-sm text-center">Exportar IFC</span>
          </button>
        </div>
      </div>
    </div>
  );
}
