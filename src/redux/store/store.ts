import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlices/userSlice";
import { postSlice } from "../slices/postSlices/postSlice";
import { commentSlice } from "../slices/commentSlice/commentSlice";

export const store = configureStore({
    reducer:{
        usersSlice: userSlice.reducer,
        postsSlice: postSlice.reducer,
        commentsSlice: commentSlice.reducer
    }
})
