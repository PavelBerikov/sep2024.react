import {FC, useEffect} from 'react';
import { userSliceActions } from '../redux/slices/userSlices/userSlice';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';

const UsersPage:FC = () => {
    const {usersSlice} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);
    return (
        <div>
            {
                usersSlice.users.map((user) =><div key={user.id}>{user.id} - {user.name}</div> )
            }
        </div>
    );
};

export default UsersPage;