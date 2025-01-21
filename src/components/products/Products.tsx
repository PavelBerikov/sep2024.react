import {FC, useEffect} from 'react';
import { loadAuthProducts, refresh } from '../../services/api.services';

const Products:FC = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        }).catch(reason => {
            console.log(reason)
            refresh().
            then(() => loadAuthProducts())
                .then(value => console.log(value))
        })
        ;
    }, []);
    return (
        <div>
        </div>
    );
};

export default Products;