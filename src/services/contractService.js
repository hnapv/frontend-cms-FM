import {  createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../utils/axiosCustomize"


export const fetchAllContracts = createAsyncThunk(
    'contracts/fetchAllContracts',
    async () => {
        const response = await axios.get("api/v1/contract/getListContracts")
        return response
    } 
)

export const fetchContractsWithPaginate = createAsyncThunk(
    'contracts/fetchContractsWithPaginate',
    async ({limit,page}) => {
        const response = await axios.get(`api/v1/contract?limit=${limit}&page=${page}`)
        console.log("check==>d",limit,page)
        return response
    } 
)

export const fetchApplicablePolicyRate = async (OrderDate)=>{
    const data = await axios.post("api/v1/policyRate/getApplicablePolicyRate",{OrderDate})
    console.log("datâ")
    return data
}