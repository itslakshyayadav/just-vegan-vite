import axios from "axios";
import { API_BASE_PATH } from "@/helpers/constants";

function getAllOrders(query) {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  console.log(userAuthObject);
  return axios({
    methods: "GET",
    url: query ? `${API_BASE_PATH}/orders${query}` : `${API_BASE_PATH}/orders`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
  });
}

export default {
  getAllOrders,
};
