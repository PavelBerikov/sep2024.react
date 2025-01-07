import {FC} from 'react';
import { ITodo } from '../interfaces/todo.interface';

type PropsType = {
    todo:ITodo
};

const TodoComponent: FC<PropsType> = ({todo}) => {
    const {id, userId, todo:title, completed} = todo
    return (
        <div>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
            <div>completed - {JSON.stringify(completed)}</div>
            <hr/>
        </div>
    );
};

export default TodoComponent;