import {FC} from 'react';
import { useForm } from 'react-hook-form';
import { IUserLogin } from '../../interfaces/userLogin.interface';
import { authService } from '../../services/api.services';

const LoginForm:FC = () => {
    const {register, handleSubmit, reset} = useForm<IUserLogin>();
    const foo = async (user:IUserLogin) => {
        await authService.userAuth(user);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(foo)}>
            <input type="text" placeholder={'login'} {...register('login')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    );
};

export default LoginForm;