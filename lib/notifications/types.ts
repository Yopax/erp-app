export enum NotificationSeverity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

export enum NotificationCategory {
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  CALCULATION = 'calculation',
  SYSTEM = 'system',
  BUSINESS = 'business',
  NETWORK = 'network',
}

export interface INotification {
  id: string;
  severity: NotificationSeverity;
  category: NotificationCategory;
  title: string;
  message: string;
  timestamp: Date;
  dismissible: boolean;
  autoHideDuration?: number;
  actions?: NotificationAction[];
  metadata?: Record<string, unknown>;
}

export interface NotificationAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

export interface NotificationConfig {
  severity: NotificationSeverity;
  category: NotificationCategory;
  title: string;
  message: string;
  dismissible?: boolean;
  autoHideDuration?: number;
  actions?: NotificationAction[];
  metadata?: Record<string, unknown>;
}
