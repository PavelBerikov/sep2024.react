import {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';

type PropsType = {
    user: IUser
};

const User: FC<PropsType> = ({user}) => {
    return (
        <div>
            <div style={{fontSize: '20px'}}>{user.id} - {user.name}</div>

        </div>
    );
};

export default User;