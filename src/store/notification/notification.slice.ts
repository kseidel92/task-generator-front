import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationState, NotificationType } from "./notification.types";

const initialState: NotificationState = {
  message: null,
  type: "info",
  open: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    // Ação para exibir uma notificação
    showNotification: (
      state,
      action: PayloadAction<{ message: string; type: NotificationType }>
    ) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.open = true;
    },
    // Ação para fechar/limpar a notificação
    clearNotification: (state) => {
      state.message = null;
      state.type = "info";
      state.open = false;
    },
  },
});

export const { showNotification, clearNotification } = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
