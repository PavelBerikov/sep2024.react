import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import UsersPage from "../pages/UsersPage";
import CommentsPage from "../pages/CommentsPage";
import UserInfoPage from "../pages/UserInfoPage";


const routes = [
    {
        path: "", element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path:'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'userInfo', element: <UserInfoPage/>},
        ]
    }
]
export const router = createBrowserRouter(routes);