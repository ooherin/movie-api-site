import MovieList from "../../components/@common/MovieList";
import MovieApi from "../../apis/movie.api";
import { useEffect, useRef, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SimpleSlider from "../../components/@common/ImgSlider";
import { movieState } from "../../atoms/Movie.atom";
import { useRecoilState } from "recoil";
import useInfinite from "../../hooks/useInfinite";
import LoadingPage from "../fetchingPage/loading";
import NoDataPage from "../fetchingPage/noData";
import ErrorPage from "../error/error";

const MainPage = () => {
  const params = useParams();
  const type = params.type || "popular";
  const [sort, setSort] = useState(null);
  const [movie, setMovie] = useRecoilState(movieState);

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
  } = useInfinite(getMovie, type);

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
    <LoadingPage />
  ) : status === "error" ? (
    <ErrorPage />
  ) : (
    <>
      <SimpleSlider data={movie} />
      <Padding />
      <Title>{sort}</Title>
      {data && isSuccess && <MovieList data={movie} search={false} />}
      <div className="loader" ref={observerElem}>
        {isFetchingNextPage && hasNextPage ? <LoadingPage /> : <NoDataPage />}
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
`;

// import MovieList from "../../components/@common/MovieList";
// import { useEffect, useRef, useCallback, useState } from "react";
// import { useParams } from "react-router-dom";
// import styled from "styled-components";
// import SimpleSlider from "../../components/@common/ImgSlider";
// import { movieState } from "../../atoms/Movie.atom";
// import { useRecoilState } from "recoil";
// import useInfinite from "../../hooks/useInfinite";
// import useMovieList from "../../hooks/useMovieList";
// import MovieApi from "../../apis/movie.api";

// const MainPage = () => {
//   const [movie, setMovie] = useRecoilState(movieState);
//   const { data } = useMovieList();
//   const params = useParams();
//   let type = params.type || "popular";
//   const [sort, setSort] = useState(null);
//   const observerElem = useRef();

//   const getMovie = async (page) => {
//     try {
//       const res = await MovieApi.getMovies(page, type);
//       return res.data.results;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const { status, isSuccess, hasNextPage, isFetchingNextPage, fetchNextPage } =
//     useInfinite(getMovie, type);

//   const handleObserver = useCallback(
//     (entries) => {
//       console.log("entries", entries);
//       const [target] = entries;
//       if (target.isIntersecting && hasNextPage) {
//         fetchNextPage();
//       }
//     },
//     [fetchNextPage, hasNextPage]
//   );

//   useEffect(() => {
//     const element = observerElem.current;
//     if (!element) return;
//     const option = { threshold: 0 };
//     const observer = new IntersectionObserver(handleObserver, option);
//     observer.observe(element);
//     return () => observer.unobserve(element);
//   }, [fetchNextPage, hasNextPage, handleObserver]);

//   // useEffect(() => {
//   //   if (data) {
//   //     data.pages.map((list) => {
//   //       return setMovie([...movie, ...list.flat()]);
//   //     });
//   //   } else {
//   //   }
//   // }, [fetchNextPage, hasNextPage, data, setMovie, movie]);

//   console.log("seeMovie", movie);
//   return status === "loading" ? (
//     <div>Loading...</div>
//   ) : status === "error" ? (
//     <div>Error occurred while fetching data</div>
//   ) : (
//     <>
//       <SimpleSlider data={movie} />
//       <Padding />
//       <Title>{sort}</Title>
//       {data && isSuccess && <MovieList search={false} data={movie} />}
//       <div className="loader" ref={observerElem}>
//         {/*로딩 gif 넣기*/}
//         {isFetchingNextPage && hasNextPage ? "Loading..." : "No search left"}
//       </div>
//     </>
//   );
// };

// export default MainPage;

// const Title = styled.div`
//   font-size: 30px;
//   font-weight: 700;
//   border-bottom: 0.16rem solid black;
//   padding-bottom: 10px;
//   padding-left: 30px;
//   padding-top: 5px;
// `;

// const Padding = styled.div`
//   height: 100px;
// `;
