import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlices/userSlice";

export const store = configureStore({
    reducer:{
        usersSlice: userSlice.reducer
    }
})
