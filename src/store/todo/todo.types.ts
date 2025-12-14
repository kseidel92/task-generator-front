import { TodoList } from "@/types/todo";

export interface TodoState {
  lists: TodoList[];
  openRouterApiKey: string;
  isLoading: boolean;
}

export const initialTodoState: TodoState = {
  lists: [],
  openRouterApiKey: "",
  isLoading: false,
};
