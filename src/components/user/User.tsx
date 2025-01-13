import {FC} from 'react';
import { IUser } from '../../interfaces/users.interface';

type PropsType = {
    user: IUser
};

const User: FC<PropsType> = ({user}) => {
    const {id, firstName, email} = user
    return (
        <div>
            <div>{id} - {firstName}</div>
            <div>{email}</div>
            <hr/>
        </div>
    );
};

export default User;