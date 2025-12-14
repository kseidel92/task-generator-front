import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../todo.types";
import { fetchListsAction } from "../actions/fetch-lists.action";
import { TodoList } from "@/types/todo";

export const fetchListsReducer = (builder: ActionReducerMapBuilder<TodoState>) => {
  builder
    .addCase(fetchListsAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchListsAction.fulfilled, (state, action: { payload: TodoList[] }) => {
      state.isLoading = false;
      state.lists = action.payload;
    })
    .addCase(fetchListsAction.rejected, (state) => {
      state.isLoading = false;
      // O erro será tratado pelo listener, não precisamos de lógica de erro aqui
    });
};
