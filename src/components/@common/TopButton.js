import styled from "styled-components";
import { RiArrowDropUpFill } from "react-icons/ri";
function TopButton() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Wrapper onClick={scrollToTop} type="button">
      <S.Flex>
        <RiArrowDropUpFill size={35} />
        <S.TopText>TOP</S.TopText>
      </S.Flex>
    </S.Wrapper>
  );
}
export default TopButton;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 0.15rem solid white;
  color: white;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: white;
    background-color: ${({ theme }) => theme.PALLETE.red};
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TopText = styled.div`
  display: inline;
  position: absolute;
  top: 30px;
`;
const S = {
  Wrapper,
  Flex,
  TopText,
};
