import axios from "axios"
import { IUserLogin } from "../interfaces/userLogin.interface"
import { IUserWithTokens } from "../interfaces/userWithTokens.interface"

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {}
})

export const authService = {
    userAuth: async (user:IUserLogin):Promise<IUserWithTokens> => {
        const {data} = await axiosInstance.post<IUserWithTokens>('auth/login', user)
        return data
    }
}
