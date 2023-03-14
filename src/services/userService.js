import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../utils/axiosCustomize"

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const response = await axios.get("api/user/getListUser")
        return response
    } 
)