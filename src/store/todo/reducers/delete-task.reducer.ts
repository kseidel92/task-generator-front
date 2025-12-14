import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../todo.types";
import { deleteTaskAction } from "../actions/delete-task.action";

export const deleteTaskReducer = (builder: ActionReducerMapBuilder<TodoState>) => {
  builder
    .addCase(deleteTaskAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteTaskAction.fulfilled, (state) => {
      state.isLoading = false;
      // O estado da lista será atualizado pelo fetchListsAction que será disparado após o dispatch do deleteTaskAction.
    })
    .addCase(deleteTaskAction.rejected, (state) => {
      state.isLoading = false;
    });
};
