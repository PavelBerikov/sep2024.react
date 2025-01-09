import {FC, useEffect, useState} from 'react';
import {IPost } from '../../interfaces/posts.interface';
import { postsService } from '../../services/posts.service';
import Post from '../post/Post';

const Posts:FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        postsService.allPosts().then(posts => setPosts(posts));
    }, []);
    return (
        <div>
            {
                posts.map((post) => <Post post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Posts;