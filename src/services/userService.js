import axios from "axios";
import { API_BASE_PATH } from "@/helpers/constants";

// function fetchUser() {
//     const userAuthStore = localStorage.getItem("userAuth");
//     const userAuthObject = JSON.parse(userAuthStore);
//     return axios(
//         {
//             method:"GET",
//             url:`${API_BASE_PATH}/users/${userAuthObject.userId}`,
//             headers:{
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${userAuthObject.accessToken}`
//             },
            
//             data:{
                
//             }
//         }
//     )
// }
function createUser(signup){
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);

    return axios({
        method:"POST",
        url:`${API_BASE_PATH}/users`,
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAuthObject.accessToken}`
        },
        data: signup
    })
}

export default{
    createUser,
}