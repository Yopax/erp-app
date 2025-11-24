import { useCallback } from 'react';
import { NotificationFactory } from '@/lib/notifications/NotificationFactory';
import { notificationManager } from '@/lib/notifications/NotificationManager';
import { NotificationCategory } from '@/lib/notifications/types';

export function useNotifications() {
  const showError = useCallback(
    (message: string, category: NotificationCategory = NotificationCategory.SYSTEM, options?: Parameters<typeof NotificationFactory.createError>[2]) => {
      const notification = NotificationFactory.createError(message, category, options);
      notificationManager.add(notification);
    },
    []
  );

  const showWarning = useCallback(
    (message: string, category: NotificationCategory = NotificationCategory.SYSTEM, options?: Parameters<typeof NotificationFactory.createWarning>[2]) => {
      const notification = NotificationFactory.createWarning(message, category, options);
      notificationManager.add(notification);
    },
    []
  );

  const showInfo = useCallback(
    (message: string, category: NotificationCategory = NotificationCategory.SYSTEM, options?: Parameters<typeof NotificationFactory.createInfo>[2]) => {
      const notification = NotificationFactory.createInfo(message, category, options);
      notificationManager.add(notification);
    },
    []
  );

  const showSuccess = useCallback(
    (message: string, category: NotificationCategory = NotificationCategory.SYSTEM, options?: Parameters<typeof NotificationFactory.createSuccess>[2]) => {
      const notification = NotificationFactory.createSuccess(message, category, options);
      notificationManager.add(notification);
    },
    []
  );

  const showValidationError = useCallback((message: string, field?: string) => {
    const notification = NotificationFactory.createValidationError(message, field);
    notificationManager.add(notification);
  }, []);

  const showAuthError = useCallback((message: string) => {
    const notification = NotificationFactory.createAuthenticationError(message);
    notificationManager.add(notification);
  }, []);

  const showCalculationError = useCallback(
    (message: string, calculationType: string, details?: Record<string, unknown>) => {
      const notification = NotificationFactory.createCalculationError(
        message,
        calculationType,
        details
      );
      notificationManager.add(notification);
    },
    []
  );

  const showNetworkError = useCallback((message: string) => {
    const notification = NotificationFactory.createNetworkError(message);
    notificationManager.add(notification);
  }, []);

  const clearAll = useCallback(() => {
    notificationManager.clear();
  }, []);

  const clearByCategory = useCallback((category: string) => {
    notificationManager.clearByCategory(category);
  }, []);

  return {
    showError,
    showWarning,
    showInfo,
    showSuccess,
    showValidationError,
    showAuthError,
    showCalculationError,
    showNetworkError,
    clearAll,
    clearByCategory,
  };
}
