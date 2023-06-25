import MovieApi from "../../apis/movie.api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../../components/@common/MovieList";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState(null);
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    const res = onSearchKeyword(keyword);
    console.log(searchResult);
  }, [searchParams]);

  const onSearchKeyword = async (keyword) => {
    try {
      const res = await MovieApi.getSearch({ query: keyword });
      setSearchResult(res.data.results);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    searchResult && <MovieList data={Array.from(searchResult)} search={true} />
  );
};
export default SearchPage;
