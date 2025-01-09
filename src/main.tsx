import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import UsersPage from './pages/UsersPage'
import PostsPage from './pages/PostsPage'

const router = createBrowserRouter([
    { path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ] }
])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
