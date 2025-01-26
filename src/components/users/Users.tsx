import {FC} from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import User from '../user/User';

const Users:FC = () => {
    const users = useAppSelector(state => state.usersSlice.users);
    return (
        <div>
            <div>{
                users.map((user) =><User user={user} key={user.id}/>)}
            </div>
        </div>
    );
};

export default Users;