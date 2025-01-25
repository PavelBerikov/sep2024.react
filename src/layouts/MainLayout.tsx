import {FC, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { dataSliceActions } from '../redux/slices/dataSlice/dataSlice';

const MainLayout:FC = () => {
    const {dataSlice} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(dataSliceActions.loadUsers());
        dispatch(dataSliceActions.loadUsers());
        dispatch(dataSliceActions.loadPosts());
        console.log(dataSlice)
    }, []);
    console.log(dataSlice)
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;