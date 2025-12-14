import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTaskService } from "../services/delete-task.service";

export const deleteTaskAction = createAsyncThunk<void, { listId: string; taskIndex: number }>(
  "todo/deleteTask",
  async ({ listId, taskIndex }, { rejectWithValue }) => {
    try {
      await deleteTaskService(listId, taskIndex);
      // Não retorna nada, mas o listener de sucesso pode ser acionado
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
