import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../utils/axiosCustomize"

export const fetchAllCustomers = createAsyncThunk(
    'customers/fetchAllCustomers',
    async () => {
        const response = await axios.get("api/getListCustomer")
        return response
    } 
)


export const fetchCustomerByID = (CustomerID)=>{
    return axios.post("api/getDetailCustomerByCustomerID",{CustomerID})
}