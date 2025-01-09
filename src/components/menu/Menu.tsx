import { FC } from "react";
import { Link } from "react-router-dom";

const Menu: FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
            </ul>

        </div>
    );
};

export default Menu;