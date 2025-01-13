import { urls } from "../constants/urls";
import { IUsersResponse } from "../interfaces/users.interface";

export const apiServices = {
    usersService:{
        getAllUsers:async (skip:number):Promise<IUsersResponse>=>{
            const users = await fetch(urls.users.getUsers + `?limit=10&skip=${skip}`)
                .then(response => response.json());
            return users;
} ,
    }
}