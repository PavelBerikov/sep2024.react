import {FC} from 'react';
import { Link } from 'react-router-dom';

const Menu:FC = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'comments'}>Comments</Link></li>
            <li><Link to={'userInfo'}>User with posts</Link></li>
        </ul>
    );
};

export default Menu;