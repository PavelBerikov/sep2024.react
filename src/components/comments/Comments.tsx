import {FC} from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import Comment from '../comment/Comment'

const Comments:FC = () => {
    const comments = useAppSelector(state => state.commentsSlice.comments);
    console.log(comments);
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default Comments;