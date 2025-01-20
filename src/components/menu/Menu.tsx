import {FC} from 'react';
import { Link } from 'react-router-dom';

const Menu:FC = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/login/resources'}>Resources</Link></li>
        </ul>
    );
};

export default Menu;