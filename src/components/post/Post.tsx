import {FC, useEffect, useState} from 'react';
import { IPost } from '../../interfaces/post.interface';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { IComment } from '../../interfaces/comment.interface';
import Comment from '../comment/Comment'

type PropsType = {
    post: IPost,
    trig?: boolean
};

const Post: FC<PropsType> = ({post}) => {
    const [trig, setTrig] = useState<boolean>(false);
    const [id, setId] = useState<number>(0)
    const [filterComments, setFilterComments] = useState<IComment[]>([]);
    const comments:IComment[] = useAppSelector((state) => state.commentsSlice.comments);
    useEffect(() => {
        if (trig){
            const filterComments:IComment[] = comments.filter(comment => comment.postId === id);
            setFilterComments(filterComments);
        }
    }, [trig, id]);
    return (
        <div style={{cursor: 'pointer'}} onClick={()=>{
            setTrig(trig => !trig)
            setId(post.id)
        }}>
            <div><b>{post.id} - {post.title}</b></div>
            {

                trig&&
                filterComments.map(comment => <Comment trig={trig} key={comment.id} comment={comment} />)

            }

        </div>
    );
};

export default Post;