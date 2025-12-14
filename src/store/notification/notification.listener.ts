import { updateTaskStatusAction } from "../todo/actions/update-task-status.action";
import { createSmartListAction } from "../todo/actions/create-smart-list.action";
import { deleteTaskAction } from "../todo/actions/delete-task.action";
import { listenerMiddleware } from "../middleware";
import { showNotification } from "./notification.slice";
import {
  NOTIFICATION_MESSAGES,
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
  TASK_COMPLETED_MESSAGE,
} from "./notification.messages";

// Array de todas as ações assíncronas que geram notificação
const allAsyncActions = [createSmartListAction, updateTaskStatusAction, deleteTaskAction];

// Itera sobre todas as ações assíncronas para criar listeners individuais
allAsyncActions.forEach((action) => {
  const baseActionType = action.typePrefix;
  const messages = NOTIFICATION_MESSAGES[baseActionType];

  // 1. Listener para capturar ações rejeitadas (erros de API)
  listenerMiddleware.startListening({
    actionCreator: action.rejected,
    effect: async (rejectedAction, listenerApi) => {
      let errorMessage = DEFAULT_ERROR_MESSAGE;

      if (messages) {
        // Usa a mensagem específica configurada
        errorMessage = messages.error;
      } else if (rejectedAction.error.message) {
        // Fallback para a mensagem de erro da action, se existir
        errorMessage = rejectedAction.error.message;
      }

      listenerApi.dispatch(
        showNotification({
          message: errorMessage,
          type: "error",
        })
      );
    },
  });

  // 2. Listener para capturar ações de sucesso (fulfilled)
  listenerMiddleware.startListening({
    actionCreator: action.fulfilled,
    effect: async (fulfilledAction: any, listenerApi) => {
      let successMessage = messages ? messages.success : DEFAULT_SUCCESS_MESSAGE;

      // Lógica especial para a ação de atualização de status de tarefa
      if (fulfilledAction.type === updateTaskStatusAction.fulfilled.type) {
        // O tipo da action.meta.arg é inferido corretamente pelo actionCreator: updateTaskStatusAction.fulfilled
        const { isCompleted } = fulfilledAction.meta.arg as {
          listId: string;
          taskIndex: number;
          isCompleted: boolean;
        };

        if (isCompleted) {
          // Sobrescreve a mensagem de sucesso para o caso de conclusão
          successMessage = TASK_COMPLETED_MESSAGE;
        }
      }

      // Dispara a ação para mostrar a notificação de sucesso
      listenerApi.dispatch(
        showNotification({
          message: successMessage,
          type: "success",
        })
      );
    },
  });
});
