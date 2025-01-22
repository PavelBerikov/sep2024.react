import {FC, useEffect} from 'react';
import { login } from '../services/api.services';

const LoginPage:FC = () => {
    // страница загружается, срабатывает юзЕффект(вызывает функцию логин и передает в нее объект для логинации)
    useEffect(() => {
           login({
               username: 'emilys',
               password: 'emilyspass',
               expiresInMines: 1 // optional, defaults to 60
           })
    }, []);
    return (
        <div>
            LoginPage
        </div>
    );
};

export default LoginPage;