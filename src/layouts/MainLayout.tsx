import {FC} from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';

const MainLayout:FC = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;