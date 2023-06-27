import { useInfiniteQuery } from "@tanstack/react-query";
import { queryConfig } from "../apis/@core";
import { useRecoilState } from "recoil";
import { movieState } from "../atoms/Movie.atom";
import { useEffect } from "react";

const useInfinite = (getMovie, type) => {
  const [movie, setMovie] = useRecoilState(movieState);

  const {
    status,
    data,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    //의존성 배열로 type 추가
    ["popular", type],
    ({ pageParam = 1 }) => getMovie(pageParam),
    {
      //nextPage를 리턴하는 getNextPageParam
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage > lastPage.length ? undefined : nextPage;
      },
      ...queryConfig,
    }
  );

  //pages의 내용을 전역변수인 movie안에다 넣어줌
  useEffect(() => {
    const currentData = data?.pages.flat();
    setMovie(currentData);
  }, [data, setMovie]);

  return {
    status,
    data,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useInfinite;
