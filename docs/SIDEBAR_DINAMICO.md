# Sidebar Dinámico por Roles BIM

## 📋 Descripción

El sidebar se adapta automáticamente según el rol BIM del usuario, mostrando únicamente las opciones de navegación relevantes para su nivel de acceso y permisos.

## 🎯 Niveles de Acceso y Permisos

### Nivel ESTRATÉGICO
**Roles:** Director BIM, Gerente BIM Proyectos

**Menú visible:**
- ✅ Cartera de Proyectos (solo ellos)
- ✅ Gestión de Proyectos
- ✅ Modelos BIM (con validación y exportación)
- ✅ Obra y Campo
- ✅ Estándares y Datos
- ✅ Sostenibilidad
- ✅ Reportes y Analítica (Dashboard Ejecutivo)
- ✅ Configuración (Gestión de Usuarios completa)

### Nivel TÁCTICO
**Roles:** Coordinador BIM, Especialista BIM Vial

**Menú visible:**
- ✅ Gestión de Proyectos
- ✅ Modelos BIM (con validación completa)
- ✅ Obra y Campo
- ✅ Reportes y Analítica (sin Dashboard Ejecutivo)
- ✅ Configuración (sin Gestión de Usuarios)

### Nivel OPERATIVO
**Roles:** Modelador BIM Civil, Ejecutor BIM Obra

**Menú visible para Modelador BIM Civil:**
- ✅ Modelos BIM (crear y editar, sin validación)
- ✅ Reportes y Analítica (básico)
- ✅ Configuración (solo Mi Perfil)

**Menú visible para Ejecutor BIM Obra:**
- ✅ Obra y Campo (bitácora y no conformidades)
- ✅ Reportes y Analítica (básico)
- ✅ Configuración (solo Mi Perfil)

### Nivel SOPORTE
**Roles:** Especialista BIM Datos, Coordinador BIM Sostenibilidad

**Menú visible para Especialista BIM Datos:**
- ✅ Estándares y Datos (completo)
- ✅ Reportes y Analítica
- ✅ Configuración (Gestión de Usuarios)

**Menú visible para Coordinador BIM Sostenibilidad:**
- ✅ Sostenibilidad (completo)
- ✅ Reportes y Analítica
- ✅ Configuración (solo Mi Perfil)

## 🔧 Estructura del Menú

```typescript
{
  title: 'Nombre de la Sección',
  section: 'clave-unica',
  requiredPermissions: ['permiso1', 'permiso2'], // Al menos UNO necesario
  requiredLevels: [NivelAcceso.ESTRATEGICO], // Niveles permitidos
  subItems: [
    { 
      label: 'Opción',
      href: '/ruta',
      requiredPermissions: ['permisoEspecifico'] // Opcional por subitem
    }
  ]
}
```

## 🚀 Lógica de Filtrado

### Filtrado de Secciones

Una sección se muestra si:
1. ✅ El usuario tiene **AL MENOS UNO** de los permisos requeridos
2. ✅ El usuario tiene el **nivel de acceso** requerido
3. ✅ Hay **al menos un subitem** visible para el usuario

### Filtrado de Subitems

Un subitem se muestra si:
- ✅ El usuario tiene los permisos específicos del subitem (si están definidos)
- ✅ O no tiene permisos específicos definidos (se hereda de la sección padre)

## 📊 Ejemplos por Rol

### Director BIM (Acceso Total)

```
📁 Dashboard
📁 Cartera de Proyectos
  - Proyectos Activos
  - Oportunidades
  - Análisis ROI
  - Madurez BIM
📁 Gestión de Proyectos
  - Mis Proyectos
  - Planificación BEP
  - Hitos y Entregables
  - Coordinación
📁 Modelos BIM
  - Repositorio de Modelos
  - Crear Nuevo Modelo
  - Validación de Modelos
  - Detección de Interferencias
  - Control de LOD
  - Exportar IFC
📁 Obra y Campo
  - Bitácora de Obra
  - Avance Físico
  - No Conformidades
  - Control de Calidad
  - Registro Fotográfico
📁 Estándares y Datos
  - Biblioteca de Objetos
  - Plantillas BIM
  - Nomenclaturas
  - Exportación de Datos
📁 Sostenibilidad
  - Huella de Carbono
  - Análisis de Ciclo de Vida
  - Certificaciones
  - Eficiencia Energética
📁 Reportes y Analítica
  - Dashboard Ejecutivo
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Gestión de Usuarios
  - Roles y Permisos
  - Datos de Empresa
```

### Coordinador BIM (Nivel Táctico)

```
📁 Dashboard
📁 Gestión de Proyectos
  - Mis Proyectos
  - Planificación BEP
  - Hitos y Entregables
  - Coordinación
📁 Modelos BIM
  - Repositorio de Modelos
  - Crear Nuevo Modelo
  - Validación de Modelos
  - Detección de Interferencias
  - Control de LOD
  - Exportar IFC
📁 Obra y Campo
  - Bitácora de Obra
  - Avance Físico
  - No Conformidades
  - Control de Calidad
  - Registro Fotográfico
📁 Reportes y Analítica
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Datos de Empresa
```

### Modelador BIM Civil (Nivel Operativo)

```
📁 Dashboard
📁 Modelos BIM
  - Repositorio de Modelos
  - Crear Nuevo Modelo
📁 Reportes y Analítica
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Datos de Empresa
```

### Ejecutor BIM Obra (Nivel Operativo)

```
📁 Dashboard
📁 Obra y Campo
  - Bitácora de Obra
  - Avance Físico
  - No Conformidades
  - Control de Calidad
  - Registro Fotográfico
📁 Reportes y Analítica
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Datos de Empresa
```

### Especialista BIM Datos (Nivel Soporte)

```
📁 Dashboard
📁 Estándares y Datos
  - Biblioteca de Objetos
  - Plantillas BIM
  - Nomenclaturas
  - Exportación de Datos
📁 Reportes y Analítica
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Gestión de Usuarios
  - Roles y Permisos
  - Datos de Empresa
```

### Coordinador BIM Sostenibilidad (Nivel Soporte)

```
📁 Dashboard
📁 Sostenibilidad
  - Huella de Carbono
  - Análisis de Ciclo de Vida
  - Certificaciones
  - Eficiencia Energética
📁 Reportes y Analítica
  - Reportes de Proyecto
  - Indicadores BIM
  - Análisis de Rendimiento
📁 Configuración
  - Mi Perfil
  - Datos de Empresa
```

## 🔐 Matriz de Permisos

| Permiso | DIRECTOR_BIM | GERENTE_BIM | COORDINADOR_BIM | ESPECIALISTA_VIAL | MODELADOR_CIVIL | EJECUTOR_OBRA | ESPECIALISTA_DATOS | COORD_SOSTENIBILIDAD |
|---------|--------------|-------------|-----------------|-------------------|-----------------|---------------|--------------------|-----------------------|
| `gestionCartera` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `gestionProyectos` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `gestionUsuarios` | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| `crearModelos` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `editarModelos` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| `validarModelos` | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| `exportarModelos` | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| `accesoReportesEstrategicos` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `gestionEstandares` | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| `exportarDatos` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| `accesoMovil` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `registroBitacora` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |
| `reporteNoConformidades` | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ |

## 🎨 Estado de Carga

Mientras se verifica la sesión del usuario:
```
Cargando menú...
```

## 🧪 Pruebas

Para probar el sidebar con diferentes roles:

1. Inicia sesión con cada usuario:
   - `cmendoza@bimperu.pe` (Director BIM)
   - `jrodriguez@bimperu.pe` (Coordinador BIM)
   
2. Verifica que el menú muestra solo las secciones correspondientes

3. Intenta acceder a rutas no permitidas (deberías implementar protección de rutas)

## 🔄 Sincronización

El sidebar se sincroniza automáticamente con:
- ✅ Sistema de permisos (`PERMISOS_POR_ROL`)
- ✅ Niveles de acceso (`NIVEL_POR_ROL`)
- ✅ Sesión de NextAuth (`useSession`)
- ✅ Dashboards personalizados

## 📝 Próximos Pasos

1. **Protección de Rutas**: Implementar middleware para proteger rutas no autorizadas
2. **Iconos**: Agregar iconos específicos para cada sección
3. **Badges**: Mostrar notificaciones en secciones relevantes
4. **Favoritos**: Permitir marcar secciones como favoritas
5. **Búsqueda**: Agregar búsqueda en el menú

## 🎯 Cumplimiento con Plan BIM Perú

El sidebar sigue la estructura organizacional del Plan BIM Perú del MEF:
- ✅ Jerarquía de 4 niveles (Estratégico, Táctico, Operativo, Soporte)
- ✅ Permisos granulares por función
- ✅ Separación clara de responsabilidades
- ✅ Trazabilidad de accesos
