/**
 * Modelos de datos para ERP BIM Multi-Tenant
 * Sistema escalable para múltiples empresas con datos aislados
 */

import { ObjectId } from 'mongodb';

// ============================================
// ENUMS Y CONSTANTES
// ============================================

export enum EstadoProyecto {
  PLANIFICACION = 'PLANIFICACION',
  EN_CURSO = 'EN_CURSO',
  PAUSADO = 'PAUSADO',
  FINALIZADO = 'FINALIZADO',
  CANCELADO = 'CANCELADO',
}

export enum TipoProyecto {
  CARRETERA = 'CARRETERA',
  PUENTE = 'PUENTE',
  EDIFICACION = 'EDIFICACION',
  SANEAMIENTO = 'SANEAMIENTO',
  HIDRAULICO = 'HIDRAULICO',
  ENERGIA = 'ENERGIA',
  OTROS = 'OTROS',
}

export enum TipoDocumento {
  PLANO = 'PLANO',
  MEMORIA = 'MEMORIA',
  ESPECIFICACIONES = 'ESPECIFICACIONES',
  PRESUPUESTO = 'PRESUPUESTO',
  CRONOGRAMA = 'CRONOGRAMA',
  MODELO_BIM = 'MODELO_BIM',
  INFORME = 'INFORME',
  CONTRATO = 'CONTRATO',
  OTROS = 'OTROS',
}

export enum EstadoDocumento {
  BORRADOR = 'BORRADOR',
  REVISION = 'REVISION',
  APROBADO = 'APROBADO',
  OBSOLETO = 'OBSOLETO',
}

export enum MonedaType {
  PEN = 'PEN', // Soles
  USD = 'USD', // Dólares
  EUR = 'EUR', // Euros
}

// ============================================
// EMPRESA (Multi-Tenant Root)
// ============================================

export interface Empresa {
  _id?: ObjectId;
  
  // Identificación
  ruc: string;
  razonSocial: string;
  nombreComercial: string;
  logo?: string;
  
  // Ubicación
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  codigoPostal?: string;
  
  // Contacto
  telefono: string;
  telefonoSecundario?: string;
  emailCorporativo: string;
  sitioWeb?: string;
  
  // Clasificación
  tipoEmpresa: 'CONSTRUCTORA' | 'CONSULTORA' | 'MIXTA';
  especialidades: string[];
  
  // BIM
  nivelMadurezBIM: 0 | 1 | 2 | 3; // Según Plan BIM Perú
  certificacionesBIM: string[];
  softwareBIM: string[]; // Revit, Civil 3D, etc.
  
  // Configuración del sistema
  configuracion: {
    zonaHoraria: string;
    monedaPrincipal: MonedaType;
    idioma: string;
    formatoFecha: string;
  };
  
  // Límites y plan
  plan: {
    nombre: string; // 'BASICO', 'PROFESIONAL', 'EMPRESARIAL'
    maxUsuarios: number;
    maxProyectos: number;
    maxAlmacenamiento: number; // GB
    caracteristicas: string[];
  };
  
  // Estado y auditoría
  activa: boolean;
  fechaRegistro: Date;
  ultimaActualizacion: Date;
  creadoPor?: ObjectId;
  modificadoPor?: ObjectId;
}

// ============================================
// TRABAJADOR (Usuario dentro de empresa)
// ============================================

export interface Trabajador {
  _id?: ObjectId;
  
  // Datos personales
  nombres: string;
  apellidos: string;
  nombreCompleto: string; // Generado automáticamente
  dni: string;
  fechaNacimiento?: Date;
  genero?: 'M' | 'F' | 'OTRO';
  
  // Contacto
  email: string;
  emailSecundario?: string;
  telefono?: string;
  telefonoEmergencia?: string;
  
  // Autenticación
  passwordHash: string;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Cargo y roles BIM
  cargo: string;
  roles: string[]; // RoleBIM[]
  nivelAcceso: string; // NivelAcceso
  permisos: Record<string, boolean>;
  
  // Datos laborales
  fechaIngreso: Date;
  fechaSalida?: Date;
  departamento?: string;
  supervisor?: ObjectId; // Referencia a otro trabajador
  
  // Seguridad
  mfaEnabled: boolean;
  mfaSecret?: string;
  ultimoAcceso?: Date;
  intentosFallidos: number;
  bloqueado: boolean;
  
  // Estado
  activo: boolean;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor?: ObjectId;
  modificadoPor?: ObjectId;
}

// ============================================
// PROYECTO
// ============================================

export interface Proyecto {
  _id?: ObjectId;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Identificación
  codigo: string; // Código único del proyecto
  nombre: string;
  descripcion: string;
  
  // Clasificación
  tipo: TipoProyecto;
  estado: EstadoProyecto;
  
  // Ubicación
  ubicacion: {
    departamento: string;
    provincia: string;
    distrito: string;
    direccion?: string;
    coordenadas?: {
      latitud: number;
      longitud: number;
    };
  };
  
  // Cliente
  cliente: {
    nombre: string;
    ruc?: string;
    contacto?: string;
    email?: string;
    telefono?: string;
  };
  
  // Fechas
  fechaInicio: Date;
  fechaFinPrevista: Date;
  fechaFinReal?: Date;
  
  // Presupuesto
  presupuesto: {
    moneda: MonedaType;
    montoContratado: number;
    montoEjecutado: number;
    porcentajeAvance: number;
  };
  
  // Equipo del proyecto
  equipo: {
    trabajadorId: ObjectId;
    rol: string;
    fechaAsignacion: Date;
    fechaDesasignacion?: Date;
    activo: boolean;
  }[];
  
  // BIM
  bim: {
    usosBIM: string[]; // Visualización 3D, Detección de interferencias, etc.
    softwareUtilizado: string[];
    nivelDesarrollo: string; // LOD 100, 200, 300, etc.
    estandares: string[]; // ISO 19650, etc.
  };
  
  // Metadatos
  etiquetas: string[];
  prioridad: 'BAJA' | 'MEDIA' | 'ALTA' | 'CRITICA';
  
  // Estado
  activo: boolean;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor: ObjectId;
  modificadoPor?: ObjectId;
}

// ============================================
// DOCUMENTO
// ============================================

export interface Documento {
  _id?: ObjectId;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Relación con proyecto
  proyectoId: ObjectId;
  
  // Identificación
  codigo: string;
  nombre: string;
  descripcion?: string;
  tipo: TipoDocumento;
  
  // Versión y revisión
  version: string; // 1.0, 2.0, etc.
  revision: string; // A, B, C, etc.
  estado: EstadoDocumento;
  
  // Archivo
  archivo: {
    nombreOriginal: string;
    nombreAlmacenado: string;
    extension: string;
    tamaño: number; // bytes
    mimeType: string;
    urlDescarga?: string;
    rutaAlmacenamiento: string;
  };
  
  // BIM específico (si aplica)
  bim?: {
    disciplina: string; // Arquitectura, Estructura, etc.
    software: string;
    lod: string;
    coordenadas?: boolean;
    federado?: boolean;
  };
  
  // Control de cambios
  historialVersiones: {
    version: string;
    revision: string;
    fecha: Date;
    modificadoPor: ObjectId;
    comentarios: string;
    archivoId?: string;
  }[];
  
  // Aprobaciones
  aprobaciones: {
    aprobadorId: ObjectId;
    fecha: Date;
    aprobado: boolean;
    comentarios?: string;
  }[];
  
  // Metadatos
  etiquetas: string[];
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor: ObjectId;
  modificadoPor?: ObjectId;
}

// ============================================
// PRESUPUESTO
// ============================================

export interface Presupuesto {
  _id?: ObjectId;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Relación con proyecto
  proyectoId: ObjectId;
  
  // Identificación
  codigo: string;
  nombre: string;
  descripcion?: string;
  version: string;
  
  // Configuración
  moneda: MonedaType;
  tipoCambio?: number; // Si se maneja otra moneda
  
  // Partidas
  partidas: PartidaPresupuesto[];
  
  // Totales
  totales: {
    subtotal: number;
    igv: number;
    total: number;
    utilidad: number;
    gastosGenerales: number;
  };
  
  // Estado
  estado: 'BORRADOR' | 'APROBADO' | 'EJECUTADO';
  fechaAprobacion?: Date;
  aprobadoPor?: ObjectId;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor: ObjectId;
  modificadoPor?: ObjectId;
}

export interface PartidaPresupuesto {
  codigo: string;
  descripcion: string;
  unidad: string;
  cantidad: number;
  precioUnitario: number;
  parcial: number;
  
  // Análisis de precios
  materiales?: ItemAnalisis[];
  manoObra?: ItemAnalisis[];
  equipos?: ItemAnalisis[];
  subcontratos?: ItemAnalisis[];
  
  // Jerarquía
  nivel: number;
  partidaPadre?: string; // código de la partida padre
  tieneHijos: boolean;
}

export interface ItemAnalisis {
  descripcion: string;
  unidad: string;
  cantidad: number;
  precioUnitario: number;
  parcial: number;
}

// ============================================
// ACTIVIDAD / TAREA
// ============================================

export interface Actividad {
  _id?: ObjectId;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Relación con proyecto
  proyectoId: ObjectId;
  
  // Identificación
  codigo: string;
  nombre: string;
  descripcion?: string;
  
  // Planificación
  fechaInicio: Date;
  fechaFin: Date;
  duracion: number; // días
  
  // Dependencias (para diagrama de Gantt)
  dependencias: {
    actividadId: ObjectId;
    tipo: 'FS' | 'SS' | 'FF' | 'SF'; // Finish-Start, Start-Start, etc.
    retraso: number; // días
  }[];
  
  // Asignación
  responsables: ObjectId[]; // trabajadorIds
  
  // Progreso
  porcentajeAvance: number;
  estado: 'PENDIENTE' | 'EN_PROGRESO' | 'COMPLETADA' | 'CANCELADA';
  
  // Recursos
  presupuestoAsignado?: number;
  presupuestoEjecutado?: number;
  
  // Hitos
  esHito: boolean;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor: ObjectId;
  modificadoPor?: ObjectId;
}

// ============================================
// BITÁCORA DE OBRA
// ============================================

export interface BitacoraObra {
  _id?: ObjectId;
  
  // Relación con empresa (MULTI-TENANT KEY)
  empresaId: ObjectId;
  
  // Relación con proyecto
  proyectoId: ObjectId;
  
  // Datos de la entrada
  fecha: Date;
  numeroEntrada: number;
  
  // Condiciones
  clima: string;
  temperatura?: number;
  
  // Personal
  personalObra: {
    categoria: string; // Ingeniero, Oficial, Peón, etc.
    cantidad: number;
  }[];
  
  // Trabajos realizados
  trabajosRealizados: {
    actividad: string;
    descripcion: string;
    avance: number;
    ubicacion?: string;
  }[];
  
  // Equipos y materiales
  equiposUtilizados: string[];
  materialesUtilizados: {
    descripcion: string;
    cantidad: number;
    unidad: string;
  }[];
  
  // Incidencias
  incidencias: {
    tipo: 'SEGURIDAD' | 'CALIDAD' | 'AMBIENTAL' | 'OTRO';
    descripcion: string;
    gravedad: 'BAJA' | 'MEDIA' | 'ALTA';
    accionesTomadas?: string;
  }[];
  
  // Fotografías
  fotografias: {
    url: string;
    descripcion: string;
    ubicacion?: string;
  }[];
  
  // Firma digital
  registradoPor: ObjectId;
  supervisadoPor?: ObjectId;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
}

// ============================================
// ÍNDICES Y VALIDACIONES
// ============================================

export const INDICES_COLECCIONES = {
  empresas: [
    { key: { ruc: 1 }, unique: true },
    { key: { emailCorporativo: 1 }, unique: true },
    { key: { activa: 1 } },
  ],
  
  trabajadores: [
    { key: { email: 1 }, unique: true },
    { key: { empresaId: 1, activo: 1 } },
    { key: { empresaId: 1, email: 1 }, unique: true },
    { key: { dni: 1 } },
  ],
  
  proyectos: [
    { key: { empresaId: 1, codigo: 1 }, unique: true },
    { key: { empresaId: 1, estado: 1 } },
    { key: { empresaId: 1, activo: 1 } },
    { key: { 'equipo.trabajadorId': 1 } },
  ],
  
  documentos: [
    { key: { empresaId: 1, proyectoId: 1 } },
    { key: { empresaId: 1, proyectoId: 1, codigo: 1 }, unique: true },
    { key: { empresaId: 1, tipo: 1 } },
    { key: { estado: 1 } },
  ],
  
  presupuestos: [
    { key: { empresaId: 1, proyectoId: 1 } },
    { key: { empresaId: 1, codigo: 1 }, unique: true },
  ],
  
  actividades: [
    { key: { empresaId: 1, proyectoId: 1 } },
    { key: { empresaId: 1, proyectoId: 1, codigo: 1 }, unique: true },
    { key: { 'responsables': 1 } },
  ],
  
  bitacorasObra: [
    { key: { empresaId: 1, proyectoId: 1, fecha: -1 } },
    { key: { empresaId: 1, proyectoId: 1, numeroEntrada: 1 }, unique: true },
  ],
};
