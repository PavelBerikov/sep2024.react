import {FC} from 'react';
import { useHomework } from '../../hooks/useHomework';
import { IPost } from '../../interfaces/posts.interface';
import Post from '../post/Post';

const Posts:FC = () => {
    const posts:IPost[] | null = useHomework<IPost[]>('posts');
    return (
        <div>
            <h1>Posts</h1>
            {
                posts&&
                posts.map(post => <Post key={post.id} post={post}/>)
            }

        </div>
    );
};

export default Posts;