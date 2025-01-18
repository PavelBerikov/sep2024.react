import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";

export const router = createBrowserRouter([
    { path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ] }
])