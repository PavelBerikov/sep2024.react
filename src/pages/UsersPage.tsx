import {FC} from 'react';
import Users from '../components/users/Users';
import Carts from '../components/carts/Carts';

const UsersPage: FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Users/>
            <Carts/>
        </div>
    );
};

export default UsersPage;