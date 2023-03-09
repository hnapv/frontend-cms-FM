import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../utils/axiosCustomize"

export const fetchAllCustomers = createAsyncThunk(
    'customers/fetchAllCustomers',
    async () => {
        const response = await axios.get("api/getListCusInfo")
        return response
    } 
)