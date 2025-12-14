import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../todo.types";
import { updateTaskStatusAction } from "../actions/update-task-status.action";

export const updateTaskStatusReducer = (builder: ActionReducerMapBuilder<TodoState>) => {
  builder
    .addCase(updateTaskStatusAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateTaskStatusAction.fulfilled, (state) => {
      state.isLoading = false;
      // O estado da lista será atualizado pelo fetchListsAction que será disparado após o sucesso.
      // Para manter a reatividade imediata, faremos uma atualização otimista aqui.
      // No entanto, para seguir o padrão de "sem await" e forçar a reatividade,
      // o ideal é que o componente dispare o fetchListsAction após o dispatch do updateTaskStatusAction.
      // Para este exemplo, vamos apenas gerenciar o loading.
    })
    .addCase(updateTaskStatusAction.rejected, (state) => {
      state.isLoading = false;
    });
};
