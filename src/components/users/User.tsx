import {FC} from 'react';
import { IUser } from '../../interfaces/users.interface';
import { Link } from 'react-router-dom';

type PropsType = {
    user: IUser
};

const User : FC<PropsType> = ({user}) => {
    return (
        <ul>
            <li><Link state={user} to={`/users/details`}>{user.name}</Link></li>
        </ul>
    );
};

export default User;