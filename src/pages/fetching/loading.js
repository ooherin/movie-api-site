import styled from "styled-components";

const LoadingPage = () => {
  return (
    <Wrapper>
      <LoadingImg src="/image/loading.gif" alt="로딩중" />
    </Wrapper>
  );
};

export default LoadingPage;

const LoadingImg = styled.img`
  width: 10%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
