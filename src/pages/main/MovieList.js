import React from "react";
import OneMovie from "../../components/@common/OneMovie";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieList = ({ data, search }) => {
  console.log("data", data);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("asfd", searchParams);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search ? setMovies(data) : setMovies((prev) => [...prev, ...data.flat()]);
  }, [data]);

  return (
    movies && (
      <Wrapper>
        <List>
          {movies.map((movie, index) => {
            return <OneMovie key={movie.id} movie={movie} index={index} />;
          })}
        </List>
      </Wrapper>
    )
  );
};

export default MovieList;

const List = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

// {data &&
//   data.map((movieList, index) => {
//     console.log("asfasf", movieList);
//     const movieListIdx = index;
//     if (searchParams.length !== 1) {
//       return movieList.map((movie, index) => (
//         <OneMovie
//           key={movie.id}
//           movie={movie}
//           index={index}
//           movieListIdx={movieListIdx}
//         />
//       ));
//     } else {
