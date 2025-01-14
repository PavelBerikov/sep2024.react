import {FC} from 'react';
import { ICar } from '../../inerfaces/car.interface';

type PropsType = {
    car:ICar
};

const Car: FC<PropsType> = ({car}) => {
    const {id, price, brand, year} = car;
    return (
        <div>
            <div>Id - {id}</div>
            <div>Brand - {brand}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <hr/>
        </div>
    );
};

export default Car;