import axios from "axios";

//쿼리 기본 설정, 캐쉬 설정
export const queryConfig = {
  refetchOnWindowFocus: false,
  retry: 1,
  cacheTime: 1000 * 60 * 20,
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
});
