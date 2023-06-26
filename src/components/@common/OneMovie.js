import styled from "styled-components";
import { omitText } from "../../styles/common";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RatingStar from "./RatingStar";

const OneMovie = ({ movie, index }) => {
  const params = useParams();
  const [sort, setSort] = useState(null);
  const { id } = movie;
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;

  const onDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    setSort(params.type);
  }, [params]);

  return (
    <Wrapper
      onClick={() => {
        onDetailPage(id);
      }}
    >
      {(index < 3 && sort === "popular") ||
      (index < 3 && sort === "top_rated") ? (
        <TopRatedNum>{index + 1}</TopRatedNum>
      ) : null}
      <Img src={`${imgUrl}${movie.poster_path}`} />
      <Detail>
        <Title>{movie.title}</Title>
        <RatingStar score={movie.vote_average} />
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
  position: relative;
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

const TopRatedNum = styled.div`
  position: absolute;
  color: white;
  font-size: 90px;
  font-weight: 700;
  top: -40px;
  left: -20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
