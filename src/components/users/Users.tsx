import {FC} from 'react';
import User from '../user/User';
import { IUser } from '../../interfaces/user.interface';
import { useHomework } from '../../hooks/useHomework';

const Users:FC = () => {
    const users:IUser[] | null = useHomework<IUser[]>('users');
    return (
        <div>
            <h1>Users</h1>
            {
                users &&
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;