# Sistema de Notificaciones y Alertas - ERP BIM Perú

## Arquitectura

Este sistema implementa el **patrón Factory Method** para crear notificaciones de manera escalable y mantenible.

## Componentes

### 1. **NotificationFactory** (Factory Method Pattern)
Crea diferentes tipos de notificaciones basadas en severidad:
- `ErrorNotification`
- `WarningNotification`
- `InfoNotification`
- `SuccessNotification`

### 2. **NotificationManager** (Singleton Pattern)
Gestiona el estado global de notificaciones:
- Agregar/remover notificaciones
- Límite de notificaciones simultáneas
- Auto-dismiss configurable
- Filtrado por categoría

### 3. **Categorías de Notificaciones**
- `VALIDATION`: Errores de validación de formularios
- `AUTHENTICATION`: Autenticación y sesión
- `CALCULATION`: Errores/avisos en cálculos (presupuestos, metrados, etc.)
- `SYSTEM`: Operaciones del sistema
- `BUSINESS`: Reglas de negocio
- `NETWORK`: Problemas de conexión

## Uso

### Ejemplo Básico
```typescript
import { useNotifications } from '@/hooks/useNotifications';

function MyComponent() {
  const { showError, showSuccess } = useNotifications();
  
  const handleSave = async () => {
    try {
      // ... lógica
      showSuccess('Guardado exitosamente');
    } catch (error) {
      showError('Error al guardar');
    }
  };
}
```

### Notificaciones Predefinidas
```typescript
import { AuthNotifications, ValidationNotifications, CalculationNotifications } from '@/lib/notifications/presets';

// Autenticación
AuthNotifications.invalidCredentials();
AuthNotifications.sessionExpired();

// Validación
ValidationNotifications.invalidEmail();
ValidationNotifications.requiredField('Nombre');

// Cálculos
CalculationNotifications.budgetOverflow(150000, 100000);
CalculationNotifications.invalidQuantity('Metrado de concreto');
```

### Notificaciones Personalizadas
```typescript
import { NotificationFactory } from '@/lib/notifications';
import { notificationManager } from '@/lib/notifications';
import { NotificationCategory } from '@/lib/notifications/types';

const notification = NotificationFactory.createError(
  'Error al procesar el presupuesto',
  NotificationCategory.CALCULATION,
  {
    title: 'Error de Cálculo',
    dismissible: true,
    actions: [
      {
        label: 'Ver Detalles',
        onClick: () => console.log('Detalles'),
        primary: true
      }
    ]
  }
);

notificationManager.add(notification);
```

## Ventajas del Patrón Factory

1. **Extensibilidad**: Fácil agregar nuevos tipos de notificaciones
2. **Encapsulación**: Lógica de creación centralizada
3. **Configuración automática**: Auto-dismiss, colores, iconos según tipo
4. **Type Safety**: TypeScript garantiza tipos correctos

## Mejoras Futuras

- Persistencia de notificaciones no vistas
- Notificaciones push con Service Workers
- Integración con sistema de logs
- Dashboard de notificaciones históricas
