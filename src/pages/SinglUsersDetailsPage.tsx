import { FC } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "../interfaces/users.interface";

const SinglUsersDetailsPage: FC = () => {
    const {state} = useLocation();
    const user = state as IUser
    return (
        <div>
            {JSON.stringify(user.address)}
        </div>
    );
};

export default SinglUsersDetailsPage;