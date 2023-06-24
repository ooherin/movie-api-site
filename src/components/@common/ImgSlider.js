import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from "styled-components";

export const SimpleSlider = ({ data }) => {
  const slicedData = data.pages[0].slice(0, 3);
  console.log("sliced", slicedData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {slicedData.map((data) => {
          return <div key={data.id}>{data.title}</div>;
        })}
      </Slider>
    </Wrapper>
  );
};

export default SimpleSlider;

const Wrapper = styled.div``;
