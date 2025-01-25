import {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';

type PropsType = {
    user:IUser
};

const User: FC<PropsType> = ({user}) => {
    return (
        <div>
            {user.id} - {user.name}
        </div>
    );
};

export default User;