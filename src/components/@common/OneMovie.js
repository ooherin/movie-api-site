import styled from "styled-components";
import { omitText } from "../../styles/common";
import { useNavigate } from "react-router-dom";

const OneMovie = ({ movie }) => {
  const { id } = movie;
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;

  const onDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Wrapper
      onClick={() => {
        onDetailPage(id);
      }}
    >
      <Img src={`${imgUrl}${movie.poster_path}`} />
      <Detail>
        <Title>{movie.title}</Title>
        <div>{movie.vote_average}</div>
      </Detail>
    </Wrapper>
  );
};

export default OneMovie;

const Img = styled.img`
  width: 197px;
  height: 260px;
  background-color: #888;
  border-radius: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 197px;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

const Detail = styled.div`
  height: 80px;
  width: 197px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 20px;
  ${omitText}
`;
