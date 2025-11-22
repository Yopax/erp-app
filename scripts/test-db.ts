/**
 * Script de verificación de conexión a MongoDB
 * Ejecutar: npm run test-db
 */

import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

// Cargar variables de entorno
config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI || '';

async function testConnection() {
  console.log('🔍 Verificando conexión a MongoDB...\n');
  
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI no está definido en .env.local');
    process.exit(1);
  }

  console.log('📝 URI configurado:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@'));
  console.log('\n⏳ Intentando conectar...\n');

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ ¡Conexión exitosa a MongoDB!\n');

    // Obtener información del servidor
    const admin = client.db().admin();
    const serverInfo = await admin.serverStatus();
    
    console.log('📊 Información del servidor:');
    console.log(`   • Host: ${serverInfo.host}`);
    console.log(`   • Versión: ${serverInfo.version}`);
    console.log(`   • Uptime: ${Math.floor(serverInfo.uptime / 60)} minutos`);
    
    // Listar bases de datos
    const databases = await admin.listDatabases();
    console.log('\n📚 Bases de datos disponibles:');
    databases.databases.forEach((db) => {
      const size = db.sizeOnDisk || 0;
      console.log(`   • ${db.name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
    });

    // Verificar base de datos específica
    const db = client.db('erp-app');
    const collections = await db.listCollections().toArray();
    
    console.log('\n📂 Colecciones en "erp-app":');
    if (collections.length === 0) {
      console.log('   ⚠️  No hay colecciones. Ejecuta "npm run seed" para crear datos iniciales.');
    } else {
      for (const col of collections) {
        const collection = db.collection(col.name);
        const count = await collection.countDocuments();
        console.log(`   • ${col.name}: ${count} documentos`);
      }
    }

    console.log('\n═'.repeat(60));
    console.log('✅ TODO ESTÁ CORRECTO - Puedes ejecutar "npm run seed"');
    console.log('═'.repeat(60));

  } catch (error) {
    console.error('❌ Error de conexión:', error);
    console.log('\n💡 Posibles soluciones:');
    console.log('   1. Verifica que el cluster de MongoDB Atlas esté activo');
    console.log('   2. Confirma que tu IP está en la whitelist (Network Access)');
    console.log('   3. Verifica las credenciales (usuario/contraseña)');
    console.log('   4. Revisa la guía en MONGODB-SETUP.md');
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n🔌 Conexión cerrada\n');
  }
}

testConnection();
