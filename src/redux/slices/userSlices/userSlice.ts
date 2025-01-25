import {createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../../interfaces/user.interface"

type userSliceType = {
    users: IUser[]
}
const initialState:userSliceType = {users: []}
const loadUsers = createAsyncThunk(
    'userSlices/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('http://jsonplaceholder.typicode.com/users')
                .then(res => res.json());
            return thunkAPI.fulfillWithValue(users);
        }catch (e) {
            return thunkAPI.rejectWithValue('some error occurred');
        }
    }
)
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state)
                console.log(action)
            })
    }

})
export  const userSliceActions = {
    ...userSlice.actions, loadUsers
}