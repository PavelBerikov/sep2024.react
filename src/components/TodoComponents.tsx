import {FC, useEffect, useState} from 'react';
import { ITodo } from '../interfaces/todo.interface';
import { getTodos } from '../services/todo.service';
import TodoComponent from './TodoComponent';

const TodoComponents: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos().then(value => setTodos(value.todos))
    }, []);
    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodoComponents;