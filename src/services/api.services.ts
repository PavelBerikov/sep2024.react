import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/",
    headers: {}
});

export const getData = async<T> (url: string):Promise<T> => {
    const {data} = await axiosInstance.get<T>(url);
    return data;
}