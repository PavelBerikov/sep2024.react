import { ITodoResponse } from "../interfaces/todo.interface"

export const getTodos =async ():Promise<ITodoResponse>=>{
    const todos = await fetch(import.meta.env.VITE_API_URL).then(res => res.json())
    return todos
}