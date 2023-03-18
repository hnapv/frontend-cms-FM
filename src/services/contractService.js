import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../utils/axiosCustomize"


export const fetchAllContracts = createAsyncThunk(
    'contracts/fetchAllContracts',
    async () => {
        const response = await axios.get("api/v1/contract/getListContracts")
        return response
    } 
)