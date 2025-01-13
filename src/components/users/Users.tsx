import {FC, useEffect, useState} from 'react';
import Pagination from '../pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import User from '../user/User';
import { apiServices } from '../../services/api.services';
import { IUser } from '../../interfaces/users.interface';

const Users:FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query,_] = useSearchParams();
    const page = query.get('page') || 1;
    const skip = (+page - 1)*10
    useEffect(() => {
       if (+page >= 1){
           apiServices.usersService.getAllUsers(skip)
               .then(value => setUsers(value.users));
       }
    }, [page]);
    return (
        <div>
            {
                users.map((user, index) => <User key={index} user={user} />)
            }
            <Pagination/>
        </div>
    );
};

export default Users;