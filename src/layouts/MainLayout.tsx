import {FC, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { userSliceActions } from '../redux/slices/userSlices/userSlice';
import { postSliceActions } from '../redux/slices/postSlices/postSlice';
import { commentSliceActions } from '../redux/slices/commentSlice/commentSlice';

const MainLayout:FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
        dispatch(postSliceActions.loadPosts());
        dispatch(commentSliceActions.loadComments());
    }, []);
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;