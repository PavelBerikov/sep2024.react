import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import {Provider, useSelector} from 'react-redux'
import {PayloadAction, configureStore, createSlice} from '@reduxjs/toolkit/react'
import { IUser } from './interfaces/user.interface.ts'

type userSliceType = {
    users: IUser[]
}
const initialState:userSliceType = {users: []}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
})

export const store = configureStore({
    reducer:{
        usersSlice: userSlice.reducer
    }
})

export const userSliceActions = {
    ...userSlice.actions
}

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
