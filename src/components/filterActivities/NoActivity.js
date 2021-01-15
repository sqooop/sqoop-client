import React from 'react';
import styled from 'styled-components';
import noActivity from '../../assets/icons/NoActivity.svg';
const NoActivityWrap = styled.div`
  width: 350px;
  height: 164px;
  margin: 200px auto;
`;
// margin은 vh로 나중에 계산하자
const StyledImg = styled.img`
  margin: 0 auto;
  display: block;
  width: 110px;
  height: 70px;
`;
const StyledDiv = styled.div`
  margin-top: 35px;
  text-align: center;
  font-size: 16px;
  font-weight: 700 !important;
  line-height: 30px;
  span {
    font-size: 12px !important;
  }
`;
const NoActivity = () => {
  return (
    <NoActivityWrap>
      <StyledImg src={noActivity} alt="" />
      <StyledDiv>
        찾으시는 결과가 없어요!
        <br />
        <span>활동 기간을 늘려보거나, 직무/역량 태그 수를 줄여보세요.</span>
      </StyledDiv>
    </NoActivityWrap>
  );
};

export default NoActivity;
