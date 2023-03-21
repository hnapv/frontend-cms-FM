import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllContracts, fetchContractsWithPaginate } from '../../services/contractService'


const initialState = {
    listContracts: [],
    isLoading: false,
    isError: false,
}

export const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            // .addCase(fetchAllContracts.pending, (state, action) => {
            //     // Add user to the state array
            //     state.isLoading = true
            //     state.isError = false
            // })
            // .addCase(fetchAllContracts.fulfilled, (state, action) => {
            //     // Add user to the state array
            //     state.listContracts = action.payload
            //     state.isLoading = false
            //     state.isError = false
            // })
            // .addCase(fetchAllContracts.rejected, (state, action) => {
            //     // Add user to the state array
            //     state.isError = true
            // })
            .addCase(fetchContractsWithPaginate.pending, (state, action) => {
                // Add user to the state array
                state.isLoading = true
                state.isError = false
            })
            .addCase(fetchContractsWithPaginate.fulfilled, (state, action) => {
                // Add user to the state array
                state.data = action.payload.DT
                state.isLoading = false
                state.isError = false
            })
            .addCase(fetchContractsWithPaginate.rejected, (state, action) => {
                // Add user to the state array
                state.isError = true
            })
    },
})


export default contractSlice.reducer