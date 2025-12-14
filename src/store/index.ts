import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/todo.slice";
import { listenerMiddleware } from "./middleware";
import { notificationReducer } from "./notification/notification.slice";

// O middleware de listener é criado em ./middleware.ts

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    notification: notificationReducer,
  },
  // Adiciona o middleware de listener ao store
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Tipos para o RootState e AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Importa os listeners para inicializá-los (deve ser o último)
import "./notification/notification.listener";
import "./todo/todo.listener";
