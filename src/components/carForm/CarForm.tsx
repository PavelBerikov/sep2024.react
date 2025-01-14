import {FC} from 'react';
import { useForm } from 'react-hook-form';
import { ICar } from '../../inerfaces/car.interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { carValidator } from '../../validators/car.validator';
import { CarsService } from '../../services/cars.service';

const CarForm:FC = () => {
    const {register, handleSubmit, formState:{isValid, errors}, reset} = useForm<ICar>(
        {mode: 'all', resolver: joiResolver(carValidator)});
    const foo =(car:ICar) => {
        CarsService.createCar(car);
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(foo)}>
                <label>
                    <input type="text"  placeholder="Brand" {...register("brand")}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="text" placeholder="Price" {...register("price")}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" placeholder="Year" {...register("year")}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>Add</button>
            </form>
        </div>
    );
};

export default CarForm;