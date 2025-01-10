import {FC, useEffect, useState} from 'react';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import User from '../user/User';

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        UserService.allUsers().then(value => setUsers(value))
        }, []);

    return (
        <div>
            {
                users.map((user:IUser) => <User key={user.id} user={user}/>)
            }

        </div>
    );
};

export default Users;