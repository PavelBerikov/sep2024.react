import {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';

type PropsType = {
    user: IUser
};

const User: FC<PropsType> = ({user}) => {
    const {firstName, id, phone, age} = user;
    return (
        <div style={{borderRadius: '10px', border: '1px solid black'}}>
            <h2>{id} - {firstName}</h2>
            <h3>Age - {age}</h3>
            <p>phone - {phone}</p>
        </div>
    );
};

export default User;