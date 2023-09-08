import axios from "axios"
import { API_BASE_PATH } from "@/helpers/constants";

function getDishes() {
    return axios(
        {
            method: 'GET',
            url: `${API_BASE_PATH}/dishes`,
        }
    );
}

function addFavouriteDish(dishId) {
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);
    return axios({
        method: "POST",
        url: `${API_BASE_PATH}/users/${userAuthObject.userId}/add-favourite-dish`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAuthObject.accessToken}`
        },
        data: {
            dishId
        }
    })
}

function removeFavouriteDish(dishId){
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);
    return axios({
        method:"POST",
        url:`${API_BASE_PATH}/users/${userAuthObject.userId}/remove-favourite-dish`,
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAuthObject.accessToken}`
        },
        data:{
            dishId
        }
    })
}


function createDish(dishModel) {
    const userAuthStore = localStorage.getItem("userAuth");
    const userAuthObject = JSON.parse(userAuthStore);

    return axios({
        method: "POST",
        url: `${API_BASE_PATH}/dishes`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAuthObject.accessToken}`
        },
        data: dishModel
    })
}

export default {
    getDishes,
    addFavouriteDish,
    removeFavouriteDish,
    createDish
}