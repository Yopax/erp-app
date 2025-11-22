/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Script de inicialización mejorado para ERP BIM Multi-Tenant
 * Crea 4 empresas con estructura completa y datos realistas
 * 
 * Ejecutar: npm run seed
 */

import { config } from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';
import * as bcrypt from 'bcryptjs';
import {
 Empresa,
 Trabajador,
 Proyecto,
 Documento,
 Presupuesto,
 EstadoProyecto,
 TipoProyecto,
 MonedaType,
 INDICES_COLECCIONES,
} from '../lib/types/models';
import type { Db } from 'mongodb';
import {
 RoleBIM,
 NivelAcceso,
 PERMISOS_POR_ROL,
} from '../lib/types/auth';

config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
 throw new Error('MONGODB_URI no está definido');
}

// ============================================
// FUNCIÓN PRINCIPAL DE SEED
// ============================================

async function seed() {
 console.log(' Iniciando seed del ERP BIM Multi-Tenant...\n');
 console.log('='.repeat(70));

 const client = new MongoClient(MONGODB_URI, {
 serverSelectionTimeoutMS: 60000,
 connectTimeoutMS: 60000,
 });

 try {
 await client.connect();
 console.log(' Conectado a MongoDB Atlas\n');

 const db = client.db('erp-app');

 // Limpiar colecciones existentes
 console.log(' Limpiando base de datos...');
 await limpiarBaseDatos(db);
 console.log(' Base de datos limpiada\n');

 // Crear índices
 console.log(' Creando índices...');
 await crearIndices(db);
 console.log(' Índices creados\n');

 // Crear empresas y sus ecosistemas
 console.log('='.repeat(70));
 console.log(' CREANDO EMPRESAS Y SUS ECOSISTEMAS');
 console.log('='.repeat(70));
 console.log('');

 await crearEmpresa1(db);
 await crearEmpresa2(db);
 await crearEmpresa3(db);
 await crearEmpresa4(db);

 // Resumen final
 await mostrarResumen(db);

 } catch (error) {
 console.error(' Error durante el seed:', error);
 throw error;
 } finally {
 await client.close();
 console.log('\n Conexión cerrada');
 }
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

async function limpiarBaseDatos(db: Db) {
 const colecciones = [
 'empresas',
 'trabajadores',
 'proyectos',
 'documentos',
 'presupuestos',
 'actividades',
 'bitacorasObra',
 'user',
 'account',
 ];

 for (const coleccion of colecciones) {
 await db.collection(coleccion).deleteMany({});
 }
}

async function crearIndices(db: any) {
 for (const [coleccion, indices] of Object.entries(INDICES_COLECCIONES)) {
 for (const indice of indices) {
 await db.collection(coleccion).createIndex(indice.key as any, {
 unique: indice.unique || false,
 });
 }
 }
}

// ============================================
// EMPRESA 1: CONSTRUCTORA BIM PERÚ
// ============================================

async function crearEmpresa1(db: Db) {
 console.log(' EMPRESA 1: CONSTRUCTORA BIM PERÚ S.A.C.');
 console.log('-'.repeat(70));

 const empresa: Empresa = {
 ruc: '20601234567',
 razonSocial: 'CONSTRUCTORA BIM PERU S.A.C.',
 nombreComercial: 'BIM Perú',
 logo: '/logos/bim-peru.png',
 direccion: 'Av. Javier Prado Este 2465',
 departamento: 'Lima',
 provincia: 'Lima',
 distrito: 'San Borja',
 codigoPostal: '15036',
 telefono: '+51 1 6400500',
 telefonoSecundario: '+51 1 6400501',
 emailCorporativo: 'contacto@bimperu.pe',
 sitioWeb: 'https://www.bimperu.pe',
 tipoEmpresa: 'CONSTRUCTORA',
 especialidades: [
 'Obras Viales',
 'Puentes y Túneles',
 'Infraestructura Hidráulica',
 'Edificaciones',
 'Movimiento de Tierras',
 ],
 nivelMadurezBIM: 3,
 certificacionesBIM: [
 'ISO 19650-2',
 'BuildingSMART Professional',
 'Autodesk Certified Professional',
 ],
 softwareBIM: [
 'Autodesk Revit',
 'Autodesk Civil 3D',
 'Navisworks',
 'BIM 360',
 'Dynamo',
 ],
 configuracion: {
 zonaHoraria: 'America/Lima',
 monedaPrincipal: MonedaType.PEN,
 idioma: 'es-PE',
 formatoFecha: 'DD/MM/YYYY',
 },
 plan: {
 nombre: 'EMPRESARIAL',
 maxUsuarios: 100,
 maxProyectos: 50,
 maxAlmacenamiento: 500,
 caracteristicas: [
 'Proyectos ilimitados',
 'Usuarios ilimitados',
 'Almacenamiento 500GB',
 'API acceso completo',
 'Soporte prioritario 24/7',
 ],
 },
 activa: true,
 fechaRegistro: new Date('2020-01-15'),
 ultimaActualizacion: new Date(),
 };

 const resultEmpresa = await db.collection('empresas').insertOne(empresa);
 const empresaId = resultEmpresa.insertedId;
 console.log(` Empresa creada (ID: ${empresaId})`);

 // Crear trabajadores
 const trabajadores = await crearTrabajadoresEmpresa1(db, empresaId);
 console.log(` ${trabajadores.length} trabajadores creados`);

 // Crear proyectos
 const proyectos = await crearProyectosEmpresa1(db, empresaId, trabajadores);
 console.log(` ${proyectos.length} proyectos creados`);

 // Crear documentos para proyectos
 const documentos = await crearDocumentosEmpresa1(db, empresaId, proyectos, trabajadores);
 console.log(` ${documentos.length} documentos creados`);

 // Crear presupuestos
 const presupuestos = await crearPresupuestosEmpresa1(db, empresaId, proyectos, trabajadores);
 console.log(` ${presupuestos.length} presupuestos creados`);

 console.log('');
}

async function crearTrabajadoresEmpresa1(db: Db, empresaId: ObjectId) {
 const trabajadores: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Carlos',
 apellidos: 'Mendoza Ruiz',
 nombreCompleto: 'Carlos Mendoza Ruiz',
 dni: '45123456',
 fechaNacimiento: new Date('1980-05-15'),
 genero: 'M',
 email: 'cmendoza@bimperu.pe',
 telefono: '+51 987654321',
 passwordHash: await bcrypt.hash('BimPeru2024!', 12),
 empresaId,
 cargo: 'Director BIM',
 roles: [RoleBIM.DIRECTOR_BIM],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-01-15'),
 departamento: 'Dirección BIM',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Ana',
 apellidos: 'García López',
 nombreCompleto: 'Ana García López',
 dni: '45234567',
 fechaNacimiento: new Date('1985-08-22'),
 genero: 'F',
 email: 'agarcia@bimperu.pe',
 telefono: '+51 987654322',
 passwordHash: await bcrypt.hash('Gerente2024!', 12),
 empresaId,
 cargo: 'Gerente BIM de Proyectos',
 roles: [RoleBIM.GERENTE_BIM_PROYECTOS],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.GERENTE_BIM_PROYECTOS] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-03-01'),
 departamento: 'Gerencia de Proyectos',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Luis',
 apellidos: 'Torres Vargas',
 nombreCompleto: 'Luis Torres Vargas',
 dni: '45345678',
 fechaNacimiento: new Date('1988-03-10'),
 genero: 'M',
 email: 'ltorres@bimperu.pe',
 telefono: '+51 987654323',
 passwordHash: await bcrypt.hash('Coordinador2024!', 12),
 empresaId,
 cargo: 'Coordinador BIM',
 roles: [RoleBIM.COORDINADOR_BIM],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.COORDINADOR_BIM] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-06-01'),
 departamento: 'Coordinación BIM',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'María',
 apellidos: 'Rodríguez Pérez',
 nombreCompleto: 'María Rodríguez Pérez',
 dni: '45456789',
 fechaNacimiento: new Date('1992-11-05'),
 genero: 'F',
 email: 'mrodriguez@bimperu.pe',
 telefono: '+51 987654324',
 passwordHash: await bcrypt.hash('Modelador2024!', 12),
 empresaId,
 cargo: 'Modelador BIM Civil',
 roles: [RoleBIM.MODELADOR_BIM_CIVIL],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.MODELADOR_BIM_CIVIL] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2021-01-15'),
 departamento: 'Modelado',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Jorge',
 apellidos: 'Sánchez Díaz',
 nombreCompleto: 'Jorge Sánchez Díaz',
 dni: '45567890',
 fechaNacimiento: new Date('1990-07-18'),
 genero: 'M',
 email: 'jsanchez@bimperu.pe',
 telefono: '+51 987654325',
 passwordHash: await bcrypt.hash('Ejecutor2024!', 12),
 empresaId,
 cargo: 'Ejecutor BIM de Obra',
 roles: [RoleBIM.EJECUTOR_BIM_OBRA],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.EJECUTOR_BIM_OBRA] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2021-04-01'),
 departamento: 'Obra',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Patricia',
 apellidos: 'Flores Quispe',
 nombreCompleto: 'Patricia Flores Quispe',
 dni: '45678901',
 fechaNacimiento: new Date('1987-09-25'),
 genero: 'F',
 email: 'pflores@bimperu.pe',
 telefono: '+51 987654326',
 passwordHash: await bcrypt.hash('Especialista2024!', 12),
 empresaId,
 cargo: 'Especialista BIM Vial',
 roles: [RoleBIM.ESPECIALISTA_BIM_VIAL],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.ESPECIALISTA_BIM_VIAL] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-09-01'),
 departamento: 'Infraestructura Vial',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 const result = await db.collection('trabajadores').insertMany(trabajadores);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...trabajadores[index],
 _id: id,
 }));
}

async function crearProyectosEmpresa1(db: Db, empresaId: ObjectId, trabajadores: (Trabajador & { _id: ObjectId })[]) {
 const director = trabajadores.find(t => t.email === 'cmendoza@bimperu.pe')!;
 const gerente = trabajadores.find(t => t.email === 'agarcia@bimperu.pe')!;
 const coordinador = trabajadores.find(t => t.email === 'ltorres@bimperu.pe')!;

 const proyectos: Omit<Proyecto, '_id'>[] = [
 {
 empresaId,
 codigo: 'PY-2024-001',
 nombre: 'Carretera Longitudinal de la Sierra - Tramo 3',
 descripcion: 'Diseño y construcción de 45 km de carretera de doble vía con obras de arte',
 tipo: TipoProyecto.CARRETERA,
 estado: EstadoProyecto.EN_CURSO,
 ubicacion: {
 departamento: 'Ayacucho',
 provincia: 'Huamanga',
 distrito: 'Carmen Alto',
 direccion: 'Km 0+000 - Km 45+000',
 coordenadas: {
 latitud: -13.1631,
 longitud: -74.2236,
 },
 },
 cliente: {
 nombre: 'Ministerio de Transportes y Comunicaciones',
 ruc: '20131370645',
 contacto: 'Ing. Pedro Ramírez',
 email: 'pram irez@mtc.gob.pe',
 telefono: '+51 1 6157800',
 },
 fechaInicio: new Date('2024-01-15'),
 fechaFinPrevista: new Date('2026-01-15'),
 presupuesto: {
 moneda: MonedaType.PEN,
 montoContratado: 125000000,
 montoEjecutado: 38500000,
 porcentajeAvance: 30.8,
 },
 equipo: [
 {
 trabajadorId: director._id,
 rol: 'Director BIM',
 fechaAsignacion: new Date('2024-01-15'),
 activo: true,
 },
 {
 trabajadorId: gerente._id,
 rol: 'Gerente de Proyecto',
 fechaAsignacion: new Date('2024-01-15'),
 activo: true,
 },
 {
 trabajadorId: coordinador._id,
 rol: 'Coordinador BIM',
 fechaAsignacion: new Date('2024-01-15'),
 activo: true,
 },
 ],
 bim: {
 usosBIM: [
 'Visualización 3D',
 'Diseño geométrico',
 'Modelado de terreno',
 'Detección de interferencias',
 'Cuantificación automática',
 ],
 softwareUtilizado: ['Civil 3D', 'InfraWorks', 'Navisworks'],
 nivelDesarrollo: 'LOD 300',
 estandares: ['ISO 19650-2', 'Manual de Carreteras DG-2018'],
 },
 etiquetas: ['Infraestructura', 'Vial', 'Público', 'MTC'],
 prioridad: 'ALTA',
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 creadoPor: director._id,
 },
 {
 empresaId,
 codigo: 'PY-2024-002',
 nombre: 'Puente Colgante Río Apurímac',
 descripcion: 'Construcción de puente colgante de 280m de luz',
 tipo: TipoProyecto.PUENTE,
 estado: EstadoProyecto.PLANIFICACION,
 ubicacion: {
 departamento: 'Apurímac',
 provincia: 'Abancay',
 distrito: 'Tamburco',
 coordenadas: {
 latitud: -13.6336,
 longitud: -72.8833,
 },
 },
 cliente: {
 nombre: 'Gobierno Regional de Apurímac',
 ruc: '20487895421',
 contacto: 'Arq. María Gonzales',
 email: 'mgonzales@regionapurimac.gob.pe',
 },
 fechaInicio: new Date('2024-12-01'),
 fechaFinPrevista: new Date('2026-12-01'),
 presupuesto: {
 moneda: MonedaType.PEN,
 montoContratado: 45000000,
 montoEjecutado: 0,
 porcentajeAvance: 0,
 },
 equipo: [
 {
 trabajadorId: gerente._id,
 rol: 'Gerente de Proyecto',
 fechaAsignacion: new Date('2024-11-01'),
 activo: true,
 },
 ],
 bim: {
 usosBIM: ['Visualización 3D', 'Análisis estructural', 'Planificación 4D'],
 softwareUtilizado: ['Revit Structure', 'SAP2000', 'Tekla Structures'],
 nivelDesarrollo: 'LOD 200',
 estandares: ['ISO 19650-2', 'AASHTO LRFD Bridge Design'],
 },
 etiquetas: ['Puente', 'Estructuras', 'Regional'],
 prioridad: 'MEDIA',
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 creadoPor: gerente._id,
 },
 ];

 const result = await db.collection('proyectos').insertMany(proyectos);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...proyectos[index],
 _id: id,
 }));
}

async function crearDocumentosEmpresa1(db: Db, empresaId: ObjectId, proyectos: (Proyecto & { _id: ObjectId })[], trabajadores: (Trabajador & { _id: ObjectId })[]) {
 const coordinador = trabajadores.find(t => t.email === 'ltorres@bimperu.pe')!;
 const proyecto1 = proyectos[0];

 const documentos: Omit<Documento, '_id'>[] = [
 {
 empresaId,
 proyectoId: proyecto1._id,
 codigo: 'DOC-2024-001',
 nombre: 'Modelo BIM Carretera Tramo 1',
 descripcion: 'Modelo 3D Civil 3D del primer tramo (Km 0+000 - Km 15+000)',
 tipo: 'MODELO_BIM' as any,
 version: '2.0',
 revision: 'B',
 estado: 'APROBADO' as any,
 archivo: {
 nombreOriginal: 'Carretera_Tramo1_v2.0_RevB.dwg',
 nombreAlmacenado: 'emp1_proj1_model_001_v2.dwg',
 extension: 'dwg',
 tamaño: 157286400, // 150 MB
 mimeType: 'application/acad',
 rutaAlmacenamiento: '/storage/empresa1/proyectos/py-2024-001/modelos/',
 },
 bim: {
 disciplina: 'Infraestructura Vial',
 software: 'Autodesk Civil 3D 2024',
 lod: 'LOD 300',
 coordenadas: true,
 federado: false,
 },
 historialVersiones: [
 {
 version: '1.0',
 revision: 'A',
 fecha: new Date('2024-02-15'),
 modificadoPor: coordinador._id,
 comentarios: 'Versión inicial del diseño',
 },
 {
 version: '2.0',
 revision: 'B',
 fecha: new Date('2024-05-20'),
 modificadoPor: coordinador._id,
 comentarios: 'Actualización según observaciones del cliente',
 },
 ],
 aprobaciones: [
 {
 aprobadorId: coordinador._id,
 fecha: new Date('2024-05-25'),
 aprobado: true,
 comentarios: 'Conforme con las especificaciones',
 },
 ],
 etiquetas: ['Civil3D', 'Carretera', 'Tramo1'],
 creadoEn: new Date('2024-02-15'),
 actualizadoEn: new Date('2024-05-25'),
 creadoPor: coordinador._id,
 },
 ];

 const result = await db.collection('documentos').insertMany(documentos);
 return Object.values(result.insertedIds);
}

async function crearPresupuestosEmpresa1(db: Db, empresaId: ObjectId, proyectos: (Proyecto & { _id: ObjectId })[], trabajadores: (Trabajador & { _id: ObjectId })[]) {
 const gerente = trabajadores.find(t => t.email === 'agarcia@bimperu.pe')!;
 const proyecto1 = proyectos[0];

 const presupuestos: Omit<Presupuesto, '_id'>[] = [
 {
 empresaId,
 proyectoId: proyecto1._id,
 codigo: 'PRES-2024-001',
 nombre: 'Presupuesto Base Carretera Longitudinal',
 version: '3.0',
 moneda: MonedaType.PEN,
 partidas: [
 {
 codigo: '01',
 descripcion: 'OBRAS PRELIMINARES',
 unidad: 'GLB',
 cantidad: 1,
 precioUnitario: 2500000,
 parcial: 2500000,
 nivel: 1,
 tieneHijos: true,
 },
 {
 codigo: '01.01',
 descripcion: 'Movilización y desmovilización de equipo',
 unidad: 'GLB',
 cantidad: 1,
 precioUnitario: 1500000,
 parcial: 1500000,
 nivel: 2,
 partidaPadre: '01',
 tieneHijos: false,
 },
 {
 codigo: '02',
 descripcion: 'MOVIMIENTO DE TIERRAS',
 unidad: 'M3',
 cantidad: 450000,
 precioUnitario: 45.50,
 parcial: 20475000,
 nivel: 1,
 tieneHijos: true,
 },
 {
 codigo: '03',
 descripcion: 'PAVIMENTO ASFALTICO',
 unidad: 'M2',
 cantidad: 540000,
 precioUnitario: 185.00,
 parcial: 99900000,
 nivel: 1,
 tieneHijos: true,
 },
 ],
 totales: {
 subtotal: 122875000,
 igv: 22117500,
 total: 144992500,
 utilidad: 12287500,
 gastosGenerales: 9830000,
 },
 estado: 'APROBADO',
 fechaAprobacion: new Date('2024-01-10'),
 aprobadoPor: gerente._id,
 creadoEn: new Date('2023-12-15'),
 actualizadoEn: new Date('2024-01-10'),
 creadoPor: gerente._id,
 },
 ];

 const result = await db.collection('presupuestos').insertMany(presupuestos);
 return Object.values(result.insertedIds);
}

// ============================================
// EMPRESA 2: INGENIERÍA Y PROYECTOS DEL SUR
// ============================================

async function crearEmpresa2(db: Db) {
 console.log(' EMPRESA 2: INGENIERÍA Y PROYECTOS DEL SUR S.A.');
 console.log('-'.repeat(70));

 const empresa: Empresa = {
 ruc: '20501234568',
 razonSocial: 'INGENIERIA Y PROYECTOS DEL SUR S.A.',
 nombreComercial: 'IP Sur',
 logo: '/logos/ip-sur.png',
 direccion: 'Av. Mariscal Castilla 560',
 departamento: 'Arequipa',
 provincia: 'Arequipa',
 distrito: 'Cercado',
 codigoPostal: '04001',
 telefono: '+51 54 285000',
 emailCorporativo: 'info@ipsur.pe',
 sitioWeb: 'https://www.ipsur.pe',
 tipoEmpresa: 'CONSULTORA',
 especialidades: [
 'Diseño de Carreteras',
 'Estudios de Impacto Ambiental',
 'Saneamiento',
 'Energía Renovable',
 'Estudios Hidrológicos',
 ],
 nivelMadurezBIM: 2,
 certificacionesBIM: ['Autodesk Certified Professional', 'Bentley Certified'],
 softwareBIM: ['Civil 3D', 'OpenRoads', 'Revit', 'ArcGIS'],
 configuracion: {
 zonaHoraria: 'America/Lima',
 monedaPrincipal: MonedaType.USD,
 idioma: 'es-PE',
 formatoFecha: 'DD/MM/YYYY',
 },
 plan: {
 nombre: 'PROFESIONAL',
 maxUsuarios: 50,
 maxProyectos: 25,
 maxAlmacenamiento: 250,
 caracteristicas: [
 'Hasta 25 proyectos activos',
 'Hasta 50 usuarios',
 'Almacenamiento 250GB',
 'Soporte 8x5',
 ],
 },
 activa: true,
 fechaRegistro: new Date('2018-06-10'),
 ultimaActualizacion: new Date(),
 };

 const resultEmpresa = await db.collection('empresas').insertOne(empresa);
 const empresaId = resultEmpresa.insertedId;
 console.log(` Empresa creada (ID: ${empresaId})`);

 // Crear trabajadores
 const trabajadores = await crearTrabajadoresEmpresa2(db, empresaId);
 console.log(` ${trabajadores.length} trabajadores creados`);

 // Crear proyectos
 const proyectos = await crearProyectosEmpresa2(db, empresaId, trabajadores);
 console.log(` ${proyectos.length} proyectos creados`);

 console.log('');
}

async function crearTrabajadoresEmpresa2(db: Db, empresaId: ObjectId) {
 const trabajadores: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Roberto',
 apellidos: 'Flores Quispe',
 nombreCompleto: 'Roberto Flores Quispe',
 dni: '42123456',
 email: 'rflores@ipsur.pe',
 telefono: '+51 959123456',
 passwordHash: await bcrypt.hash('Director2024!', 12),
 empresaId,
 cargo: 'Director BIM',
 roles: [RoleBIM.DIRECTOR_BIM],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2018-06-10'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Patricia',
 apellidos: 'Mamani Condori',
 nombreCompleto: 'Patricia Mamani Condori',
 dni: '42234567',
 email: 'pmamani@ipsur.pe',
 telefono: '+51 959123457',
 passwordHash: await bcrypt.hash('Especialista2024!', 12),
 empresaId,
 cargo: 'Especialista BIM Vial',
 roles: [RoleBIM.ESPECIALISTA_BIM_VIAL],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.ESPECIALISTA_BIM_VIAL] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2019-03-15'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Diego',
 apellidos: 'Huamán Castro',
 nombreCompleto: 'Diego Huamán Castro',
 dni: '42345678',
 email: 'dhuaman@ipsur.pe',
 telefono: '+51 959123458',
 passwordHash: await bcrypt.hash('Datos2024!', 12),
 empresaId,
 cargo: 'Especialista BIM en Datos',
 roles: [RoleBIM.ESPECIALISTA_BIM_DATOS],
 nivelAcceso: NivelAcceso.SOPORTE,
 permisos: PERMISOS_POR_ROL[RoleBIM.ESPECIALISTA_BIM_DATOS] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-01-10'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Carmen',
 apellidos: 'Ríos Paredes',
 nombreCompleto: 'Carmen Ríos Paredes',
 dni: '42456789',
 email: 'crios@ipsur.pe',
 telefono: '+51 959123459',
 passwordHash: await bcrypt.hash('Sostenibilidad2024!', 12),
 empresaId,
 cargo: 'Coordinadora BIM Sostenibilidad',
 roles: [RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD],
 nivelAcceso: NivelAcceso.SOPORTE,
 permisos: PERMISOS_POR_ROL[RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-08-01'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 const result = await db.collection('trabajadores').insertMany(trabajadores);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...trabajadores[index],
 _id: id,
 }));
}

async function crearProyectosEmpresa2(db: Db, empresaId: ObjectId, trabajadores: (Trabajador & { _id: ObjectId })[]) {
 const director = trabajadores[0];

 const proyectos: Omit<Proyecto, '_id'>[] = [
 {
 empresaId,
 codigo: 'CON-2024-001',
 nombre: 'Estudio Definitivo Carretera Matarani - La Joya',
 descripcion: 'Elaboración de expediente técnico para carretera de 85 km',
 tipo: TipoProyecto.CARRETERA,
 estado: EstadoProyecto.EN_CURSO,
 ubicacion: {
 departamento: 'Arequipa',
 provincia: 'Islay',
 distrito: 'Matarani',
 },
 cliente: {
 nombre: 'Provías Nacional',
 ruc: '20419026809',
 },
 fechaInicio: new Date('2024-03-01'),
 fechaFinPrevista: new Date('2024-12-31'),
 presupuesto: {
 moneda: MonedaType.USD,
 montoContratado: 850000,
 montoEjecutado: 425000,
 porcentajeAvance: 50,
 },
 equipo: [
 {
 trabajadorId: director._id,
 rol: 'Jefe de Proyecto',
 fechaAsignacion: new Date('2024-03-01'),
 activo: true,
 },
 ],
 bim: {
 usosBIM: ['Diseño 3D', 'Simulación hidráulica', 'Cubicación'],
 softwareUtilizado: ['Civil 3D', 'HEC-RAS'],
 nivelDesarrollo: 'LOD 300',
 estandares: ['Manual de Carreteras'],
 },
 etiquetas: ['Consultaría', 'Vial', 'Expediente'],
 prioridad: 'ALTA',
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 creadoPor: director._id,
 },
 ];

 const result = await db.collection('proyectos').insertMany(proyectos);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...proyectos[index],
 _id: id,
 }));
}

// ============================================
// EMPRESA 3: CONSTRUCTORA NORTE EDIFICACIONES
// ============================================

async function crearEmpresa3(db: Db) {
 console.log(' EMPRESA 3: CONSTRUCTORA NORTE EDIFICACIONES E.I.R.L.');
 console.log('-'.repeat(70));

 const empresa: Empresa = {
 ruc: '20487123456',
 razonSocial: 'CONSTRUCTORA NORTE EDIFICACIONES E.I.R.L.',
 nombreComercial: 'Norte Edificaciones',
 direccion: 'Jr. San Martín 450',
 departamento: 'Cajamarca',
 provincia: 'Cajamarca',
 distrito: 'Cajamarca',
 telefono: '+51 76 365400',
 emailCorporativo: 'contacto@norteedif.pe',
 sitioWeb: 'https://www.norteedif.pe',
 tipoEmpresa: 'CONSTRUCTORA',
 especialidades: ['Edificaciones', 'Vivienda', 'Remodelaciones'],
 nivelMadurezBIM: 1,
 certificacionesBIM: [],
 softwareBIM: ['Revit', 'AutoCAD'],
 configuracion: {
 zonaHoraria: 'America/Lima',
 monedaPrincipal: MonedaType.PEN,
 idioma: 'es-PE',
 formatoFecha: 'DD/MM/YYYY',
 },
 plan: {
 nombre: 'BASICO',
 maxUsuarios: 15,
 maxProyectos: 10,
 maxAlmacenamiento: 50,
 caracteristicas: ['Hasta 10 proyectos', 'Hasta 15 usuarios', 'Almacenamiento 50GB'],
 },
 activa: true,
 fechaRegistro: new Date('2022-03-20'),
 ultimaActualizacion: new Date(),
 };

 const resultEmpresa = await db.collection('empresas').insertOne(empresa);
 const empresaId = resultEmpresa.insertedId;
 console.log(` Empresa creada (ID: ${empresaId})`);

 const trabajadores = await crearTrabajadoresEmpresa3(db, empresaId);
 console.log(` ${trabajadores.length} trabajadores creados`);

 console.log('');
}

async function crearTrabajadoresEmpresa3(db: Db, empresaId: ObjectId) {
 const trabajadores: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Miguel',
 apellidos: 'Vásquez Rojas',
 nombreCompleto: 'Miguel Vásquez Rojas',
 dni: '40123456',
 email: 'mvasquez@norteedif.pe',
 passwordHash: await bcrypt.hash('Norte2024!', 12),
 empresaId,
 cargo: 'Gerente General',
 roles: [RoleBIM.DIRECTOR_BIM],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2022-03-20'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Sandra',
 apellidos: 'Mendoza Silva',
 nombreCompleto: 'Sandra Mendoza Silva',
 dni: '40234567',
 email: 'smendoza@norteedif.pe',
 passwordHash: await bcrypt.hash('Arquitecta2024!', 12),
 empresaId,
 cargo: 'Modeladora BIM',
 roles: [RoleBIM.MODELADOR_BIM_CIVIL],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.MODELADOR_BIM_CIVIL] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2022-06-01'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 const result = await db.collection('trabajadores').insertMany(trabajadores);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...trabajadores[index],
 _id: id,
 }));
}

// ============================================
// EMPRESA 4: GRUPO MINERO ANDINO
// ============================================

async function crearEmpresa4(db: Db) {
 console.log(' EMPRESA 4: GRUPO MINERO ANDINO S.A.C.');
 console.log('-'.repeat(70));

 const empresa: Empresa = {
 ruc: '20556789012',
 razonSocial: 'GRUPO MINERO ANDINO S.A.C.',
 nombreComercial: 'Minero Andino',
 direccion: 'Av. Los Incas 1250',
 departamento: 'Junín',
 provincia: 'Huancayo',
 distrito: 'El Tambo',
 telefono: '+51 64 245800',
 emailCorporativo: 'info@mineroan dino.pe',
 sitioWeb: 'https://www.mineroandino.pe',
 tipoEmpresa: 'MIXTA',
 especialidades: [
 'Infraestructura Minera',
 'Túneles',
 'Movimiento de Tierras Masivo',
 'Instalaciones Industriales',
 ],
 nivelMadurezBIM: 2,
 certificacionesBIM: ['Bentley Certified'],
 softwareBIM: ['MicroStation', 'OpenBuildings', 'Revit', 'Civil 3D'],
 configuracion: {
 zonaHoraria: 'America/Lima',
 monedaPrincipal: MonedaType.USD,
 idioma: 'es-PE',
 formatoFecha: 'DD/MM/YYYY',
 },
 plan: {
 nombre: 'PROFESIONAL',
 maxUsuarios: 40,
 maxProyectos: 20,
 maxAlmacenamiento: 200,
 caracteristicas: ['Hasta 20 proyectos', 'Hasta 40 usuarios', 'Almacenamiento 200GB'],
 },
 activa: true,
 fechaRegistro: new Date('2019-09-15'),
 ultimaActualizacion: new Date(),
 };

 const resultEmpresa = await db.collection('empresas').insertOne(empresa);
 const empresaId = resultEmpresa.insertedId;
 console.log(` Empresa creada (ID: ${empresaId})`);

 const trabajadores = await crearTrabajadoresEmpresa4(db, empresaId);
 console.log(` ${trabajadores.length} trabajadores creados`);

 console.log('');
}

async function crearTrabajadoresEmpresa4(db: Db, empresaId: ObjectId) {
 const trabajadores: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Fernando',
 apellidos: 'Castro Herrera',
 nombreCompleto: 'Fernando Castro Herrera',
 dni: '43123456',
 email: 'fcastro@mineroandino.pe',
 passwordHash: await bcrypt.hash('Minero2024!', 12),
 empresaId,
 cargo: 'Gerente BIM',
 roles: [RoleBIM.GERENTE_BIM_PROYECTOS],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.GERENTE_BIM_PROYECTOS] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2019-09-15'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Elena',
 apellidos: 'Paredes Luna',
 nombreCompleto: 'Elena Paredes Luna',
 dni: '43234567',
 email: 'eparedes@mineroandino.pe',
 passwordHash: await bcrypt.hash('Coordinadora2024!', 12),
 empresaId,
 cargo: 'Coordinadora BIM',
 roles: [RoleBIM.COORDINADOR_BIM],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.COORDINADOR_BIM] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2020-02-01'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Ricardo',
 apellidos: 'Gómez Prado',
 nombreCompleto: 'Ricardo Gómez Prado',
 dni: '43345678',
 email: 'rgomez@mineroandino.pe',
 passwordHash: await bcrypt.hash('Modelador2024!', 12),
 empresaId,
 cargo: 'Modelador BIM',
 roles: [RoleBIM.MODELADOR_BIM_CIVIL],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.MODELADOR_BIM_CIVIL] as unknown as Record<string, boolean>,
 fechaIngreso: new Date('2021-01-15'),
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 activo: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 const result = await db.collection('trabajadores').insertMany(trabajadores);
 return Object.values(result.insertedIds).map((id, index) => ({
 ...trabajadores[index],
 _id: id,
 }));
}

// ============================================
// RESUMEN FINAL
// ============================================

async function mostrarResumen(db: Db) {
 console.log('');
 console.log('='.repeat(70));
 console.log(' SEED COMPLETADO EXITOSAMENTE');
 console.log('='.repeat(70));
 console.log('');

 const empresas = await db.collection('empresas').find({}).toArray();
 const trabajadores = await db.collection('trabajadores').find({}).toArray();
 const proyectos = await db.collection('proyectos').find({}).toArray();
 const documentos = await db.collection('documentos').find({}).toArray();
 const presupuestos = await db.collection('presupuestos').find({}).toArray();

 console.log(' ESTADÍSTICAS GENERALES:');
 console.log(` • ${empresas.length} empresas creadas`);
 console.log(` • ${trabajadores.length} trabajadores/usuarios creados`);
 console.log(` • ${proyectos.length} proyectos creados`);
 console.log(` • ${documentos.length} documentos creados`);
 console.log(` • ${presupuestos.length} presupuestos creados`);
 console.log('');

 console.log(' EMPRESAS REGISTRADAS:');
 for (const empresa of empresas) {
 console.log(` • ${empresa.nombreComercial} (${empresa.razonSocial})`);
 const trabajadoresEmpresa = trabajadores.filter(
 (t) => t.empresaId.toString() === empresa._id.toString()
 );
 const proyectosEmpresa = proyectos.filter(
 (p) => p.empresaId.toString() === empresa._id.toString()
 );
 console.log(` - ${trabajadoresEmpresa.length} trabajadores`);
 console.log(` - ${proyectosEmpresa.length} proyectos`);
 console.log(` - Plan: ${empresa.plan.nombre}`);
 console.log(` - Nivel BIM: ${empresa.nivelMadurezBIM}`);
 }
 console.log('');

 console.log(' CREDENCIALES DE ACCESO (muestra):');
 console.log('-'.repeat(70));
 
 const credencialesMuestra = [
 { empresa: 'BIM Perú', email: 'cmendoza@bimperu.pe', password: 'BimPeru2024!', rol: 'Director BIM' },
 { empresa: 'IP Sur', email: 'rflores@ipsur.pe', password: 'Director2024!', rol: 'Director BIM' },
 { empresa: 'Norte Edificaciones', email: 'mvasquez@norteedif.pe', password: 'Norte2024!', rol: 'Gerente General' },
 { empresa: 'Minero Andino', email: 'fcastro@mineroandino.pe', password: 'Minero2024!', rol: 'Gerente BIM' },
 ];

 for (const cred of credencialesMuestra) {
 console.log(` ${cred.empresa}:`);
 console.log(` Email: Email: ${cred.email}`);
 console.log(` Password: Password: ${cred.password}`);
 console.log(` Cargo: Rol: ${cred.rol}`);
 console.log('');
 }

 console.log('='.repeat(70));
 console.log(' IMPORTANTE: Cambia las contraseñas en producción');
 console.log('📁 Estructura Multi-Tenant: Todas las colecciones tienen empresaId');
 console.log('🔒 Aislamiento de datos: Cada empresa solo ve sus propios datos');
 console.log('='.repeat(70));
}

// ============================================
// EJECUTAR SEED
// ============================================

seed()
 .then(() => {
 console.log('\n Proceso completado exitosamente');
 process.exit(0);
 })
 .catch((error) => {
 console.error('\n Error fatal:', error);
 process.exit(1);
 });
