import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllCustomers } from '../../services/customerServices'


const initialState = {
    listCustomers: [],
    isLoading: false,
    isError: false,
    isAuthenticated : false
}

export const customerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllCustomers.pending, (state, action) => {
                // Add user to the state array
                state.isLoading= true
                state.isError= false
            })
            .addCase(fetchAllCustomers.fulfilled, (state, action) => {
                // Add user to the state array
                state.listCustomers= action.payload
                console.log("check==>>",action.payload)
                state.isLoading= false
                state.isError= false
            })
            .addCase(fetchAllCustomers.rejected, (state, action) => {
                // Add user to the state array
                state.isError= true
            })
    },
})


export default customerSlice.reducer