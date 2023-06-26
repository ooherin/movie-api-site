import MovieApi from "../apis/movie.api";
import { useQuery } from "@tanstack/react-query";

const useMovieList = (page, type) => {
  const getMovie = async (page) => {
    try {
      const res = await MovieApi.getMovies(page, type);
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };
  const { data, status } = useQuery([`type`], getMovie(page || 1));

  return { data, status };
};
export default useMovieList;
