import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onMovePage = (sort) => {
    navigate(`/movie/${sort}`);
  };
  return (
    <Wrapper>
      <Logo src="/image/logo.png" />
      <div
        onClick={() => {
          onMovePage("popular");
        }}
      >
        인기순
      </div>
      <div
        onClick={() => {
          onMovePage("now_playing");
        }}
      >
        현재 상영작
      </div>
      <div
        onClick={() => {
          onMovePage("top_rated");
        }}
      >
        평점순
      </div>
      <div
        onClick={() => {
          onMovePage("upcoming");
        }}
      >
        개봉 예정작
      </div>
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
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;
