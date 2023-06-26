import MovieApi from "../../apis/movie.api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/@common/MovieList";
import { useQuery } from "@tanstack/react-query";
import NoDataPage from "../fetching/noData";
import LoadingPage from "../fetching/loading";
import ErrorPage from "../error/error";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const onSearchKeyword = async () => {
    try {
      const res = await MovieApi.getSearch({ query: keyword });
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };

  const { data, status } = useQuery(["detail", keyword], onSearchKeyword);

  return status === "loading" ? (
    <LoadingPage />
  ) : status === "error" ? (
    <ErrorPage />
  ) : data.length > 0 ? (
    <MovieList search={true} data={data} />
  ) : (
    <NoDataPage />
  );
};
export default SearchPage;
