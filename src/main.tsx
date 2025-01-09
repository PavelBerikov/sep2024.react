import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayouts'
import AboutPages from './pages/AboutPages'
import UsersPage from './pages/UsersPage'
import SinglUsersDetailsPage from './pages/SinglUsersDetailsPage'

const router = createBrowserRouter([
    { path: '/', element:  <MainLayout/>,
    children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'users/details', element: <SinglUsersDetailsPage/>},
        {path: 'about', element: <AboutPages/>}
    ]},
])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
