import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";

const routes = [
    {
        path: "", element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path:'posts', element: <PostsPage/>}
        ]
    }
]
export const router = createBrowserRouter(routes);