import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    account: '',
    isLoading: false,
    isError: false,
    isAuthenticated : false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state,action)=>{
            state.account = action.payload.account
            console.log("state==>",state.account)
            state.isAuthenticated=true
        }
    },
    // extraReducers: (builder) => {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     builder
    //         .addCase(fetchAllUsers.pending, (state, action) => {
    //             // Add user to the state array
    //             state.isLoading= true
    //             state.isError= false
    //         })
    //         .addCase(fetchAllUsers.fulfilled, (state, action) => {
    //             // Add user to the state array
    //             state.listUsers= action.payload
    //             console.log(action.payload)
    //             state.isLoading= false
    //             state.isError= false
    //         })
    //         .addCase(fetchAllUsers.rejected, (state, action) => {
    //             // Add user to the state array
    //             state.isError= true
    //         })
    // },
})

export const { loginSuccess } = authSlice.actions


export default authSlice.reducer