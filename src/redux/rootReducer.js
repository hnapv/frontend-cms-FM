import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import contractSlice from "./slices/contractSlice"
import customerSlice from "./slices/customerSlice"
import userSlice from "./slices/userSlice"

const rootReducer = combineReducers({
    auth: authSlice,
    customer: customerSlice,
    user: userSlice,
    contract: contractSlice
})

export default rootReducer