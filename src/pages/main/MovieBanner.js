import ImageSlider from "../../components/@common/ImageSlider";
import styled from "styled-components";
import { useState, useEffect } from "react";
import usePopular from "../../hooks/usePopular";

const MovieBanner = () => {
  const [ImgArr, setImgArr] = useState([]);
  const { data } = usePopular(1);

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
