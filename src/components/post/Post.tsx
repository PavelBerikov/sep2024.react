import {FC} from 'react';
import { IPost } from '../../interfaces/post.interface';

type PropsType = {
    post: IPost
};

const Post: FC<PropsType> = ({post}) => {
    return (
        <div>
            {post.id} -- {post.title}
        </div>
    );
};

export default Post;