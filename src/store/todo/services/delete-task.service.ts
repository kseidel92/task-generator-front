import { apiService } from "@/services/api";

export const deleteTaskService = async (listId: string, taskIndex: number): Promise<void> => {
  return apiService.deleteTask(listId, taskIndex);
};
