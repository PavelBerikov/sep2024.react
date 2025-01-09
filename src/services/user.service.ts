import { urls } from "../constants/urls";
import { IUser } from "../interfaces/user.interface";

export const UserService = {
    allUsers: async ():Promise<IUser[]> => {
        const users = await fetch(urls.getAllUsers)
            .then((res) => res.json())
        return users.users;
    }
}