import { NotificationFactory } from '@/lib/notifications/NotificationFactory';
import { notificationManager } from '@/lib/notifications/NotificationManager';
import { NotificationCategory } from '@/lib/notifications/types';

export const AuthNotifications = {
  invalidCredentials: () => {
    const notification = NotificationFactory.createAuthenticationError(
      'Usuario o contraseña incorrectos'
    );
    notificationManager.add(notification);
  },

  sessionExpired: () => {
    const notification = NotificationFactory.createWarning(
      'Tu sesión ha expirado. Por favor, inicia sesión nuevamente.',
      NotificationCategory.AUTHENTICATION,
      {
        title: 'Sesión Expirada',
        dismissible: false,
      }
    );
    notificationManager.add(notification);
  },

  loginSuccess: (userName: string) => {
    const notification = NotificationFactory.createSuccess(
      `Bienvenido, ${userName}`,
      NotificationCategory.AUTHENTICATION,
      {
        title: 'Inicio de Sesión Exitoso',
        autoHideDuration: 3000,
      }
    );
    notificationManager.add(notification);
  },

  networkError: () => {
    const notification = NotificationFactory.createNetworkError(
      'No se pudo conectar con el servidor. Verifica tu conexión a internet.'
    );
    notificationManager.add(notification);
  },

  accountLocked: () => {
    const notification = NotificationFactory.createError(
      'Tu cuenta ha sido bloqueada por múltiples intentos fallidos. Contacta al administrador.',
      NotificationCategory.AUTHENTICATION,
      {
        title: 'Cuenta Bloqueada',
        dismissible: false,
      }
    );
    notificationManager.add(notification);
  },
};

export const ValidationNotifications = {
  invalidEmail: () => {
    const notification = NotificationFactory.createValidationError(
      'Formato de correo electrónico inválido',
      'email'
    );
    notificationManager.add(notification);
  },

  requiredField: (fieldName: string) => {
    const notification = NotificationFactory.createValidationError(
      `El campo "${fieldName}" es obligatorio`,
      fieldName
    );
    notificationManager.add(notification);
  },

  passwordTooShort: (minLength: number) => {
    const notification = NotificationFactory.createValidationError(
      `La contraseña debe tener al menos ${minLength} caracteres`,
      'password'
    );
    notificationManager.add(notification);
  },

  passwordMismatch: () => {
    const notification = NotificationFactory.createValidationError(
      'Las contraseñas no coinciden',
      'confirmPassword'
    );
    notificationManager.add(notification);
  },
};

export const CalculationNotifications = {
  budgetOverflow: (amount: number, limit: number) => {
    const notification = NotificationFactory.createWarning(
      `El presupuesto de S/ ${amount.toLocaleString()} excede el límite de S/ ${limit.toLocaleString()}`,
      NotificationCategory.CALCULATION,
      {
        title: 'Advertencia de Presupuesto',
        metadata: { amount, limit },
      }
    );
    notificationManager.add(notification);
  },

  invalidQuantity: (field: string) => {
    const notification = NotificationFactory.createCalculationError(
      `La cantidad ingresada en "${field}" no es válida`,
      'Validación de Cantidad',
      { field }
    );
    notificationManager.add(notification);
  },

  calculationSuccess: (message: string) => {
    const notification = NotificationFactory.createSuccess(
      message,
      NotificationCategory.CALCULATION,
      {
        title: 'Cálculo Completado',
      }
    );
    notificationManager.add(notification);
  },
};

export const SystemNotifications = {
  saveSuccess: (entityName: string) => {
    const notification = NotificationFactory.createSuccess(
      `${entityName} guardado exitosamente`,
      NotificationCategory.SYSTEM
    );
    notificationManager.add(notification);
  },

  deleteSuccess: (entityName: string) => {
    const notification = NotificationFactory.createSuccess(
      `${entityName} eliminado exitosamente`,
      NotificationCategory.SYSTEM
    );
    notificationManager.add(notification);
  },

  updateSuccess: (entityName: string) => {
    const notification = NotificationFactory.createSuccess(
      `${entityName} actualizado exitosamente`,
      NotificationCategory.SYSTEM
    );
    notificationManager.add(notification);
  },

  operationError: (operation: string, details?: string) => {
    const notification = NotificationFactory.createError(
      details || `Error al ejecutar la operación: ${operation}`,
      NotificationCategory.SYSTEM,
      {
        title: 'Error de Sistema',
      }
    );
    notificationManager.add(notification);
  },

  permissionDenied: () => {
    const notification = NotificationFactory.createError(
      'No tienes permisos para realizar esta acción',
      NotificationCategory.SYSTEM,
      {
        title: 'Acceso Denegado',
      }
    );
    notificationManager.add(notification);
  },
};
