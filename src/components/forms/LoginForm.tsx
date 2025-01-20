import {FC} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../interfaces/userLogin.interface';

const LoginForm:FC = () => {
    const {register, handleSubmit, reset} = useForm<IUserLogin>({mode:'all'});
    const navigate = useNavigate();
    const foo = (user:IUserLogin): IUserLogin => {
        localStorage.setItem('login', JSON.stringify(user));
        navigate('/login/resources');
        reset()
        return user
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