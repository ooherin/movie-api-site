import styled from "styled-components";
import { useParams } from "react-router-dom";
import MovieApi from "../../apis/movie.api";
import { useQuery } from "@tanstack/react-query";

const DetailPage = () => {
  const params = useParams();
  const movie_id = params.id;
  const getDetail = async () => {
    try {
      const res = MovieApi.getOneMovie(movie_id);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const { data, status, onSuccess } = useQuery(["detail"], getDetail);
  console.log(data);

  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;

  return status === "loading" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>Error occurred while fetching data</div>
  ) : (
    data && (
      <Wrapper>
        <Img src={`${imgUrl}${data.data.poster_path}`} />
        <Img src={`${imgUrl}${data.data.backdrop_path}`} />
        <div>{data.data.title}</div>
        <div>{data.data.overview}</div>
      </Wrapper>
    )
  );
};
export default DetailPage;

const Wrapper = styled.div`
  width: 90%;
  background-color: grey;
`;

const Img = styled.img`
  width: 300px;
`;
