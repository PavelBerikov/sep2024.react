import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../../interfaces/post.interface";

type postSliceType = {
    posts: IPost[]
}
const initialState:postSliceType = {posts: []}
export const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
                .then(res => res.json());
            return thunkAPI.fulfillWithValue(posts);
        }catch (e) {
            return thunkAPI.rejectWithValue('Something went wrong');
        }
    }
)

export const postSlice = createSlice({
    name: "post",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }
});

export const postSliceActions = {
    ...postSlice.actions, loadPosts
}