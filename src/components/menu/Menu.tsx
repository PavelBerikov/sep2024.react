import { FC } from "react";
import { Link } from "react-router-dom";

const Menu:FC = () => {
    return (
        <div>
           <ul>
               <li><Link to={'/'}>home</Link></li>
               <li><Link to={'/about'}>about</Link></li>
               <li><Link to={'/contact'}>contact</Link></li>
           </ul>
        </div>
    );
};

export default Menu;