import {FC, useEffect} from 'react';
import Post from '../post/Post';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import {postSliceActions } from '../../redux/slices/postSlices/postSlice';

const Posts:FC = () => {
    const posts = useAppSelector(state => state.postsSlice.posts);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    }, []);
    return (
        <div>
            {
                posts.map((post) => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;