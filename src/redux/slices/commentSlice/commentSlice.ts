import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IComment } from "../../../interfaces/comment.interface";

type CommentSliceType = {
    comments: IComment[];
}
const initialState:CommentSliceType = {
    comments: [],
}
export const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await fetch("http://jsonplaceholder.typicode.com/comments")
                .then(res => res.json());
            return thunkAPI.fulfillWithValue(comments);
        }catch (e) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }

)
export const commentSlice = createSlice({
    name:'commentSlice',
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        })

    }

});

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
}