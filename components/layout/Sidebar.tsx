'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <aside className="border border-gray-200">
      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          {/* Memoria Descriptiva */}
          <li>
            <button onClick={() => toggleSection('ventas')}>
              Memoria Descriptiva {openSections['ventas'] ? '▼' : '▶'}
            </button>
            {openSections['ventas'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/memoria-descriptiva/informes">Informes</Link></li>
                <li><Link href="/dashboard/memoria-descriptiva/cotizaciones">Cotizaciones</Link></li>
                <li><Link href="/dashboard/memoria-descriptiva/pedidos">Pedidos</Link></li>
                <li><Link href="/dashboard/memoria-descriptiva/facturas">Facturas</Link></li>
                <li><Link href="/dashboard/memoria-descriptiva/reportes">Reportes</Link></li>
              </ul>
            )}
          </li>

          {/* Compras */}
          <li>
            <button onClick={() => toggleSection('compras')}>
              Compras {openSections['compras'] ? '▼' : '▶'}
            </button>
            {openSections['compras'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/compras/proveedores">Proveedores</Link></li>
                <li><Link href="/dashboard/compras/ordenes">Órdenes de Compra</Link></li>
                <li><Link href="/dashboard/compras/recepciones">Recepciones</Link></li>
                <li><Link href="/dashboard/compras/pagos">Pagos</Link></li>
              </ul>
            )}
          </li>

          {/* Inventario */}
          <li>
            <button onClick={() => toggleSection('inventario')}>
              Inventario {openSections['inventario'] ? '▼' : '▶'}
            </button>
            {openSections['inventario'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/inventario/productos">Productos</Link></li>
                <li><Link href="/dashboard/inventario/almacenes">Almacenes</Link></li>
                <li><Link href="/dashboard/inventario/movimientos">Movimientos</Link></li>
                <li><Link href="/dashboard/inventario/ajustes">Ajustes</Link></li>
                <li><Link href="/dashboard/inventario/reportes">Reportes</Link></li>
              </ul>
            )}
          </li>

          {/* Contabilidad */}
          <li>
            <button onClick={() => toggleSection('contabilidad')}>
              Contabilidad {openSections['contabilidad'] ? '▼' : '▶'}
            </button>
            {openSections['contabilidad'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/contabilidad/cuentas">Plan de Cuentas</Link></li>
                <li><Link href="/dashboard/contabilidad/asientos">Asientos Contables</Link></li>
                <li><Link href="/dashboard/contabilidad/balances">Balances</Link></li>
                <li><Link href="/dashboard/contabilidad/reportes">Reportes Financieros</Link></li>
              </ul>
            )}
          </li>

          {/* Recursos Humanos */}
          <li>
            <button onClick={() => toggleSection('rrhh')}>
              Recursos Humanos {openSections['rrhh'] ? '▼' : '▶'}
            </button>
            {openSections['rrhh'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/rrhh/empleados">Empleados</Link></li>
                <li><Link href="/dashboard/rrhh/nominas">Nóminas</Link></li>
                <li><Link href="/dashboard/rrhh/asistencias">Asistencias</Link></li>
                <li><Link href="/dashboard/rrhh/vacaciones">Vacaciones</Link></li>
                <li><Link href="/dashboard/rrhh/evaluaciones">Evaluaciones</Link></li>
              </ul>
            )}
          </li>

          {/* Producción */}
          <li>
            <button onClick={() => toggleSection('produccion')}>
              Producción {openSections['produccion'] ? '▼' : '▶'}
            </button>
            {openSections['produccion'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/produccion/ordenes">Órdenes de Producción</Link></li>
                <li><Link href="/dashboard/produccion/bom">Lista de Materiales</Link></li>
                <li><Link href="/dashboard/produccion/planificacion">Planificación</Link></li>
                <li><Link href="/dashboard/produccion/control">Control de Calidad</Link></li>
              </ul>
            )}
          </li>

          {/* Configuración */}
          <li>
            <button onClick={() => toggleSection('configuracion')}>
              Configuración {openSections['configuracion'] ? '▼' : '▶'}
            </button>
            {openSections['configuracion'] && (
              <ul className="submenu">
                <li><Link href="/dashboard/configuracion/empresa">Datos de Empresa</Link></li>
                <li><Link href="/dashboard/configuracion/usuarios">Usuarios y Roles</Link></li>
                <li><Link href="/dashboard/configuracion/permisos">Permisos</Link></li>
                <li><Link href="/dashboard/configuracion/parametros">Parámetros del Sistema</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
