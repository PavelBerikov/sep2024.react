import {FC, useEffect} from 'react';
import { login } from '../services/api.services';

const LoginPage:FC = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMin: 1,
        })
    }, []);
    return (
        <div>

        </div>
    );
};

export default LoginPage;