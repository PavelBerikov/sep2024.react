import React, {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';

type PropsType = {
    user: IUser,
    setTriger: React.Dispatch<React.SetStateAction<boolean>>
    setId: React.Dispatch<React.SetStateAction<number>>
};

const User: FC<PropsType> = ({user, setTriger, setId}) => {
    const {firstName, id, phone, age} = user;

    return (
        <div>
            <h2 style={{cursor:'pointer'}} onClick={() => {
                setTriger(prev => !prev);
                setId(user.id)
            }}>{id} - {firstName}</h2>
            <h3>Age - {age}</h3>
            <p>phone - {phone}</p>
        </div>
    );
};

export default User;