import {FC, useEffect, useState} from 'react';
import { authService } from '../../services/api.services';
import { IUserWithTokens } from '../../interfaces/userWithTokens.interface';

const Products:FC = () => {
    const [user, setUser] = useState<IUserWithTokens | null>(null)
    useEffect(() => {
        const login = localStorage.getItem('login');
        if (login){
            console.log(JSON.parse(login));
            authService.userAuth(JSON.parse(login)).then(value => setUser(value));
        }
    }, []);
    return (
        <div>
            {
                user&& <div>{user.accessToken}*****{user.refreshToken}</div>
            }
        </div>
    );
};

export default Products;