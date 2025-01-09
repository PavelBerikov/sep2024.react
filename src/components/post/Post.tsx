import {FC} from 'react';
import { IPost } from '../../interfaces/posts.interface';

type PropsType = {
    post: IPost
};

const Post: FC<PropsType> = ({post}) => {
    const {title, id, body} = post;
    return (
        <div>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;