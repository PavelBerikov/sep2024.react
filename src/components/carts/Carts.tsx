import {FC, useEffect, useState} from 'react';
import { ICart } from '../../interfaces/carts.interface';
import { cartService } from '../../services/cart.service';
import Cart from '../Cart/Cart';
import { useLocation } from 'react-router-dom';
import { IUser } from '../../interfaces/user.interface';

const Carts: FC = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    const {state} = useLocation();
    const user = state as IUser
    useEffect(() => {
         cartService.getAllCarts().then(value => setCarts(value.filter(cart => cart.userId === user.id)));

    }, []);
    return (
        <div>
            {
                carts.map((cart: ICart) => <Cart key={cart.id} cart={cart} />)
            }
        </div>
    );
};

export default Carts;