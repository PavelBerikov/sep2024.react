import {FC} from 'react';
import { ICart } from '../../interfaces/carts.interface';

type PropsType = {
    cart:ICart
};

const Cart: FC<PropsType> = ({cart}) => {
    const {id, userId, products} = cart
    return (
        <div>
            {

            }
            <div>{id} - {userId}</div>
            {
                products.map(product => <div key={cart.id}>{product.title} - {product.price}</div>)
            }
            <hr/>
        </div>
    );
};

export default Cart;