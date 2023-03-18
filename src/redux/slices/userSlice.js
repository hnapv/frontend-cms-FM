import { createSlice } from '@reduxjs/toolkit'
import { fetchAllUsers } from '../../services/userService'


const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                // Add user to the state array
                state.isLoading= true
                state.isError= false
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                // Add user to the state array
                state.listUsers= action.payload
                console.log("check==>>",action.payload)
                state.isLoading= false
                state.isError= false
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                // Add user to the state array
                state.isError= true
            })
    },
})


export default userSlice.reducer