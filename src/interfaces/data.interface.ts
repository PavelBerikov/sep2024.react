import { IComment } from "./comment.interface";
import { IPost } from "./post.interface";
import { IUser } from "./user.interface";

export interface IData {
    users: IUser[],
    posts: IPost[],
    comments: IComment[]
}