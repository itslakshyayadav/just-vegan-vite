import axios from "axios";
import { API_BASE_PATH } from "@/helpers/constants";

function fetchUser() {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  return axios({
    method: "GET",
    url: `${API_BASE_PATH}/users/${userAuthObject.userId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
  });
}

// function orderCart() {
//   const userAuthStore = localStorage.getItem("userAuth");
//   const userAuthObject = JSON.parse(userAuthStore);
//   return axios({
//     method: "GET",
//     url: `${API_BASE_PATH}/orders`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${userAuthObject.accessToken}`,
//     },
//   });
// }

function createUser(signup) {
  return axios({
    method: "POST",
    url: `${API_BASE_PATH}/users`,
    headers: {
      "Content-Type": "application/json",
    },
    data: signup,
  });
}

function loginUser(login) {
  return axios({
    method: "POST",
    url: `${API_BASE_PATH}/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: login,
  });
}
function createAddress(addressModel) {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  return axios({
    method: "POST",
    url: `${API_BASE_PATH}/users/${userAuthObject.userId}/address`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
    data: addressModel,
  });
}

function setDefaultAddress(addresses) {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  const userPayload = localStorage.getItem("userPayload");
  const userAuthPayload = JSON.parse(userPayload);
  console.log(userAuthPayload);
  return axios({
    method: "POST",
    url: `${API_BASE_PATH}/users/${userAuthObject.userId}/default-address`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
    data: { addressId: addresses },
  });
}

function removeAddress(addressId) {
  const userAuthStore = localStorage.getItem("userAuth");
  const userAuthObject = JSON.parse(userAuthStore);
  return axios({
    method: "Delete",
    url: `${API_BASE_PATH}/users/${userAuthObject.userId}/address/${addressId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAuthObject.accessToken}`,
    },
    data: {
      addressId,
    },
  });
}
// function editAddress(addressId) {
//   const userAuthStore = localStorage.getItem("userAuth");
//   const userAuthObject = JSON.parse(userAuthStore);
//   return axios({
//     method: "PUT",
//     url: `${API_BASE_PATH}/users/${userAuthObject.userId}/address/${addressId}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${userAuthObject.accessToken}`,
//     },
//     data: {
//       addressId,
//     },
//   });
// }

export default {
  fetchUser,
  createUser,
  loginUser,
  createAddress,
  removeAddress,
  setDefaultAddress,
  // editAddress,
  // orderCart,
};
