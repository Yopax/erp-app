# Sistema de Dashboards Personalizados por Rol BIM

## Descripción General

El ERP cuenta con un sistema de dashboards completamente personalizados según el **Plan BIM Perú del MEF** y la metodología **ISO 19650**. Cada rol BIM tiene un dashboard específico con KPIs, herramientas y acciones relevantes a su nivel jerárquico y responsabilidades.

## Arquitectura del Sistema

### Niveles de Acceso

El sistema se organiza en **4 niveles jerárquicos**:

1. **ESTRATÉGICO** - Gestión de cartera y decisiones de alto nivel
2. **TÁCTICO** - Coordinación multidisciplinaria y validación
3. **OPERATIVO** - Modelado y ejecución en obra
4. **SOPORTE** - Estándares, datos y sostenibilidad

### Mapeo Rol → Nivel → Dashboard

```typescript
// Nivel ESTRATÉGICO
DIRECTOR_BIM → DashboardEstrategico
GERENTE_BIM_PROYECTOS → DashboardEstrategico

// Nivel TÁCTICO
COORDINADOR_BIM → DashboardTactico
ESPECIALISTA_BIM_VIAL → DashboardTactico

// Nivel OPERATIVO
MODELADOR_BIM_CIVIL → DashboardOperativo
EJECUTOR_BIM_OBRA → DashboardOperativo

// Nivel SOPORTE
ESPECIALISTA_BIM_DATOS → DashboardSoporte
COORDINADOR_BIM_SOSTENIBILIDAD → DashboardSoporte
```

---

## 1. Dashboard Estratégico

**Usuarios:** Director BIM, Gerente BIM de Proyectos

### KPIs Principales

- **Cartera Total** - Valor total de proyectos BIM
- **Proyectos Activos** - Cantidad en ejecución BIM
- **Madurez BIM** - Nivel según Plan BIM Perú (0-3)
- **ROI BIM** - Retorno de inversión vs metodología tradicional

### Secciones Clave

#### Plan de Ejecución BIM (PEB)
- ✅ EIR (Employer's Information Requirements) completados
- ⚠️ OIR (Organizational Information Requirements) pendientes
- 📋 Protocolos activos de colaboración

#### Cumplimiento Normativo
- ✓ **RNE Actualizado** - Reglamento Nacional de Edificaciones
- ✓ **SEACE Integrado** - Sistema Electrónico de Contrataciones del Estado
- ⏳ **Trabaja Perú** - Programas de empleo temporal

### Acciones Estratégicas

```typescript
- Nuevo Proyecto BIM
- Reportes Estratégicos
- Gestión de Equipo
```

### Beneficios según Plan BIM Perú

- **30-40% reducción** en tiempo de elaboración de expedientes técnicos
- **15-25% ahorro** en costos por detección temprana de interferencias
- **50% mejora** en precisión de metrados y presupuestos
- **20% aceleración** en procesos de aprobación pública

---

## 2. Dashboard Táctico

**Usuarios:** Coordinador BIM, Especialista BIM Vial

### KPIs Principales

- **Modelos en Coordinación** - Disciplinas activas
- **Interferencias** - Detección automática (críticas, moderadas, informativas)
- **Validaciones** - Aprobadas esta semana
- **Entregables** - Programados para entrega

### Secciones Clave

#### Detección de Interferencias
- 🔴 **Críticas** - MEP vs Estructuras (requieren solución inmediata)
- 🟡 **Moderadas** - Arquitectura vs Instalaciones (planificar resolución)
- 🔵 **Informativas** - Revisión general (documentar)

#### Niveles de Desarrollo (LOD)
- **LOD 100** - Conceptual (0%)
- **LOD 200** - Diseño Preliminar (0%)
- **LOD 300** - Diseño Detallado (0%)
- **LOD 400** - Construcción (0%)

### Acciones de Coordinación

```typescript
- Validar Modelo
- Detectar Interferencias
- Aprobar Cambios
- Exportar IFC
```

### Procesos Automatizados

1. **Validación de Modelos** - Checklist automático según estándares
2. **Clash Detection** - Detección de interferencias MEP/Estructural/Arquitectura
3. **Control de Versiones** - Trazabilidad completa de cambios
4. **Generación IFC** - Exportación a formato abierto para interoperabilidad

---

## 3. Dashboard Operativo

**Usuarios:** Modelador BIM Civil, Ejecutor BIM de Obra

### KPIs Principales (Modelador)

- **Elementos Modelados** - Esta semana
- **Modelos Activos** - En progreso
- **Tareas Completadas** - Esta semana
- **Pendientes** - Requieren atención

### KPIs Principales (Ejecutor)

- **Registros Hoy** - Bitácora digital
- **Avance Físico** - vs planificado
- **Tareas Completadas** - Esta semana
- **Pendientes** - Requieren atención

### Secciones Específicas - Modelador

#### Mis Modelos BIM
- Modelo Civil - Carretera (LOD 300 - Diseño Detallado)
- Progreso de modelado por elemento
- Solicitud de asignación de nuevos modelos

#### Biblioteca BIM
- **Familias Viales** - 15 elementos (veredas, señalización, etc.)
- **Estructuras** - 8 elementos (puentes, muros de contención)
- **Drenaje** - 12 elementos (cunetas, alcantarillas)

### Secciones Específicas - Ejecutor

#### Bitácora Digital
- Registro diario de avances
- Captura fotográfica georreferenciada
- Sincronización con modelo BIM

#### Control de Calidad
- ✅ **Aprobadas** - Esta semana
- ❌ **No Conformidades** - Requieren atención

### Acciones Rápidas

**Modelador:**
```typescript
- Nuevo Modelo
- Subir Versión
- Biblioteca
- Validar
```

**Ejecutor:**
```typescript
- Nueva Bitácora
- Capturar Foto
- Reportar No Conformidad
- Control Calidad
```

---

## 4. Dashboard Soporte

**Usuarios:** Especialista BIM Datos, Coordinador BIM Sostenibilidad

### KPIs Principales (Especialista Datos)

- **Estándares Activos** - ISO 19650 compliance
- **Validaciones** - Esta semana
- **Exportaciones** - IFC, COBie generados
- **Reportes** - Generados

### KPIs Principales (Coordinador Sostenibilidad)

- **Análisis Energético** - Proyectos evaluados
- **Certificaciones** - LEED, EDGE, BREEAM
- **Huella Carbono** - kg CO2 equivalente
- **Reportes** - Generados

### Secciones Específicas - Especialista Datos

#### Gestión de Estándares
- ✓ **ISO 19650** - Gestión de información en BIM
- ✓ **Plan BIM Perú** - Hoja de ruta nacional
- 🔄 **RNE** - Reglamento Nacional de Edificaciones (monitoreando)

#### Validación de Datos
- ✅ **Modelos Aprobados** - Cumplimiento 100%
- ⚠️ **En Revisión** - Pendientes de validar
- ❌ **Rechazados** - Requieren corrección

### Secciones Específicas - Coordinador Sostenibilidad

#### Análisis de Sostenibilidad
- 🔋 **Eficiencia Energética** - Meta: Reducción 30% vs convencional
- 💧 **Consumo de Agua** - Meta: Reducción 25% vs convencional
- ♻️ **Materiales Sostenibles** - Meta: 40% materiales reciclados/locales

#### Certificaciones Ambientales
- **LEED BD+C** - Leadership in Energy & Environmental Design
- **EDGE Certified** - Excellence in Design for Greater Efficiencies

### Acciones Especializadas

**Especialista Datos:**
```typescript
- Validar Modelo
- Exportar IFC
- Gestionar Estándares
- Generar Reporte
```

**Coordinador Sostenibilidad:**
```typescript
- Análisis Energético
- Huella de Carbono
- Certificaciones
- Reporte Sostenibilidad
```

---

## Implementación Técnica

### Arquitectura de Componentes

```
app/dashboard/
├── page.tsx                    # Router principal que detecta rol
├── layout.tsx                  # Layout común del dashboard

components/dashboard/
├── DashboardEstrategico.tsx    # Nivel Estratégico
├── DashboardTactico.tsx        # Nivel Táctico
├── DashboardOperativo.tsx      # Nivel Operativo
└── DashboardSoporte.tsx        # Nivel Soporte
```

### Flujo de Autenticación y Enrutamiento

```typescript
1. Usuario inicia sesión → NextAuth valida credenciales
2. Session contiene: { user: { role: RoleBIM, name, email } }
3. Dashboard page.tsx lee el rol del usuario
4. Determina nivel de acceso (ESTRATEGICO, TACTICO, OPERATIVO, SOPORTE)
5. Renderiza el componente dashboard correspondiente
6. Dashboard personalizado carga KPIs y acciones según rol
```

### Código de Ejemplo

```typescript
// app/dashboard/page.tsx
const userRole = session.user.role as RoleBIM;
const nivelAcceso = getNivelAcceso(userRole);

switch (nivelAcceso) {
  case NivelAcceso.ESTRATEGICO:
    return <DashboardEstrategico role={userRole} userName={userName} />;
  case NivelAcceso.TACTICO:
    return <DashboardTactico role={userRole} userName={userName} />;
  // ...
}
```

---

## Roadmap de Funcionalidades

### Fase 1: Fundamentos (Actual)
- ✅ Dashboards personalizados por rol
- ✅ KPIs estáticos según Plan BIM Perú
- ✅ Acciones rápidas específicas por nivel
- ✅ Diseño responsive y profesional

### Fase 2: Datos Dinámicos (Próximo)
- 🔄 Integración con MongoDB para KPIs reales
- 🔄 Gráficos interactivos con Chart.js/Recharts
- 🔄 Notificaciones en tiempo real por rol
- 🔄 Filtros temporales (hoy, semana, mes)

### Fase 3: Automatización Avanzada (Futuro)
- 📋 Generación automática de expedientes técnicos (Formato N°07)
- 🤖 Detección automática de interferencias con Navisworks API
- 📊 Reportes ejecutivos PDF con firma digital
- 🔗 Integración SEACE para licitaciones públicas

### Fase 4: IA y Analítica Predictiva
- 🧠 Predicción de riesgos en proyectos BIM
- 📈 Optimización de recursos con Machine Learning
- 🎯 Recomendaciones personalizadas por rol
- 🌐 Gemelos digitales para operación y mantenimiento

---

## Cumplimiento Normativo

### Plan BIM Perú (MEF)
- ✅ Estructura de roles según hoja de ruta 2025-2030
- ✅ Niveles de madurez BIM (0-3) implementados
- ✅ Usos iniciales BIM: Visualización, Detección, Metrados, Constructibilidad

### ISO 19650
- ✅ Gestión de información estructurada (EIR, OIR, PEB)
- ✅ Niveles de desarrollo (LOD 100-400)
- ✅ Protocolo de colaboración multidisciplinaria

### Normativa Peruana
- ✅ Reglamento Nacional de Edificaciones (RNE)
- ✅ Integración con SEACE para contrataciones públicas
- ✅ Formatos Trabaja Perú para generación de empleo

---

## Beneficios Clave por Nivel

### ESTRATÉGICO
- 📊 Visibilidad completa de cartera BIM
- 💰 Medición de ROI en tiempo real
- 🎯 Toma de decisiones basada en datos
- 🏆 Cumplimiento Plan BIM Perú

### TÁCTICO
- 🔍 Detección temprana de interferencias (ahorro 15-25%)
- ✅ Validación automática de modelos
- 📅 Control de entregables por fase
- 🔄 Coordinación multidisciplinaria eficiente

### OPERATIVO
- 🏗️ Acceso móvil para obra (tablet/smartphone)
- 📸 Bitácora digital con georreferenciación
- 📚 Biblioteca BIM Perú (familias locales)
- ⚡ Productividad aumentada 30-40%

### SOPORTE
- 📐 Estándares BIM centralizados
- ♻️ Sostenibilidad certificable (LEED, EDGE)
- 📊 Reportes de cumplimiento normativo
- 🌱 Reducción de huella de carbono medible

---

## Contacto y Soporte

Para más información sobre el sistema de dashboards personalizados:
- **Email**: soporte@erpbimperu.pe
- **Documentación Técnica**: `/docs`
- **Plan BIM Perú**: https://www.mef.gob.pe/es/?option=com_content&view=article&id=5763

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025  
**Compatible con:** Plan BIM Perú 2025-2030, ISO 19650-2
