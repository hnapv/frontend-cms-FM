import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import customerSlice from "./slices/customerSlice"

const rootReducer = combineReducers({
    auth: authSlice,
    customer: customerSlice
})

export default rootReducer