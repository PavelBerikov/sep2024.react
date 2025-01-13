import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout';
import UsersPage from './pages/UsersPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>, children:[
                    {path:'users/:page', element: <UsersPage/>}
                ]}
        ]}
]);
createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>)
