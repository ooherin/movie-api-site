import axios from "axios";
import { axiosInstance } from "./@core";

// const queryConfig = { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 };

const apiConfig = {
  language: "ko-KR",
};
const MovieApi = {
  getMovies(page, type) {
    console.log(page, type);
    return axiosInstance.get(`/movie/${type}?language=ko-KR&page=${page}`, {
      ...apiConfig,
    });
  },
  getOneMovie(movie_id) {
    return axiosInstance.get(`/movie/${movie_id}?language=ko-KR`);
  },
};

export default MovieApi;
