import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../interfaces/user.interface";
import { IPost } from "../../../interfaces/post.interface";
import { IComment } from "../../../interfaces/comment.interface";
import { loadUsers } from "../userSlices/userSlice";
import { loadPosts } from "../postSlices/postSlice";
import { loadComments } from "../commentSlice/commentSlice";

type dataSliceType = {
    users:IUser[],
    posts: IPost[],
    comments: IComment[]
}
const initialState:dataSliceType = {users:[], posts:[], comments:[]}

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
    }
});

export const dataSliceActions = {
    ...dataSlice.actions, loadUsers, loadComments, loadPosts
}