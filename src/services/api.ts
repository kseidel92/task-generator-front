import { TodoList, CreateListPayload, UpdateTaskPayload } from "@/types/todo";

const BASE_URL = "http://localhost:3000";

export const apiService = {
  /**
   * 1. Criar Nova Lista (Gerar Tarefas)
   * Método: POST
   * URL: http://localhost:3000/lists
   */
  createList: async (payload: CreateListPayload): Promise<TodoList> => {
    const response = await fetch(`${BASE_URL}/lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);

      return Promise.reject({
        message: error?.message ?? "Falha ao criar a lista de tarefas com IA.",
        status: response.status,
      });
    }

    return response.json();
  },

  /**
   * 2. Listar Todas as Listas
   * Método: GET
   * URL: http://localhost:3000/lists
   */
  getLists: async (): Promise<TodoList[]> => {
    const response = await fetch(`${BASE_URL}/lists`);


    if (!response.ok) {
      const error = await response.json().catch(() => null);

      return Promise.reject({
        message: error?.message ?? "Falha ao buscar as listas de tarefas",
        status: response.status,
      });
    }



    return response.json();
  },

  /**
   * 3. Atualizar Status de uma Tarefa
   * Método: PATCH
   * URL: http://localhost:3000/lists/:listId/tasks/:taskIndex
   */
  updateTask: async (
    listId: string,
    taskIndex: number,
    payload: UpdateTaskPayload
  ): Promise<void> => {
    const response = await fetch(`${BASE_URL}/lists/${listId}/tasks/${taskIndex}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);

      return Promise.reject({
        message: error?.message ?? "Falha ao atualizar o status da tarefa.",
        status: response.status,
      });
    }

  },

  /**
   * 4. Deletar uma Tarefa
   * Método: DELETE
   * URL: http://localhost:3000/lists/:listId/tasks/:taskIndex
   */
  deleteTask: async (listId: string, taskIndex: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/lists/${listId}/tasks/${taskIndex}`, {
      method: "DELETE",
    });


    if (!response.ok) {
      const error = await response.json().catch(() => null);

      return Promise.reject({
        message: error?.message ?? "Falha ao deletar a tarefa.",
        status: response.status,
      });
    }

  },
};
