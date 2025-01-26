import {FC, useEffect, useState} from 'react';
import { IUser } from '../../interfaces/user.interface';
import { IPost } from '../../interfaces/post.interface';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import Post from '../post/Post';

type PropsType = {
    user:IUser
};

const User: FC<PropsType> = ({user}) => {
    const [trig, setTrig] = useState<boolean>(false);
    const [id, setId] = useState<number>(0)
    const [filterPosts, setFilterPosts] = useState<IPost[]>([])
    const posts = useAppSelector(state => state.postsSlice.posts);
    useEffect(() => {
        if (id){
            const filterPosts = posts.filter(post => post.userId === id);
            setFilterPosts(filterPosts);
        }
    }, [id]);
    return (
        <div>
            <h3 style={{cursor: 'pointer'}} onClick={() => {
                setTrig(trig => !trig);
                setId(user.id);
            }}>{user.name}</h3>
            {
                trig &&
                filterPosts.map(post => <Post trig={trig} post={post} key={post.id}/>)


            }
        </div>
    );
};

export default User;