export type NotificationType = "success" | "error" | "info" | "warning";

export interface NotificationState {
  message: string | null;
  type: NotificationType;
  open: boolean;
}
