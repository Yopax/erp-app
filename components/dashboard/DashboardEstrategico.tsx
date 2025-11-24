"use client";

import { RoleBIM } from "@/lib/types/auth";

interface DashboardEstrategicoProps {
  role: RoleBIM;
  userName: string;
}

export default function DashboardEstrategico({ role, userName }: DashboardEstrategicoProps) {
  const isDirector = role === RoleBIM.DIRECTOR_BIM;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Bienvenido, {userName}
        </h1>
        <p className="text-blue-100">
          {isDirector ? "Director BIM" : "Gerente BIM de Proyectos"} - Nivel Estratégico
        </p>
      </div>

      {/* KPIs Estratégicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Cartera Total</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">S/ 0.00</p>
              <p className="text-green-600 text-xs mt-1">+0% vs mes anterior</p>
            </div>
            <div className="bg-blue-100 rounded-full p-3">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Proyectos Activos</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
              <p className="text-gray-400 text-xs mt-1">En ejecución BIM</p>
            </div>
            <div className="bg-green-100 rounded-full p-3">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Madurez BIM</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">Nivel 0</p>
              <p className="text-yellow-600 text-xs mt-1">Plan BIM Perú</p>
            </div>
            <div className="bg-yellow-100 rounded-full p-3">
              <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">ROI BIM</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">0%</p>
              <p className="text-purple-600 text-xs mt-1">Ahorro vs tradicional</p>
            </div>
            <div className="bg-purple-100 rounded-full p-3">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones Principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Plan de Ejecución BIM */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Plan de Ejecución BIM (PEB)</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              ISO 19650
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">EIR Completados</span>
              </div>
              <span className="text-sm font-bold text-gray-900">0/0</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">OIR Pendientes</span>
              </div>
              <span className="text-sm font-bold text-gray-900">0</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Protocolos Activos</span>
              </div>
              <span className="text-sm font-bold text-gray-900">0</span>
            </div>
          </div>
        </div>

        {/* Cumplimiento Normativo */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Cumplimiento Normativo</h2>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
              Plan BIM Perú
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">RNE Actualizado</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                ✓ Vigente
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">SEACE Integrado</span>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                ✓ Activo
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Trabaja Perú</span>
              <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                Pendiente
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones Rápidas Estratégicas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Estratégicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center space-x-3 p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="font-medium text-gray-700">Nuevo Proyecto BIM</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-colors">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="font-medium text-gray-700">Reportes Estratégicos</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-medium text-gray-700">Gestión de Equipo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
