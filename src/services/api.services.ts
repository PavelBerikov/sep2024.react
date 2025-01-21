import axios from "axios";
import { IUserWithTokens } from "../interfaces/userWithTokens.interface";
import {IProduct, IProductResponseModelType } from "../interfaces/product.interface";
import { retriveLocalStorage } from "./helpers";
import { ITokenPairInterface } from "../interfaces/tokenPair.interface";

type LoginData = {
    username: string,
    password: string,
    expiresInMin: number
}
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((value) => {
    if(value.method?.toLocaleUpperCase() === "GET") {
        value.headers.Authorization = "Bearer " + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return value
})

export const login = async ({username, password, expiresInMin}:LoginData) => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMin});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data:{products}} = await axiosInstance.get<IProductResponseModelType>('/products');
    return products;
}
export const refresh = async ()=> {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<ITokenPairInterface>('/refresh', {
        refreshToken: retriveLocalStorage<IUserWithTokens>('user').refreshToken,
        expiresInMin: 1
    });
    console.log(refreshToken)
    console.log(accessToken)
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));
}