// 리덕스 적용없음
import React from 'react';
import Styled from 'styled-components';
import { useEffect } from 'react';

const SaveConfirmWrap = Styled.div`
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  margin-top: 473px;
  margin-left: 12px;
  color: #195BFF;
  font-size: 10px;
  line-height: 150%;
  animation-name: popup;
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  overflow: hidden;

  @keyframes popup {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

const SaveConfirm = ({ setSaved }) => {
  useEffect(() => {
    setTimeout(() => {
      setSaved(false);
    }, 2500);
  });

  return <SaveConfirmWrap>저장이 완료되었습니다!</SaveConfirmWrap>;
};

export default SaveConfirm;
