import { FC } from "react";
import Menu from "../components/menu/Menu";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;