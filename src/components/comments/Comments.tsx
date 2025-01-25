import {FC, useEffect} from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { commentSliceActions } from '../../redux/slices/commentSlice/commentSlice';
import Comment from '../comment/Comment'

const Comments:FC = () => {
    const {commentsSlice} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentSliceActions.loadComments());
    }, []);
    return (
        <div>
            {
                commentsSlice.comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }
        </div>
    );
};

export default Comments;