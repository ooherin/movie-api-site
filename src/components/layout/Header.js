import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onMovePage = (sort) => {
    navigate(`/movie/${sort}`);
  };
  const onMoveHome = () => {
    navigate("/movie/popular");
  };

  return (
    <Wrapper>
      <Logo src="/image/logo.png" onClick={onMoveHome} />
      <Text
        onClick={() => {
          onMovePage("popular");
        }}
      >
        인기순
      </Text>
      <Text
        onClick={() => {
          onMovePage("top_rated");
        }}
      >
        평점순
      </Text>
      <Text
        onClick={() => {
          onMovePage("now_playing");
        }}
      >
        현재 상영작
      </Text>
      <Text
        onClick={() => {
          onMovePage("upcoming");
        }}
      >
        개봉 예정작
      </Text>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.PALLETE.red};
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: 800;
`;

const Logo = styled.img`
  width: 100px;
  padding-bottom: 7px;
`;

const Text = styled.div`
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
