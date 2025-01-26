
import {FC} from 'react';
import { IComment } from '../../interfaces/comment.interface';

type PropsType = {
    comment: IComment,
    trig?:boolean
};

const Comment: FC<PropsType> = ({comment}) => {
    return (
        <div>
            <i>{comment.id} - {comment.body}</i>
        </div>
    );
};

export default Comment;
