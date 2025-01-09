import { urls } from "../constants/urls";
import { IPost } from "../interfaces/posts.interface";

export const postsService = {
    allPosts: async ():Promise<IPost[]> => {
        const posts = await fetch(urls.getAllPosts)
            .then(res=>res.json());
        return posts.posts;
    }
}