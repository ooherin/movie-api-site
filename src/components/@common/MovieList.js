import React from "react";
import OneMovie from "../../components/@common/OneMovie";
import styled from "styled-components";

const MovieList = ({ data }) => {
  console.log("data", data);

  return (
    data && (
      <Wrapper>
        <List>
          {data.map((movie, index) => {
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
