import MovieList from "./MovieList";
import MovieApi from "../../apis/movie.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SimpleSlider from "../../components/@common/ImgSlider";

const MainPage = () => {
  const params = useParams();
  const type = params.type || "popular";
  const [sort, setSort] = useState(null);

  const getMovie = async (page) => {
    try {
      const res = await MovieApi.getMovies(page, type);
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    type === "popular"
      ? setSort("인기순")
      : type === "now_playing"
      ? setSort("현재 상영작")
      : type === "top_rated"
      ? setSort("평점 높은순")
      : setSort("개봉 예정작");
  }, [type]);

  const {
    status,
    data,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["popular", type],
    ({ pageParam = 1 }) => getMovie(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage > lastPage.length ? undefined : nextPage;
      },
    }
  );

  const handleObserver = useCallback(
    (entries) => {
      console.log("entries", entries);
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  const observerElem = useRef();

  useEffect(() => {
    const element = observerElem.current;
    if (!element) return;
    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return status === "loading" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>Error occurred while fetching data</div>
  ) : (
    <>
      <SimpleSlider data={data} />
      {/* <MovieBanner data={data} /> */}
      <Padding />
      <Title>{sort}</Title>
      {data && isSuccess && <MovieList data={data.pages} search={false} />}
      <div className="loader" ref={observerElem}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </div>
    </>
  );
};

export default MainPage;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  border-bottom: 0.16rem solid black;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-top: 5px;
`;

const Padding = styled.div`
  height: 100px;
  /* background: linear-gradient(to bottom, #666, white); */
`;

//useObserver
