import {FC} from 'react';
import Cars from '../components/cars/Cars';
import CarForm from '../components/carForm/CarForm';

const CarsPage:FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarsPage;