import styled from "styled-components";

const RatingStar = ({ score }) => {
  const RatingStarNum = (num) => {
    const starNum = Math.floor(Math.trunc(num) / 2);
    return `/image/${starNum}star.png`;
  };

  return <StarImg src={RatingStarNum(score)} />;
};

export default RatingStar;

const StarImg = styled.img`
  width: 100px;
  height: 15px;
`;
