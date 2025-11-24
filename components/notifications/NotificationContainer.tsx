'use client';

import React, { useEffect, useState } from 'react';
import { notificationManager } from '@/lib/notifications/NotificationManager';
import { Notification } from '@/lib/notifications/NotificationFactory';
import NotificationItem from '@/components/notifications/NotificationItem';

interface NotificationContainerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center';
}

const positionClasses = {
  'top-right': 'top-4 left-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
};

export default function NotificationContainer({
  position = 'top-right',
}: NotificationContainerProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const unsubscribe = notificationManager.subscribe(setNotifications);
    return unsubscribe;
  }, []);

  if (notifications.length === 0) return null;

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none`}
    >
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onDismiss={() => notificationManager.remove(notification.id)}
        />
      ))}
    </div>
  );
}
