import {FC} from 'react';
import { ICart } from '../../interfaces/carts.interface';

type PropsType = {
    cart:ICart
};

const Cart: FC<PropsType> = ({cart}) => {
    const {id, products, userId} = cart
    return (
        <div>
            {products}
        </div>
    );
};

export default Cart;