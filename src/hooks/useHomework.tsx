import {useEffect, useState } from "react"
import { getData } from "../services/api.services";


export const useHomework =<T,> (endPoint:string) => {
    const [data, setData] = useState<T | null>(null);
    useEffect(() => {
        getData<T>(endPoint).then(value => {
            console.log(value)
            setData(value);
        })
    }, []);
    return data;
}