import {FC, useEffect, useState} from 'react';
import { ICart } from '../../interfaces/carts.interface';
import { cartService } from '../../services/cart.service';
import Cart from '../Cart/Cart';

type Props = {
    id: number;
}
const Carts: FC<Props> = ({id}) => {
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
            cartService.getCartsByUserId(id).then(value => setCarts(value));
        }, []);
    return (
        <div>
            {
                carts.map((cart: ICart, index) => <Cart key={index} cart={cart}/>)
            }
        </div>
    );
};

export default Carts;