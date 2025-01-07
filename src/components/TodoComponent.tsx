import {FC} from 'react';
import { ITodo } from '../interfaces/todo.interface';

type PropsType = {
    todo:ITodo
};

const TodoComponent: FC<PropsType> = ({todo}) => {
    const {id, userId, title, completed} = todo
    return (
        <div>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
            <div>completed - {completed}</div>
            <hr/>
        </div>
    );
};

export default TodoComponent;