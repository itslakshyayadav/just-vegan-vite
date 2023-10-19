import axios from "axios";
import { API_BASE_PATH } from "@/helpers/constants";

function getAllOrders() {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  console.log(userAuthObject);
  return axios({
    methods: "GET",
    url: `${API_BASE_PATH}/orders`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
  });
}

export default {
  getAllOrders,
};
