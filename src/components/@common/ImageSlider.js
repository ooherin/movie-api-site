import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useState, useRef } from "react";
import { current } from "@reduxjs/toolkit";

const ImageSlider = ({ ImgArr }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef(null);
  const imgUrl = process.env.REACT_APP_IMG_BASIC_URL;

  const ImgLength = 1000;
  const ImgTotalLength = ImgArr.length * ImgLength;

  const onMovieLeft = () => {
    if (currentIdx < 0) {
      setCurrentIdx(ImgArr.length - 1);
      slideRef.current.style.transition = "all 1s ease-in-out";
      slideRef.current.style.transform = `translateX(-2000px)`;
    } else {
      setCurrentIdx((prev) => prev - 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        currentIdx * ImgLength
      }px)`; // 수정
    }
  };

  const onMovieRight = () => {
    if (currentIdx === ImgArr.length - 1) {
      setCurrentIdx(0);
      slideRef.current.style.transition = "all 1s ease-in-out";
      slideRef.current.style.transform = "translateX(0px)";
    } else {
      setCurrentIdx((prev) => prev + 1);
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (currentIdx + 1) * ImgLength
      }px)`;
    }
  };

  return (
    <Wrapper>
      <AiOutlineLeft
        style={{ ...IconStyle, left: "50px" }}
        onClick={onMovieLeft}
      />
      <ImgContainer ImgLength={ImgLength} ImgTotalLength={ImgTotalLength}>
        <ImgSlide
          ref={slideRef}
          ImgLength={ImgLength}
          ImgTotalLength={ImgTotalLength}
        >
          {ImgArr.map((image) => {
            return (
              <OneMovieContainer>
                <Img
                  src={`${imgUrl}${image.backdrop_path}`}
                  ImgLength={ImgLength}
                  ImgTotalLength={ImgTotalLength}
                />
                {/* <Text>
                  safdasfadsfasdfasdfadfasd. asdfadfsfasdzfdzfdafdsasdf.
                </Text> */}
              </OneMovieContainer>
            );
          })}
        </ImgSlide>
      </ImgContainer>
      <AiOutlineRight
        style={{ ...IconStyle, right: "50px" }}
        onClick={onMovieRight}
      />
    </Wrapper>
  );
};
export default ImageSlider;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 400px;
  overflow: hidden;
  padding-top: 100px;
  margin: 0 auto;
`;

const IconStyle = {
  color: "white",
  position: "absolute",
  top: "50%",
  fontSize: "30px",
  zIndex: 100,
};

const ImgSlide = styled.div`
  margin: 0 auto;
  width: 3000px;
  background-color: #888;
  overflow: hidden;
`;
const Img = styled.img`
  width: 1000px;
  height: 380px;
  margin-right: 20px; /* 이미지와 텍스트 사이의 간격을 조정하기 위해 수정 */
`;

const Text = styled.div`
  height: 380px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 텍스트를 세로 중앙 정렬하기 위해 추가 */
`;

const OneMovieContainer = styled.div`
  width: 1000px;
  background-color: skyblue;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 1000x;
  height: 380px;
  display: flex;
  margin: 0 auto;
`;
