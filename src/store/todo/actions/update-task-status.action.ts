import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateTaskStatusService } from "../services/update-task-status.service";
import { UpdateTaskPayload } from "@/types/todo";

export const updateTaskStatusAction = createAsyncThunk<
  void,
  { listId: string; taskIndex: number; isCompleted: boolean }
>("todo/updateTaskStatus", async ({ listId, taskIndex, isCompleted }, { rejectWithValue }) => {
  try {
    const payload: UpdateTaskPayload = { isCompleted };
    await updateTaskStatusService(listId, taskIndex, payload);
    // Não retorna nada, mas o listener de sucesso pode ser acionado
  } catch (error) {
    return rejectWithValue(error);
  }
});
