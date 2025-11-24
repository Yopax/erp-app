import {
  INotification,
  NotificationSeverity,
  NotificationCategory,
  NotificationConfig,
} from './types';

export abstract class Notification implements INotification {
  id: string;
  severity: NotificationSeverity;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: Date;
  dismissible: boolean;
  autoHideDuration?: number;
  actions?: Array<{ label: string; onClick: () => void; primary?: boolean }>;
  metadata?: Record<string, unknown>;

  constructor(config: NotificationConfig) {
    this.id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this.severity = config.severity;
    this.category = config.category;
    this.title = config.title;
    this.message = config.message;
    this.timestamp = new Date();
    this.dismissible = config.dismissible ?? true;
    this.autoHideDuration = config.autoHideDuration;
    this.actions = config.actions;
    this.metadata = config.metadata;
  }

  abstract getIcon(): string;
  abstract getColorScheme(): {
    container: string;
    icon: string;
    text: string;
    border: string;
  };
}

class ErrorNotification extends Notification {
  constructor(config: Omit<NotificationConfig, 'severity'>) {
    super({ ...config, severity: NotificationSeverity.ERROR });
    this.autoHideDuration = config.autoHideDuration ?? undefined;
  }

  getIcon(): string {
    return 'error';
  }

  getColorScheme() {
    return {
      container: 'bg-white',
      icon: 'text-[#ff3363]',
      text: 'text-[#ff3363]',
      border: 'border-[#ff3363]',
    };
  }
}

class WarningNotification extends Notification {
  constructor(config: Omit<NotificationConfig, 'severity'>) {
    super({ ...config, severity: NotificationSeverity.WARNING });
    this.autoHideDuration = config.autoHideDuration ?? 8000;
  }

  getIcon(): string {
    return 'warning';
  }

  getColorScheme() {
    return {
      container: 'bg-amber-50',
      icon: 'text-amber-500',
      text: 'text-amber-800',
      border: 'border-amber-500',
    };
  }
}

class InfoNotification extends Notification {
  constructor(config: Omit<NotificationConfig, 'severity'>) {
    super({ ...config, severity: NotificationSeverity.INFO });
    this.autoHideDuration = config.autoHideDuration ?? 5000;
  }

  getIcon(): string {
    return 'info';
  }

  getColorScheme() {
    return {
      container: 'bg-blue-50',
      icon: 'text-blue-500',
      text: 'text-blue-800',
      border: 'border-blue-500',
    };
  }
}

class SuccessNotification extends Notification {
  constructor(config: Omit<NotificationConfig, 'severity'>) {
    super({ ...config, severity: NotificationSeverity.SUCCESS });
    this.autoHideDuration = config.autoHideDuration ?? 4000;
  }

  getIcon(): string {
    return 'success';
  }

  getColorScheme() {
    return {
      container: 'bg-green-50',
      icon: 'text-green-500',
      text: 'text-green-800',
      border: 'border-green-500',
    };
  }
}

export class NotificationFactory {
  private static severityMap = {
    [NotificationSeverity.ERROR]: ErrorNotification,
    [NotificationSeverity.WARNING]: WarningNotification,
    [NotificationSeverity.INFO]: InfoNotification,
    [NotificationSeverity.SUCCESS]: SuccessNotification,
  };

  static create(config: NotificationConfig): Notification {
    const NotificationClass = this.severityMap[config.severity];
    
    if (!NotificationClass) {
      throw new Error(`Invalid notification severity: ${config.severity}`);
    }

    return new NotificationClass(config);
  }

  static createError(
    message: string,
    category: NotificationCategory = NotificationCategory.SYSTEM,
    options?: Partial<NotificationConfig>
  ): Notification {
    return this.create({
      severity: NotificationSeverity.ERROR,
      category,
      title: options?.title || 'Error',
      message,
      ...options,
    });
  }

  static createWarning(
    message: string,
    category: NotificationCategory = NotificationCategory.SYSTEM,
    options?: Partial<NotificationConfig>
  ): Notification {
    return this.create({
      severity: NotificationSeverity.WARNING,
      category,
      title: options?.title || 'Advertencia',
      message,
      ...options,
    });
  }

  static createInfo(
    message: string,
    category: NotificationCategory = NotificationCategory.SYSTEM,
    options?: Partial<NotificationConfig>
  ): Notification {
    return this.create({
      severity: NotificationSeverity.INFO,
      category,
      title: options?.title || 'Información',
      message,
      ...options,
    });
  }

  static createSuccess(
    message: string,
    category: NotificationCategory = NotificationCategory.SYSTEM,
    options?: Partial<NotificationConfig>
  ): Notification {
    return this.create({
      severity: NotificationSeverity.SUCCESS,
      category,
      title: options?.title || 'Éxito',
      message,
      ...options,
    });
  }

  static createValidationError(message: string, field?: string): Notification {
    return this.createError(message, NotificationCategory.VALIDATION, {
      title: 'Error de Validación',
      metadata: { field },
      dismissible: true,
    });
  }

  static createAuthenticationError(message: string): Notification {
    return this.createError(message, NotificationCategory.AUTHENTICATION, {
      title: 'Error de Autenticación',
      dismissible: false,
    });
  }

  static createCalculationError(
    message: string,
    calculationType: string,
    details?: Record<string, unknown>
  ): Notification {
    return this.createError(message, NotificationCategory.CALCULATION, {
      title: `Error en ${calculationType}`,
      metadata: { calculationType, ...details },
    });
  }

  static createNetworkError(message: string): Notification {
    return this.createError(message, NotificationCategory.NETWORK, {
      title: 'Error de Conexión',
      actions: [
        {
          label: 'Reintentar',
          onClick: () => window.location.reload(),
          primary: true,
        },
      ],
    });
  }
}
