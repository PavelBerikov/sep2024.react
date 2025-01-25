import {FC, useEffect} from 'react';
import { useAppSelector, userSliceActions } from '../main';
import { useDispatch } from 'react-redux';

const UsersPage:FC = () => {
    const {usersSlice} = useAppSelector(state => state);
    const dispatch = useDispatch();
    console.log(usersSlice)
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
                dispatch(userSliceActions.loadUsers(value));
            })
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