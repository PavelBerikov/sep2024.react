import {FC} from 'react';
import { IUser } from '../../interfaces/user.interface';

type PropsType = {
    user: IUser,
    setTriger: React.Dispatch<React.SetStateAction<boolean>>
};

const User: FC<PropsType> = ({user, setTriger}) => {
    const {firstName, id, phone, age} = user;

    return (
        <div onClick={() => {
            setTriger(prev => !prev);
        }}>
            <h2>{id} - {firstName}</h2>
            <h3>Age - {age}</h3>
            <p>phone - {phone}</p>
        </div>
    );
};

export default User;