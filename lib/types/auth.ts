/**
 * Enumeración de roles BIM según la planificación del ERP
 * Basado en Plan BIM Perú y metodología ISO 19650
 */
export enum RoleBIM {
  // Nivel Estratégico
  DIRECTOR_BIM = 'DIRECTOR_BIM',
  GERENTE_BIM_PROYECTOS = 'GERENTE_BIM_PROYECTOS',
  
  // Nivel Táctico
  COORDINADOR_BIM = 'COORDINADOR_BIM',
  ESPECIALISTA_BIM_VIAL = 'ESPECIALISTA_BIM_VIAL',
  
  // Nivel Operativo
  MODELADOR_BIM_CIVIL = 'MODELADOR_BIM_CIVIL',
  EJECUTOR_BIM_OBRA = 'EJECUTOR_BIM_OBRA',
  
  // Nivel Soporte
  ESPECIALISTA_BIM_DATOS = 'ESPECIALISTA_BIM_DATOS',
  COORDINADOR_BIM_SOSTENIBILIDAD = 'COORDINADOR_BIM_SOSTENIBILIDAD',
}

/**
 * Niveles jerárquicos de acceso
 */
export enum NivelAcceso {
  ESTRATEGICO = 'ESTRATEGICO',
  TACTICO = 'TACTICO',
  OPERATIVO = 'OPERATIVO',
  SOPORTE = 'SOPORTE',
}

/**
 * Permisos granulares del sistema
 */
export interface Permisos {
  // Gestión
  gestionCartera: boolean;
  gestionProyectos: boolean;
  gestionUsuarios: boolean;
  
  // Modelos BIM
  crearModelos: boolean;
  editarModelos: boolean;
  exportarModelos: boolean;
  validarModelos: boolean;
  
  // Datos y reportes
  accesoReportesEstrategicos: boolean;
  gestionEstandares: boolean;
  exportarDatos: boolean;
  
  // Obra y campo
  accesoMovil: boolean;
  registroBitacora: boolean;
  reporteNoConformidades: boolean;
}

/**
 * Información del trabajador/usuario
 */
export interface Trabajador {
  _id?: string;
  userId?: string; // Referencia al ID de usuario en Better Auth
  nombres: string;
  apellidos: string;
  email: string;
  passwordHash: string;
  
  // Roles y permisos
  roles: RoleBIM[];
  nivelAcceso: NivelAcceso;
  permisos: Permisos;
  
  // Relación con empresa
  empresaId: string;
  cargo: string;
  
  // Seguridad
  mfaEnabled: boolean;
  mfaSecret?: string;
  ultimoAcceso?: Date;
  intentosFallidos: number;
  bloqueado: boolean;
  
  // Auditoría
  creadoEn: Date;
  actualizadoEn: Date;
  creadoPor?: string;
}

/**
 * Información de la empresa constructora/consultoría
 */
export interface Empresa {
  _id?: string;
  ruc: string;
  razonSocial: string;
  nombreComercial: string;
  
  // Ubicación
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  
  // Contacto
  telefono: string;
  emailCorporativo: string;
  
  // Clasificación
  tipoEmpresa: 'CONSTRUCTORA' | 'CONSULTORA' | 'MIXTA';
  especialidades: string[];
  
  // BIM
  nivelMadurezBIM: 0 | 1 | 2 | 3; // Según Plan BIM Perú
  certificacionesBIM: string[];
  
  // Estado
  activa: boolean;
  creadoEn: Date;
  actualizadoEn: Date;
}

/**
 * Mapeo de roles a permisos predeterminados
 */
export const PERMISOS_POR_ROL: Record<RoleBIM, Permisos> = {
  [RoleBIM.DIRECTOR_BIM]: {
    gestionCartera: true,
    gestionProyectos: true,
    gestionUsuarios: true,
    crearModelos: true,
    editarModelos: true,
    exportarModelos: true,
    validarModelos: true,
    accesoReportesEstrategicos: true,
    gestionEstandares: true,
    exportarDatos: true,
    accesoMovil: true,
    registroBitacora: true,
    reporteNoConformidades: true,
  },
  
  [RoleBIM.GERENTE_BIM_PROYECTOS]: {
    gestionCartera: true,
    gestionProyectos: true,
    gestionUsuarios: false,
    crearModelos: true,
    editarModelos: true,
    exportarModelos: true,
    validarModelos: true,
    accesoReportesEstrategicos: true,
    gestionEstandares: false,
    exportarDatos: true,
    accesoMovil: true,
    registroBitacora: true,
    reporteNoConformidades: true,
  },
  
  [RoleBIM.COORDINADOR_BIM]: {
    gestionCartera: false,
    gestionProyectos: true,
    gestionUsuarios: false,
    crearModelos: true,
    editarModelos: true,
    exportarModelos: true,
    validarModelos: true,
    accesoReportesEstrategicos: false,
    gestionEstandares: false,
    exportarDatos: false,
    accesoMovil: true,
    registroBitacora: true,
    reporteNoConformidades: true,
  },
  
  [RoleBIM.ESPECIALISTA_BIM_VIAL]: {
    gestionCartera: false,
    gestionProyectos: false,
    gestionUsuarios: false,
    crearModelos: true,
    editarModelos: true,
    exportarModelos: true,
    validarModelos: true,
    accesoReportesEstrategicos: false,
    gestionEstandares: false,
    exportarDatos: false,
    accesoMovil: true,
    registroBitacora: true,
    reporteNoConformidades: true,
  },
  
  [RoleBIM.MODELADOR_BIM_CIVIL]: {
    gestionCartera: false,
    gestionProyectos: false,
    gestionUsuarios: false,
    crearModelos: true,
    editarModelos: true,
    exportarModelos: false, // Solo su disciplina
    validarModelos: false,
    accesoReportesEstrategicos: false,
    gestionEstandares: false,
    exportarDatos: false,
    accesoMovil: false,
    registroBitacora: false,
    reporteNoConformidades: false,
  },
  
  [RoleBIM.EJECUTOR_BIM_OBRA]: {
    gestionCartera: false,
    gestionProyectos: false,
    gestionUsuarios: false,
    crearModelos: false,
    editarModelos: false,
    exportarModelos: false,
    validarModelos: false,
    accesoReportesEstrategicos: false,
    gestionEstandares: false,
    exportarDatos: false,
    accesoMovil: true,
    registroBitacora: true,
    reporteNoConformidades: true,
  },
  
  [RoleBIM.ESPECIALISTA_BIM_DATOS]: {
    gestionCartera: false,
    gestionProyectos: false,
    gestionUsuarios: true,
    crearModelos: false,
    editarModelos: false,
    exportarModelos: true,
    validarModelos: true,
    accesoReportesEstrategicos: false,
    gestionEstandares: true,
    exportarDatos: true,
    accesoMovil: false,
    registroBitacora: false,
    reporteNoConformidades: false,
  },
  
  [RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD]: {
    gestionCartera: false,
    gestionProyectos: false,
    gestionUsuarios: false,
    crearModelos: false,
    editarModelos: false,
    exportarModelos: true,
    validarModelos: false,
    accesoReportesEstrategicos: false,
    gestionEstandares: false,
    exportarDatos: true,
    accesoMovil: false,
    registroBitacora: false,
    reporteNoConformidades: false,
  },
};

/**
 * Mapeo de roles a nivel de acceso
 */
export const NIVEL_POR_ROL: Record<RoleBIM, NivelAcceso> = {
  [RoleBIM.DIRECTOR_BIM]: NivelAcceso.ESTRATEGICO,
  [RoleBIM.GERENTE_BIM_PROYECTOS]: NivelAcceso.ESTRATEGICO,
  [RoleBIM.COORDINADOR_BIM]: NivelAcceso.TACTICO,
  [RoleBIM.ESPECIALISTA_BIM_VIAL]: NivelAcceso.TACTICO,
  [RoleBIM.MODELADOR_BIM_CIVIL]: NivelAcceso.OPERATIVO,
  [RoleBIM.EJECUTOR_BIM_OBRA]: NivelAcceso.OPERATIVO,
  [RoleBIM.ESPECIALISTA_BIM_DATOS]: NivelAcceso.SOPORTE,
  [RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD]: NivelAcceso.SOPORTE,
};
