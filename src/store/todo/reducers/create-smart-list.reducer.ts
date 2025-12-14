import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../todo.types";
import { createSmartListAction } from "../actions/create-smart-list.action";
import { TodoList } from "@/types/todo";

export const createSmartListReducer = (builder: ActionReducerMapBuilder<TodoState>) => {
  builder
    .addCase(createSmartListAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createSmartListAction.fulfilled, (state, action: { payload: TodoList }) => {
      state.isLoading = false;
      state.lists.unshift(action.payload); // Adiciona a nova lista no início
    })
    .addCase(createSmartListAction.rejected, (state) => {
      state.isLoading = false;
    });
};
