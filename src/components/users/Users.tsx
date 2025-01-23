import {FC, useCallback, useEffect, useMemo, useState} from 'react';
import User from '../User';

const Users:FC = () => {
    // @ts-ignore
    const [users, setUsers] = useState([])
    console.log('users')

    const arr:number[] = useMemo(() => {
        return [1, 2, 3, 4, 5, 6, 7]
    }, [])
    const foo = useCallback(() => {
        console.log('test foo')
    }, [])


    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => setUsers(value))
    }, [
    ]);
    return (
        <div>
            Users
            <User foo={foo} arr={arr}/>
        </div>
    );
};

export default Users;