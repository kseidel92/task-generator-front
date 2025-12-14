import { apiService } from "@/services/api";
import { UpdateTaskPayload } from "@/types/todo";

export const updateTaskStatusService = async (
  listId: string,
  taskIndex: number,
  payload: UpdateTaskPayload
): Promise<void> => {
  return apiService.updateTask(listId, taskIndex, payload);
};
