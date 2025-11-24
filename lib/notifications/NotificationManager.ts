import { Notification } from './NotificationFactory';

type NotificationListener = (notifications: Notification[]) => void;

export class NotificationManager {
  private static instance: NotificationManager;
  private notifications: Notification[] = [];
  private listeners: Set<NotificationListener> = new Set();
  private maxNotifications = 5;

  private constructor() {}

  static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  subscribe(listener: NotificationListener): () => void {
    this.listeners.add(listener);
    listener(this.notifications);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener([...this.notifications]));
  }

  add(notification: Notification): void {
    this.notifications = [notification, ...this.notifications].slice(
      0,
      this.maxNotifications
    );

    if (notification.autoHideDuration) {
      setTimeout(() => {
        this.remove(notification.id);
      }, notification.autoHideDuration);
    }

    this.notify();
  }

  remove(id: string): void {
    this.notifications = this.notifications.filter((n) => n.id !== id);
    this.notify();
  }

  clear(): void {
    this.notifications = [];
    this.notify();
  }

  clearByCategory(category: string): void {
    this.notifications = this.notifications.filter((n) => n.category !== category);
    this.notify();
  }

  getAll(): Notification[] {
    return [...this.notifications];
  }

  getByCategory(category: string): Notification[] {
    return this.notifications.filter((n) => n.category === category);
  }

  setMaxNotifications(max: number): void {
    this.maxNotifications = max;
    if (this.notifications.length > max) {
      this.notifications = this.notifications.slice(0, max);
      this.notify();
    }
  }
}

export const notificationManager = NotificationManager.getInstance();
