import {FC, useEffect, useState} from 'react';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import User from '../user/User';
import Carts from '../carts/Carts';

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [trig, setTrig] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);

    useEffect(() => {
        UserService.allUsers().then(value => setUsers(value))
        }, []);

    return (
        <div>
            {
                trig && <Carts id={id} />
            }
            {
                users.map((user:IUser, index) => <User setId={setId} setTriger={setTrig} key={index} user={user}/>)
            }

        </div>
    );
};

export default Users;