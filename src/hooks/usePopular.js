import MovieApi from "../apis/movie.api";
import { useQuery } from "@tanstack/react-query";

const usePopular = (page) => {
  const getMovie = async (page) => {
    try {
      const res = await MovieApi.getMovies(1, "popular");
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };
  const { data, status } = useQuery(["popular"], getMovie);

  return { data, status };
};
export default usePopular;
