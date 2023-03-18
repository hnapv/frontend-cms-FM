import axios from "../utils/axiosCustomize"


export const apiLoginUser = async(username,password)=>{
    const data = await axios.post(
       "api/user/loginUser",
       { username, password },
       //thêm thuộc tính này để lưu được cookie khi gọi API
       { withCredentials: true } 
     )
     return data
}

export const apiLogoutUser = async()=>{
    const data = await axios.post(
       "api/user/logoutUser",
       "",
       //thêm thuộc tính này để lưu được cookie khi gọi API
       { withCredentials: true } 
     )
     return data
}