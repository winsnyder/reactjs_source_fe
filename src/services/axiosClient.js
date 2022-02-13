import axios from "axios";

const token = window.sessionStorage.getItem("token");

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    "btn-access-token":token,
  },
});
