import { axiosInstance } from "./@core";

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
    return axiosInstance.get(
      `/movie/${movie_id}?language=ko-KR&append_to_response=videos`
    );
  },
  getSearch(params) {
    return axiosInstance.get("/search/movie?language=ko-KR", {
      params,
    });
  },
  getMovieReview(movie_id) {
    return axiosInstance.get(`/movie/${movie_id}/reviews?language=ko-KR`);
  },
};

export default MovieApi;
