import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <ErrorImg src="/image/error.png" />
    </Wrapper>
  );
};

export default ErrorPage;

const ErrorImg = styled.img`
  width: 10%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
