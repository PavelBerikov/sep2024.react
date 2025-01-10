import {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';
import {Link} from 'react-router-dom';

type PropsType = {
    user: IUser
};

const User: FC<PropsType> = ({user}) => {
    const {firstName, id, phone, age} = user;
    return (
        <div>
            <h2><Link state={user} to={'/users/carts'}>{id} - {firstName}</Link></h2>
            <h3>Age - {age}</h3>
            <p>phone - {phone}</p>
        </div>
    );
};

export default User;