import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    Authorization: process.env.REACT_APP_KEY,
  },
});
