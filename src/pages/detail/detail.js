import styled from "styled-components";
import { useParams } from "react-router-dom";
import MovieApi from "../../apis/movie.api";
import { useQuery } from "@tanstack/react-query";

const DetailPage = () => {
  const params = useParams();
  const movie_id = params.id;

  const getDetail = async () => {
    try {
      const res = await MovieApi.getOneMovie(movie_id);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const { data, status, isSuccess } = useQuery(["detail"], getDetail);
  const videoUrl = `https://www.youtube.com/embed/${data?.data?.videos?.results[0]?.key}`;
  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;
  console.log(data);

  return status === "loading" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>Error occurred while fetching data</div>
  ) : (
    data &&
    isSuccess && (
      <Wrapper imgUrl={imgUrl} backdropPath={data.data.backdrop_path}>
        <Title>{data.data.title}</Title>
        <Info>
          <Img src={`${imgUrl}${data.data.poster_path}`} />
          <TextContainer>
            <Text>{data.data.original_title}</Text>
            <Text>{data.data.overview}</Text>
            <Text>{data.data.release_date}</Text>
            <Text>{data.data.vote_average}</Text>
            <Text>{data.data.tagline}</Text>
            <Text>{data.data.status}</Text>
            <Text>시간 : {data.data.runtime}</Text>
          </TextContainer>
        </Info>
        <iframe
          width="560"
          height="315"
          src={`${videoUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          autoPlay // 자동 재생을 위해 autoplay 속성 추가
        ></iframe>
      </Wrapper>
    )
  );
};
export default DetailPage;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 100px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent),
    url(${(props) => props.imgUrl + props.backdropPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.div`
  position: absolute;
  left: 120px;
  top: 0;
  font-size: 30px;
  font-weight: 800;
  color: white;
  display: flex;
  margin-top: 30px;
`;

const Info = styled.div`
  display: flex;
  margin-top: 100px;
  width: 80%;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 300px;
`;

const Text = styled.div`
  color: white;
`;

const TextContainer = styled.div`
  width: 500px;
`;
