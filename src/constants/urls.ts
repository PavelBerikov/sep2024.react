const BASE_URL = 'https://dummyjson.com';
export const urls = {
    getAllUsers: BASE_URL+'/users',
    getById:(id:number) => {
        return BASE_URL+id; //****************
    },
    getAllPosts: BASE_URL+'/posts'
}