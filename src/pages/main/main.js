import MovieList from "./MovieList";
import MovieApi from "../../apis/movie.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const params = useParams();
  const type = params.type || "popular";

  const getMovie = async (page) => {
    try {
      const res = await MovieApi.getMovies(page, type);
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  };

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
      {data && isSuccess && <MovieList data={data.pages} />}
      <div className="loader" ref={observerElem}>
        {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
      </div>
    </>
  );
};

export default MainPage;
