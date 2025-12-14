import { apiService } from "@/services/api";
import { TodoList } from "@/types/todo";

export const fetchListsService = async (): Promise<TodoList[]> => {
  return apiService.getLists();
};
