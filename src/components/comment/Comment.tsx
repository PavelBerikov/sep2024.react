
import {FC} from 'react';
import { IComment } from '../../interfaces/comment.interface';

type PropsType = {
    comment: IComment
};

const Comment: FC<PropsType> = ({comment}) => {
    return (
        <div>
            {comment.id} - {comment.body}
        </div>
    );
};

export default Comment;
