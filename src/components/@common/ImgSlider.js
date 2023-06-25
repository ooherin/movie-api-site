import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "styled-components";

export const SimpleSlider = ({ data }) => {
  const slicedData = data.pages[0].slice(0, 5);
  console.log(slicedData);
  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 재생 활성화
    autoplaySpeed: 3000, // 슬라이드 간의 시간 간격 (ms)
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {slicedData.map((data) => {
          return (
            <OneSlide>
              <Image src={`${imgUrl}${data.backdrop_path}`} />
              <Title>{data.title}</Title>
              <OverView>{data.overview}</OverView>
            </OneSlide>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default SimpleSlider;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  /* background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    ),
    /* url(${(props) => props.url}); */
    ru */
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  top: 20px;
  left: 30px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const OneSlide = styled.div`
  position: relative;
  height: 450px;
`;

const OverView = styled.div`
  font-size: 15px;
  color: white;
  font-weight: 500;
  position: absolute;
  bottom: 50px;
  left: 30px;
  z-index: 1;
  width: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  height: 95px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
`;
