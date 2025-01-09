import { ICart } from "../interfaces/carts.interface";

export const cartService = {
    getAllCarts: async ():Promise<ICart[]> => {
        const carts = await fetch('https://dummyjson.com/carts').then((res) => res.json());
        return carts;
    }
}