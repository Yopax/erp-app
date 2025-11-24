import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import * as bcrypt from 'bcryptjs';
import {
 Empresa,
 Trabajador,
 RoleBIM,
 NivelAcceso,
 PERMISOS_POR_ROL,
} from '../lib/types/auth';

config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
 throw new Error('MONGODB_URI no está definido');
}

async function seed() {
 console.log('Iniciando seed de base de datos...\n');

 const client = new MongoClient(MONGODB_URI, {
 serverSelectionTimeoutMS: 60000,
 connectTimeoutMS: 60000,
 });

 try {
 await client.connect();
 console.log('Conectado a MongoDB\n');

 const db = client.db("erp-app");
 const empresasCollection = db.collection<Empresa>('empresas');
 const trabajadoresCollection = db.collection<Trabajador>('trabajadores');
 const userCollection = db.collection('user'); // Tabla de Better Auth

 // Limpiar colecciones existentes
 await empresasCollection.deleteMany({});
 await trabajadoresCollection.deleteMany({});
 await userCollection.deleteMany({});
 console.log('Colecciones limpiadas\n');

 const empresa1: Empresa = {
 ruc: '20601234567',
 razonSocial: 'CONSTRUCTORA BIM PERU S.A.C.',
 nombreComercial: 'BIM Perú',
 direccion: 'Av. Javier Prado Este 2465, San Borja',
 departamento: 'Lima',
 provincia: 'Lima',
 distrito: 'San Borja',
 telefono: '+51 1 6400500',
 emailCorporativo: 'contacto@bimperu.pe',
 tipoEmpresa: 'CONSTRUCTORA',
 especialidades: [
 'Obras Viales',
 'Puentes',
 'Infraestructura Hidráulica',
 'Edificaciones',
 ],
 nivelMadurezBIM: 3,
 certificacionesBIM: ['ISO 19650-2', 'BuildingSMART Professional'],
 activa: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 };

 const resultEmpresa1 = await empresasCollection.insertOne(empresa1);
 const empresa1Id = resultEmpresa1.insertedId.toString();
 console.log(`Empresa 1 creada: ${empresa1.razonSocial} (ID: ${empresa1Id})`);
 const trabajadoresEmpresa1: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Carlos',
 apellidos: 'Mendoza Ruiz',
 email: 'cmendoza@bimperu.pe',
 passwordHash: await bcrypt.hash('BimPeru2024!', 12),
 roles: [RoleBIM.DIRECTOR_BIM],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM],
 empresaId: empresa1Id,
 cargo: 'Director BIM',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Ana',
 apellidos: 'García López',
 email: 'agarcia@bimperu.pe',
 passwordHash: await bcrypt.hash('Gerente2024!', 12),
 roles: [RoleBIM.GERENTE_BIM_PROYECTOS],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.GERENTE_BIM_PROYECTOS],
 empresaId: empresa1Id,
 cargo: 'Gerente BIM de Proyectos',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Luis',
 apellidos: 'Torres Vargas',
 email: 'ltorres@bimperu.pe',
 passwordHash: await bcrypt.hash('Coordinador2024!', 12),
 roles: [RoleBIM.COORDINADOR_BIM],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.COORDINADOR_BIM],
 empresaId: empresa1Id,
 cargo: 'Coordinador BIM',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'María',
 apellidos: 'Rodríguez Pérez',
 email: 'mrodriguez@bimperu.pe',
 passwordHash: await bcrypt.hash('Modelador2024!', 12),
 roles: [RoleBIM.MODELADOR_BIM_CIVIL],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.MODELADOR_BIM_CIVIL],
 empresaId: empresa1Id,
 cargo: 'Modelador BIM Civil',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Jorge',
 apellidos: 'Sánchez Díaz',
 email: 'jsanchez@bimperu.pe',
 passwordHash: await bcrypt.hash('Ejecutor2024!', 12),
 roles: [RoleBIM.EJECUTOR_BIM_OBRA],
 nivelAcceso: NivelAcceso.OPERATIVO,
 permisos: PERMISOS_POR_ROL[RoleBIM.EJECUTOR_BIM_OBRA],
 empresaId: empresa1Id,
 cargo: 'Ejecutor BIM de Obra',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 await trabajadoresCollection.insertMany(trabajadoresEmpresa1);
 console.log(`${trabajadoresEmpresa1.length} trabajadores creados para ${empresa1.nombreComercial}\n`);
 for (const trabajador of trabajadoresEmpresa1) {
 await userCollection.insertOne({
 name: `${trabajador.nombres} ${trabajador.apellidos}`,
 email: trabajador.email,
 emailVerified: false,
 image: null,
 createdAt: new Date(),
 updatedAt: new Date(),
 });
 
 // Crear credenciales en la tabla de accounts
 const accountsCollection = db.collection('account');
 await accountsCollection.insertOne({
 userId: trabajador.email,
 accountId: trabajador.email,
 providerId: 'credential',
 password: trabajador.passwordHash,
 createdAt: new Date(),
 updatedAt: new Date(),
 });
 }

 const empresa2: Empresa = {
 ruc: '20501234568',
 razonSocial: 'INGENIERIA Y PROYECTOS DEL SUR S.A.',
 nombreComercial: 'IP Sur',
 direccion: 'Av. Mariscal Castilla 560, Arequipa',
 departamento: 'Arequipa',
 provincia: 'Arequipa',
 distrito: 'Cercado',
 telefono: '+51 54 285000',
 emailCorporativo: 'info@ipsur.pe',
 tipoEmpresa: 'CONSULTORA',
 especialidades: [
 'Diseño de Carreteras',
 'Estudios de Impacto Ambiental',
 'Saneamiento',
 'Energía',
 ],
 nivelMadurezBIM: 2,
 certificacionesBIM: ['Autodesk Certified Professional'],
 activa: true,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 };

 const resultEmpresa2 = await empresasCollection.insertOne(empresa2);
 const empresa2Id = resultEmpresa2.insertedId.toString();
 console.log(`Empresa 2 creada: ${empresa2.razonSocial} (ID: ${empresa2Id})`);
 const trabajadoresEmpresa2: Omit<Trabajador, '_id'>[] = [
 {
 nombres: 'Roberto',
 apellidos: 'Flores Quispe',
 email: 'rflores@ipsur.pe',
 passwordHash: await bcrypt.hash('Director2024!', 12),
 roles: [RoleBIM.DIRECTOR_BIM],
 nivelAcceso: NivelAcceso.ESTRATEGICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.DIRECTOR_BIM],
 empresaId: empresa2Id,
 cargo: 'Director BIM',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Patricia',
 apellidos: 'Mamani Condori',
 email: 'pmamani@ipsur.pe',
 passwordHash: await bcrypt.hash('Especialista2024!', 12),
 roles: [RoleBIM.ESPECIALISTA_BIM_VIAL],
 nivelAcceso: NivelAcceso.TACTICO,
 permisos: PERMISOS_POR_ROL[RoleBIM.ESPECIALISTA_BIM_VIAL],
 empresaId: empresa2Id,
 cargo: 'Especialista BIM en Infraestructura Vial',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Diego',
 apellidos: 'Huamán Castro',
 email: 'dhuaman@ipsur.pe',
 passwordHash: await bcrypt.hash('Datos2024!', 12),
 roles: [RoleBIM.ESPECIALISTA_BIM_DATOS],
 nivelAcceso: NivelAcceso.SOPORTE,
 permisos: PERMISOS_POR_ROL[RoleBIM.ESPECIALISTA_BIM_DATOS],
 empresaId: empresa2Id,
 cargo: 'Especialista BIM en Datos y Estándares',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 {
 nombres: 'Carmen',
 apellidos: 'Ríos Paredes',
 email: 'crios@ipsur.pe',
 passwordHash: await bcrypt.hash('Sostenibilidad2024!', 12),
 roles: [RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD],
 nivelAcceso: NivelAcceso.SOPORTE,
 permisos: PERMISOS_POR_ROL[RoleBIM.COORDINADOR_BIM_SOSTENIBILIDAD],
 empresaId: empresa2Id,
 cargo: 'Coordinadora BIM de Sostenibilidad',
 mfaEnabled: false,
 intentosFallidos: 0,
 bloqueado: false,
 creadoEn: new Date(),
 actualizadoEn: new Date(),
 },
 ];

 await trabajadoresCollection.insertMany(trabajadoresEmpresa2);
 console.log(`${trabajadoresEmpresa2.length} trabajadores creados para ${empresa2.nombreComercial}\n`);
 for (const trabajador of trabajadoresEmpresa2) {
 await userCollection.insertOne({
 name: `${trabajador.nombres} ${trabajador.apellidos}`,
 email: trabajador.email,
 emailVerified: false,
 image: null,
 createdAt: new Date(),
 updatedAt: new Date(),
 });
 
 // Crear credenciales en la tabla de accounts
 const accountsCollection = db.collection('account');
 await accountsCollection.insertOne({
 userId: trabajador.email,
 accountId: trabajador.email,
 providerId: 'credential',
 password: trabajador.passwordHash,
 createdAt: new Date(),
 updatedAt: new Date(),
 });
 }

 await trabajadoresCollection.createIndex({ email: 1 }, { unique: true });
 await empresasCollection.createIndex({ ruc: 1 }, { unique: true });
 console.log('Índices creados\n');

 console.log('='.repeat(60));
 console.log('SEED COMPLETADO EXITOSAMENTE');
 console.log('='.repeat(60));
 console.log('\nRESUMEN:');
 console.log(` • ${2} empresas creadas`);
 console.log(` • ${trabajadoresEmpresa1.length + trabajadoresEmpresa2.length} trabajadores creados`);
 console.log('\nCREDENCIALES DE ACCESO:\n');

 console.log('EMPRESA 1: Constructora BIM Perú S.A.C.');
 console.log('-'.repeat(60));
 const passwordsEmpresa1 = [
 'BimPeru2024!',
 'Gerente2024!',
 'Coordinador2024!',
 'Modelador2024!',
 'Ejecutor2024!',
 ];
 trabajadoresEmpresa1.forEach((t, index) => {
 console.log(` Email: ${t.email}`);
 console.log(` Password: ${passwordsEmpresa1[index]}`);
 console.log(` Cargo: ${t.cargo} (${t.roles.join(', ')})`);
 console.log('');
 });

 console.log('\nEMPRESA 2: Ingeniería y Proyectos del Sur S.A.');
 console.log('-'.repeat(60));
 const passwordsEmpresa2 = [
 'Director2024!',
 'Especialista2024!',
 'Datos2024!',
 'Sostenibilidad2024!',
 ];
 trabajadoresEmpresa2.forEach((t, index) => {
 console.log(` Email: ${t.email}`);
 console.log(` Password: ${passwordsEmpresa2[index]}`);
 console.log(` Cargo: ${t.cargo} (${t.roles.join(', ')})`);
 console.log('');
 });

 console.log('='.repeat(60));
 console.log('IMPORTANTE: Cambia las contraseñas en producción');
 console.log('='.repeat(60));

 } catch (error) {
 console.error('Error durante el seed:', error);
 throw error;
 } finally {
 await client.close();
 console.log('\nConexión cerrada');
 }
}

seed()
 .then(() => process.exit(0))
 .catch((error) => {
 console.error(error);
 process.exit(1);
 });
