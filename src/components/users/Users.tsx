import { FC, useEffect, useState } from "react";
import { IUser } from "../../interfaces/users.interface";
import { UsersService } from "../../services/users.service";
import User from "./User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        UsersService.getAllUsers().then(users => setUsers(users));
    }, []);
    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;