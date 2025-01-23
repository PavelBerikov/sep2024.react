import {FC} from 'react';
import { IPost } from '../../interfaces/posts.interface';

type PropsType = {
    post: IPost
};

const Post: FC<PropsType> = ({post}) => {
    return (
        <div>
            <div>{post.id} - {post.title}</div>
        </div>
    );
};

export default Post;