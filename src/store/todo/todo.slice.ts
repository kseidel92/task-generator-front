import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialTodoState } from "./todo.types";
import { fetchListsReducer } from "./reducers/fetch-lists.reducer";
import { createSmartListReducer } from "./reducers/create-smart-list.reducer";
import { updateTaskStatusReducer } from "./reducers/update-task-status.reducer";
import { deleteTaskReducer } from "./reducers/delete-task.reducer";

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    // Métodos que alteram o state, mas não fazem chamada de API
    setOpenRouterApiKey: (state, action: PayloadAction<string>) => {
      state.openRouterApiKey = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Reducers para chamadas de API
    fetchListsReducer(builder);
    createSmartListReducer(builder);
    updateTaskStatusReducer(builder);
    deleteTaskReducer(builder);
  },
});

export const { setOpenRouterApiKey } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
