import { fetchListsAction } from "./actions/fetch-lists.action";
import { updateTaskStatusAction } from "./actions/update-task-status.action";
import { deleteTaskAction } from "./actions/delete-task.action";
import { createSmartListAction } from "./actions/create-smart-list.action";
import { listenerMiddleware } from "../middleware";

// Listener para updateTaskStatusAction.fulfilled
listenerMiddleware.startListening({
  actionCreator: updateTaskStatusAction.fulfilled,
  effect: async (action, listenerApi) => {
    // O status da tarefa foi atualizado com sucesso, agora recarrega a lista
    listenerApi.dispatch(fetchListsAction());
  },
});

// Listener para deleteTaskAction.fulfilled
listenerMiddleware.startListening({
  actionCreator: deleteTaskAction.fulfilled,
  effect: async (action, listenerApi) => {
    // A tarefa foi deletada com sucesso, agora recarrega a lista
    listenerApi.dispatch(fetchListsAction());
  },
});

// Listener para createSmartListAction.fulfilled
listenerMiddleware.startListening({
  actionCreator: createSmartListAction.fulfilled,
  effect: async (action, listenerApi) => {
    // A lista inteligente foi criada com sucesso, agora recarrega a lista
    listenerApi.dispatch(fetchListsAction());
  },
});
