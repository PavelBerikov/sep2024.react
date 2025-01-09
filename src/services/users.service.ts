import { IUser } from "../interfaces/users.interface";
import { urls } from "../urls/url";

export const UsersService = {
    getAllUsers: async ():Promise<IUser[]> => {
        const users = await fetch(urls.users.allUsers).then(value => value.json());
        return users;

    },
    getByIdById: async (id:number):Promise<IUser> => {
        const user = await fetch(urls.users.userById(id)).then(value => value.json());
        return user;
    }
}