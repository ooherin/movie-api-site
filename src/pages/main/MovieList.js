import OneMovie from "../../components/@common/OneMovie";
import styled from "styled-components";

const MovieList = ({ data }) => {
  return (
    <Wrapper>
      <Title>무비 차트</Title>
      <List>
        {data &&
          data.map((movieList) => {
            return movieList.map((movie) => {
              return <OneMovie key={movie.id} movie={movie} />;
            });
          })}
      </List>
    </Wrapper>
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
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  border-bottom: 0.2rem solid black;
  padding-bottom: 10px;
`;
