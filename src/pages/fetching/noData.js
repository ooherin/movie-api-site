import styled from "styled-components";

const NoDataPage = () => {
  return (
    <Wrapper>
      <NoDataImg src="/image/nodata.png" />
      <div>데이터가 없습니다.</div>
    </Wrapper>
  );
};

export default NoDataPage;

const NoDataImg = styled.img`
  width: 10%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`;
