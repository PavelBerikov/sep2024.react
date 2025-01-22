import axios from "axios";
import { IUserWithTokens } from "../interfaces/IUserWithTokens.interface";
import { retriveLocalStorage } from "./helpers";
import {IProduct, IProductResponseModelType } from "../interfaces/products.intrface";
//базовая урла аксисоса
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
type LoginData = {
    username: string,
    password: string,
    expiresInMines: number
}
// здесь мы получаем объект запроса(велью) и с помощью колбека опписываем что будем с ним делать при каждом запросе
axiosInstance.interceptors.request.use((value) => {
    // если у объекта запроса , есть метод ГЕТ,
    if (value.method?.toLocaleUpperCase() === "GET") {
        //то в объект запроса, в его хедерс, вносим ключ Авторизейшен с значением Бирер + наш аксес токен
        value.headers.Authorization = `Bearer ` + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    //делаем запрос с обновленым объектом велью
    return value;
})
//асинк функция, которая принимает и постит не сервер объект, возвращает аксиос респонс c токенами и юзером
export const login = async ({username, password, expiresInMines}:LoginData):Promise<IUserWithTokens> => {
    //авейтим постовый метод аксиоса, добавляем урлу, и объект для передачи. деструктуризация объекта дата(респонс) и ренейм его,
    const {data:IUtherWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMines});
    console.log(IUtherWithTokens);
    // сетаем в сторедж наш респонс, для будущего использования.
    localStorage.setItem('user', JSON.stringify(IUtherWithTokens));
    return IUtherWithTokens;
}
//получаем продукты для авторизованного юзера
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    //гетовый запрос  с ответом в виде объекта аксисос , из которого достаем и возвращаем продукты
    const {data:{products}} = await axiosInstance.get<IProductResponseModelType>('/products');
    return products;
}
//обновляем аксес токен в случае его смерти
export const refresh = async () => {
    //получаем объект юзера с токенами из сторедж
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user')
    //авейтим постовый запрос на урлу рефреш,  и предаем объект в котором есть наш рефреш для обновления  и время жизни нового токена
    const {data:{accessToken, refreshToken}} = await axiosInstance.post<IUserWithTokens>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMines: 1
    });
    console.log(refreshToken);
    console.log(accessToken);
    //изменеям токены в объекте юзера
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    //сетаем обновленный объект для будущих рефрешей
    localStorage.setItem("user", JSON.stringify(iUserWithTokens));
}