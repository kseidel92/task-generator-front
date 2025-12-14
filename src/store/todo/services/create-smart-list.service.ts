import { apiService } from "@/services/api";
import { TodoList, CreateListPayload } from "@/types/todo";

export const createSmartListService = async (payload: CreateListPayload): Promise<TodoList> => {
  return apiService.createList(payload);
};
