import { createSmartListAction } from "../todo/actions/create-smart-list.action";
import { deleteTaskAction } from "../todo/actions/delete-task.action";
import { updateTaskStatusAction } from "../todo/actions/update-task-status.action";

// Define a interface para a estrutura de mensagens
interface NotificationMessages {
  [baseActionType: string]: {
    success: string;
    error: string;
  };
}

/**
 * Mapeamento de mensagens de notificação para ações assíncronas.
 * A chave deve ser o tipo base da ação (ex: 'todo/createSmartList').
 *
 * Para adicionar uma nova mensagem, basta adicionar uma nova entrada neste objeto.
 */
export const NOTIFICATION_MESSAGES: NotificationMessages = {
  [createSmartListAction.typePrefix]: {
    success: "Lista inteligente criada com sucesso!",
    error: "Falha ao criar a lista inteligente. Verifique sua chave de API ou o prompt.",
  },
  [updateTaskStatusAction.typePrefix]: {
    success: "Status da tarefa atualizado com sucesso!",
    error: "Falha ao atualizar o status da tarefa.",
  },
  [deleteTaskAction.typePrefix]: {
    success: "Tarefa deletada com sucesso!",
    error: "Falha ao deletar a tarefa.",
  },
  // Adicione novas ações aqui
};

// Mensagens padrão
export const DEFAULT_SUCCESS_MESSAGE = "Operação realizada com sucesso.";
export const DEFAULT_ERROR_MESSAGE = "Ocorreu um erro desconhecido na API.";

// Mensagem especial para conclusão de tarefa
export const TASK_COMPLETED_MESSAGE = "Tarefa concluída! Parabéns!";
