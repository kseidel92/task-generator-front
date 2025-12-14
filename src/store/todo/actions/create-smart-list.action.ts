import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSmartListService } from "../services/create-smart-list.service";
import { TodoList } from "@/types/todo";

export const createSmartListAction = createAsyncThunk<
  TodoList,
  { prompt: string; openRouterApiKey: string }
>("todo/createSmartList", async (payload, { rejectWithValue }) => {
  try {
    const newList = await createSmartListService(payload);
    return newList;
  } catch (error) {
    return rejectWithValue(error);
  }
});
