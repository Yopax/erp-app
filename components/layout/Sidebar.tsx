'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { RoleBIM, NivelAcceso, PERMISOS_POR_ROL, NIVEL_POR_ROL } from '@/lib/types/auth';

interface MenuItem {
  title: string;
  section: string;
  icon?: string;
  requiredPermissions?: (keyof typeof PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM])[];
  requiredLevels?: NivelAcceso[];
  subItems: {
    label: string;
    href: string;
    requiredPermissions?: (keyof typeof PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM])[];
  }[];
}

export default function Sidebar() {
  const { data: session } = useSession();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Determinar permisos del usuario actual
  const userRole = session?.user?.role as RoleBIM | undefined;
  const userPermissions = userRole ? PERMISOS_POR_ROL[userRole] : null;
  const userLevel = userRole ? NIVEL_POR_ROL[userRole] : null;

  // Definición de menú completo con permisos requeridos
  const menuItems: MenuItem[] = [
    {
      title: 'Cartera de Proyectos',
      section: 'cartera',
      requiredPermissions: ['gestionCartera'],
      requiredLevels: [NivelAcceso.ESTRATEGICO],
      subItems: [
        { label: 'Proyectos Activos', href: '/dashboard/cartera/proyectos' },
        { label: 'Oportunidades', href: '/dashboard/cartera/oportunidades' },
        { label: 'Análisis ROI', href: '/dashboard/cartera/roi' },
        { label: 'Madurez BIM', href: '/dashboard/cartera/madurez-bim' },
      ],
    },
    {
      title: 'Gestión de Proyectos',
      section: 'proyectos',
      requiredPermissions: ['gestionProyectos'],
      requiredLevels: [NivelAcceso.ESTRATEGICO, NivelAcceso.TACTICO],
      subItems: [
        { label: 'Mis Proyectos', href: '/dashboard/proyectos/listado' },
        { label: 'Planificación BEP', href: '/dashboard/proyectos/bep' },
        { label: 'Hitos y Entregables', href: '/dashboard/proyectos/hitos' },
        { label: 'Coordinación', href: '/dashboard/proyectos/coordinacion' },
      ],
    },
    {
      title: 'Modelos BIM',
      section: 'modelos',
      requiredPermissions: ['crearModelos', 'editarModelos'],
      requiredLevels: [NivelAcceso.ESTRATEGICO, NivelAcceso.TACTICO, NivelAcceso.OPERATIVO],
      subItems: [
        { label: 'Repositorio de Modelos', href: '/dashboard/modelos/repositorio', requiredPermissions: ['crearModelos'] },
        { label: 'Crear Nuevo Modelo', href: '/dashboard/modelos/nuevo', requiredPermissions: ['crearModelos'] },
        { label: 'Validación de Modelos', href: '/dashboard/modelos/validacion', requiredPermissions: ['validarModelos'] },
        { label: 'Detección de Interferencias', href: '/dashboard/modelos/interferencias', requiredPermissions: ['validarModelos'] },
        { label: 'Control de LOD', href: '/dashboard/modelos/lod', requiredPermissions: ['validarModelos'] },
        { label: 'Exportar IFC', href: '/dashboard/modelos/exportar', requiredPermissions: ['exportarModelos'] },
      ],
    },
    {
      title: 'Obra y Campo',
      section: 'obra',
      requiredPermissions: ['accesoMovil', 'registroBitacora'],
      requiredLevels: [NivelAcceso.ESTRATEGICO, NivelAcceso.TACTICO, NivelAcceso.OPERATIVO],
      subItems: [
        { label: 'Bitácora de Obra', href: '/dashboard/obra/bitacora', requiredPermissions: ['registroBitacora'] },
        { label: 'Avance Físico', href: '/dashboard/obra/avance' },
        { label: 'No Conformidades', href: '/dashboard/obra/no-conformidades', requiredPermissions: ['reporteNoConformidades'] },
        { label: 'Control de Calidad', href: '/dashboard/obra/calidad' },
        { label: 'Registro Fotográfico', href: '/dashboard/obra/fotos' },
      ],
    },
    {
      title: 'Estándares y Datos',
      section: 'estandares',
      requiredPermissions: ['gestionEstandares', 'exportarDatos'],
      requiredLevels: [NivelAcceso.ESTRATEGICO, NivelAcceso.SOPORTE],
      subItems: [
        { label: 'Biblioteca de Objetos', href: '/dashboard/estandares/biblioteca', requiredPermissions: ['gestionEstandares'] },
        { label: 'Plantillas BIM', href: '/dashboard/estandares/plantillas', requiredPermissions: ['gestionEstandares'] },
        { label: 'Nomenclaturas', href: '/dashboard/estandares/nomenclaturas', requiredPermissions: ['gestionEstandares'] },
        { label: 'Exportación de Datos', href: '/dashboard/estandares/exportar', requiredPermissions: ['exportarDatos'] },
      ],
    },
    {
      title: 'Sostenibilidad',
      section: 'sostenibilidad',
      requiredLevels: [NivelAcceso.ESTRATEGICO, NivelAcceso.SOPORTE],
      subItems: [
        { label: 'Huella de Carbono', href: '/dashboard/sostenibilidad/carbono' },
        { label: 'Análisis de Ciclo de Vida', href: '/dashboard/sostenibilidad/acv' },
        { label: 'Certificaciones', href: '/dashboard/sostenibilidad/certificaciones' },
        { label: 'Eficiencia Energética', href: '/dashboard/sostenibilidad/energia' },
      ],
    },
    {
      title: 'Reportes y Analítica',
      section: 'reportes',
      subItems: [
        { 
          label: 'Dashboard Ejecutivo', 
          href: '/dashboard/reportes/ejecutivo', 
          requiredPermissions: ['accesoReportesEstrategicos'] 
        },
        { label: 'Reportes de Proyecto', href: '/dashboard/reportes/proyecto' },
        { label: 'Indicadores BIM', href: '/dashboard/reportes/indicadores-bim' },
        { label: 'Análisis de Rendimiento', href: '/dashboard/reportes/rendimiento' },
      ],
    },
    {
      title: 'Configuración',
      section: 'configuracion',
      subItems: [
        { label: 'Mi Perfil', href: '/dashboard/configuracion/perfil' },
        { 
          label: 'Gestión de Usuarios', 
          href: '/dashboard/configuracion/usuarios', 
          requiredPermissions: ['gestionUsuarios'] 
        },
        { 
          label: 'Roles y Permisos', 
          href: '/dashboard/configuracion/roles', 
          requiredPermissions: ['gestionUsuarios'] 
        },
        { label: 'Datos de Empresa', href: '/dashboard/configuracion/empresa' },
      ],
    },
  ];

  // Función para verificar si el usuario tiene los permisos necesarios
  const hasPermission = (requiredPermissions?: (keyof typeof PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM])[]) => {
    if (!requiredPermissions || requiredPermissions.length === 0) return true;
    if (!userPermissions) return false;
    
    // El usuario necesita AL MENOS UNO de los permisos requeridos
    return requiredPermissions.some(permission => userPermissions[permission]);
  };

  // Función para verificar si el usuario tiene el nivel de acceso necesario
  const hasLevel = (requiredLevels?: NivelAcceso[]) => {
    if (!requiredLevels || requiredLevels.length === 0) return true;
    if (!userLevel) return false;
    
    return requiredLevels.includes(userLevel);
  };

  // Filtrar menú según permisos y nivel del usuario
  const filteredMenu = menuItems.filter(item => {
    const hasRequiredPermission = hasPermission(item.requiredPermissions);
    const hasRequiredLevel = hasLevel(item.requiredLevels);
    
    // Filtrar subitems
    const filteredSubItems = item.subItems.filter(subItem => 
      hasPermission(subItem.requiredPermissions)
    );
    
    // Mostrar sección solo si tiene permisos Y nivel Y al menos un subitem visible
    return hasRequiredPermission && hasRequiredLevel && filteredSubItems.length > 0;
  });

  if (!session) {
    return (
      <aside className="border border-gray-200">
        <nav>
          <div className="p-4 text-gray-500 text-sm">
            Cargando menú...
          </div>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="border border-gray-200">
      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          {filteredMenu.map((item) => {
            const filteredSubItems = item.subItems.filter(subItem => 
              hasPermission(subItem.requiredPermissions)
            );

            return (
              <li key={item.section}>
                <button onClick={() => toggleSection(item.section)}>
                  {item.title} {openSections[item.section] ? '▼' : '▶'}
                </button>
                {openSections[item.section] && (
                  <ul className="submenu">
                    {filteredSubItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
