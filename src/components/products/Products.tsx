import {FC, useEffect, useState} from 'react';
import { IProduct } from '../../interfaces/products.interface';
import { authService } from '../../services/api.services';
import { IUserLogin } from '../../interfaces/userLogin.interface';

const Products:FC = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        const login = localStorage.getItem('login');
        if (login){
            authService.userAuth(JSON.parse(login)).then(value => console.log(value));
        }
    }, []);
    return (
        <div>

        </div>
    );
};

export default Products;