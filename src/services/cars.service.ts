import axios from "axios"
import { ICar } from "../inerfaces/car.interface"

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1/',
    headers: {'Content-Type': 'application/json'},
})

export const CarsService = {
    getAllCars:async ():Promise<ICar[]> => {
        const {data} = await axiosInstance.get<ICar[]>('/cars')
        return data
    },
    createCar: async (car:ICar)=> {
        const {data} = await axiosInstance.post<ICar>('/cars', car)
        return data
    }
}

axiosInstance.interceptors.request.use((request) => {
    console.log(request)
    return request
})
axiosInstance.interceptors.response.use((response) => {
    console.log(response)
    return response
})