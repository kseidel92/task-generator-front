export interface Task {
  index: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export interface TodoList {
  id: string;
  prompt: string;
  createdAt: Date;
  tasks: Task[];
}

export interface CreateListPayload {
  prompt: string;
  openRouterApiKey: string;
}

export interface UpdateTaskPayload {
  isCompleted: boolean;
}
