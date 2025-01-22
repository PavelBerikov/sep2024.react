import {FC, useEffect} from 'react';
import { loadAuthProducts, refresh } from '../../services/api.services';

const Products:FC = () => {
    useEffect(() => {
        //загружаем продукты для авторизованного пользователя
        loadAuthProducts().then(products => {
            console.log(products);
        })
            //если возникает ошибка , выводим ее в консоль
            .catch(reason => {
            console.log(reason);
            //затем обновляем наш токен
            refresh()
                // и снова загружаем продукты
                .then(() => loadAuthProducts())
                .then(value => console.log(value));
        });


    }, []);
    return (
        <div>
            Products
        </div>
    );
};

export default Products;