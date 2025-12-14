import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListsService } from "../services/fetch-lists.service";
import { TodoList } from "@/types/todo";

export const fetchListsAction = createAsyncThunk<TodoList[]>(
  "todo/fetchLists",
  async (_, { rejectWithValue }) => {
    try {
      const lists = await fetchListsService();
      return lists;
    } catch (error) {
      // O erro será capturado pelo createListenerMiddleware
      return rejectWithValue(error);
    }
  }
);
