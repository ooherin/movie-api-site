import ImageSlider from "../../components/@common/ImageSlider";
import styled from "styled-components";
import MovieApi from "../../apis/movie.api";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import usePopular from "../../hooks/usePopular";

const MovieBanner = () => {
  const [ImgArr, setImgArr] = useState([]);
  const { data } = usePopular(1);

  // const getMovie = async (page) => {
  //   try {
  //     const res = await MovieApi.getMovies(1, "popular");
  //     return res.data.results;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const { data, status } = useQuery(["popular"], getMovie);
  // console.log("data", data);

  useEffect(() => {
    if (data) {
      const sliced = data.slice(0, 3);
      setImgArr(sliced);
    } else {
    }
  }, [data]);

  return (
    data && (
      <Wrapper>
        <ImageSlider ImgArr={ImgArr} />
      </Wrapper>
    )
  );
};

export default MovieBanner;

const Wrapper = styled.div`
  background: linear-gradient(to bottom, black, #666);
`;
