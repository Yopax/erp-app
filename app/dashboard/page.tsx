"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RoleBIM, NivelAcceso } from "@/lib/types/auth";
import DashboardEstrategico from "@/components/dashboard/DashboardEstrategico";
import DashboardTactico from "@/components/dashboard/DashboardTactico";
import DashboardOperativo from "@/components/dashboard/DashboardOperativo";
import DashboardSoporte from "@/components/dashboard/DashboardSoporte";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirigir a login si no hay sesión (dentro de useEffect)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Mostrar loading mientras se verifica la sesión
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  // Si no hay sesión, no renderizar nada (se redirigirá en el useEffect)
  if (!session?.user) {
    return null;
  }

  const userRole = session.user.role as RoleBIM;
  const userName = session.user.name || "Usuario";

  // Determinar el nivel de acceso basado en el rol
  const getNivelAcceso = (role: RoleBIM): NivelAcceso => {
    if (role === RoleBIM.DIRECTOR_BIM || role === RoleBIM.GERENTE_BIM_PROYECTOS) {
      return NivelAcceso.ESTRATEGICO;
    }
    if (role === RoleBIM.COORDINADOR_BIM || role === RoleBIM.ESPECIALISTA_BIM_VIAL) {
      return NivelAcceso.TACTICO;
    }
    if (role === RoleBIM.MODELADOR_BIM_CIVIL || role === RoleBIM.EJECUTOR_BIM_OBRA) {
      return NivelAcceso.OPERATIVO;
    }
    return NivelAcceso.SOPORTE;
  };

  const nivelAcceso = getNivelAcceso(userRole);

  // Renderizar el dashboard correspondiente según el nivel de acceso
  switch (nivelAcceso) {
    case NivelAcceso.ESTRATEGICO:
      return <DashboardEstrategico role={userRole} userName={userName} />;
    
    case NivelAcceso.TACTICO:
      return <DashboardTactico role={userRole} userName={userName} />;
    
    case NivelAcceso.OPERATIVO:
      return <DashboardOperativo role={userRole} userName={userName} />;
    
    case NivelAcceso.SOPORTE:
      return <DashboardSoporte role={userRole} userName={userName} />;
    
    default:
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Rol no reconocido</h2>
          <p className="mt-2 text-gray-600">Por favor, contacta al administrador del sistema.</p>
        </div>
      );
  }
}
