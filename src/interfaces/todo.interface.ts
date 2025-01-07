export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface ITodoResponse {
    todos: ITodo[]
}