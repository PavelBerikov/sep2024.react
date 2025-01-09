import {FC, useEffect, useState} from 'react';
import { ICart } from '../../interfaces/carts.interface';
import { cartService } from '../../services/cart.service';
import Cart from '../Cart/Cart';

const Carts: FC = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        cartService.getAllCarts().then(value => setCarts(value));
    }, []);
    return (
        <div style={{ width: '50vw', borderRadius: '10px', border: '1px solid black' }}>
            {
                carts.map((cart: ICart) => <Cart key={cart.id} cart={cart} />)
            }
        </div>
    );
};

export default Carts;