import axios from "axios";
import { API_BASE_PATH } from "@/helpers/constants";

function getOffers() {
  return axios({
    method: "GET",
    url: `${API_BASE_PATH}/offers`,
  });
}

function createOffer(offers) {
  return axios({
    method: "POST",
    url: `${API_BASE_PATH}/offers`,
    headers: {
      "Content-Type": "application/json",
    },
    data: offers,
  });
}

export default {
  getOffers,
  createOffer,
};
