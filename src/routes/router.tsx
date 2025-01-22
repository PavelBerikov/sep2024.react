import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ResourcesPage from "../pages/ResourcesPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: '/login/resources', element: <ResourcesPage/>}
        ]}
])