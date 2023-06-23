import axios from "axios";
// const apiConfig = {
//   language: "ko-KR",
// };

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
});
