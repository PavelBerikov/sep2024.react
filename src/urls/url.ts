const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: BASE_URL+'/users',
        userById:(id:number) => {
            return BASE_URL+'/users/'+id;
        },

    }
}