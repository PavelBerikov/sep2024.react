import {FC, useEffect, useState} from 'react';
import { ICar } from '../../inerfaces/car.interface';
import Car from '../car/Car';
import { CarsService } from '../../services/cars.service';

const Cars:FC = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        CarsService.getAllCars().then(res => setCars(res))
    }, []);
    return (
        <div>
            {
                cars.map((car: ICar) => <Car key={car.id} car={car} />)
            }
        </div>
    );
};

export default Cars;