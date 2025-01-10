import {FC, useEffect, useState} from 'react';
import { ICart } from '../../interfaces/carts.interface';
import { cartService } from '../../services/cart.service';
import Cart from '../Cart/Cart';
import { useLocation } from 'react-router-dom';

const Carts: FC = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    const {state} = useLocation()
    console.log(state.id)

    useEffect(() => {
         cartService.getAllCarts().then(value => setCarts(value.filter(cart => cart.userId === state.id)))
    }, []);
   /* useEffect(() => {
        if (state){
            cartService.getCartsByUserId(state.id).then(carts => setCarts(carts));
        }
    }, [state]);*/
    return (
        <div>
            {
                carts.map((cart: ICart) => <Cart key={cart.id} cart={cart} />)
            }
        </div>
    );
};

export default Carts;