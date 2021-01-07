import React from 'react';
import styled from 'styled-components';
import noActivity from '../../assets/icons/noActivity.svg';
const NoActivityWrap = styled.div``;

const NoActivity = props => {
  return (
    <NoActivityWrap>
      <img src={noActivity} alt="" />
      <div>찾으시는 결과가 없어요!</div>
      <div>활동 기간을 늘려보거나, 직무/역량 태그 수를 줄여보세요.</div>
    </NoActivityWrap>
  );
};

export default NoActivity;
