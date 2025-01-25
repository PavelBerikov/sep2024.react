import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlices/userSlice";
import { postSlice } from "../slices/postSlices/postSlice";

export const store = configureStore({
    reducer:{
        usersSlice: userSlice.reducer,
        postsSlice: postSlice.reducer,
    }
})
